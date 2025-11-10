import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PropostaRepository } from './proposta.repository';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/entities/user.entity';
import { PropostaStatus, OrdemServicoStatus, ChamadoStatus, Prisma } from '@prisma/client';
import { AuditService } from 'src/common/services/audit.service';
import { BUSINESS_RULES } from 'src/common/constants/business-rules.constants';

@Injectable()
export class PropostaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly propostaRepo: PropostaRepository,
    private readonly userService: UserService,
    private readonly audit: AuditService,
  ) {}

  async listPrestador(prestadorId: string) {
    return this.propostaRepo.listByPrestador(prestadorId);
  }

  // Métodos privados de validação
  private async validateAdminPermission(userId: string): Promise<void> {
    const user = await this.userService.findById(userId);
    if (!user || user.userType !== UserType.ADMIN_PLATAFORMA) {
      throw new UnauthorizedException('Acesso negado');
    }
  }

  private async validatePropostaForAction(
    proposta: any,
    expectedStatus: PropostaStatus,
    actionName: string,
  ): Promise<void> {
    if (!proposta) {
      throw new NotFoundException('Proposta não encontrada');
    }
    if (proposta.status !== expectedStatus) {
      throw new BadRequestException(`Estado inválido para ${actionName}`);
    }
  }

  private validateValorAcordado(
    valorAcordado: string | undefined,
    precoMin?: number | Prisma.Decimal | null,
    precoMax?: number | Prisma.Decimal | null,
  ): number {
    if (!valorAcordado || isNaN(Number(valorAcordado)) || Number(valorAcordado) <= BUSINESS_RULES.PROPOSTA.VALOR_MIN) {
      throw new BadRequestException('Valor acordado é obrigatório e deve ser numérico (> 0)');
    }

    const valor = Number(valorAcordado);

    if (precoMin !== null && precoMin !== undefined) {
      const minPermitido = Number(precoMin) * BUSINESS_RULES.PROPOSTA.MIN_VALOR_ACORDADO_FACTOR;
      if (valor < minPermitido) {
        throw new BadRequestException(`Valor acordado abaixo do mínimo permitido (${minPermitido}).`);
      }
    }

    if (precoMax !== null && precoMax !== undefined) {
      const maxPermitido = Number(precoMax);
      if (valor > maxPermitido) {
        throw new BadRequestException(`Valor acordado acima do máximo permitido (${maxPermitido}).`);
      }
    }

    return valor;
  }

  private async createOrdemServicoData(
    chamadoId: number,
    prestadorId: string,
    valorAcordado: string,
    prazo?: number | null,
  ) {
    return {
      chamadoId,
      prestadorId,
      status: OrdemServicoStatus.EM_ANDAMENTO,
      valorAcordado: new Prisma.Decimal(valorAcordado),
      prazoAcordado: prazo ?? null,
    };
  }

  private async updateChamadoStatusData(status: ChamadoStatus, prestadorId?: string, valorEstimado?: string) {
    const data: any = { status };
    if (prestadorId) data.prestadorAssignadoId = prestadorId;
    if (valorEstimado) data.valorEstimado = new Prisma.Decimal(valorEstimado);
    return data;
  }

  async aceitarProposta(id: number, prestadorId: string, valorAcordado?: string) {
    const proposta = await this.propostaRepo.findByIdForPrestador(id, prestadorId);
    if (!proposta) throw new NotFoundException('Proposta não encontrada');
    if (proposta.status !== PropostaStatus.PROPOSTA_ENVIADA)
      throw new BadRequestException('Estado inválido para aceite');

    // Valor acordado é obrigatório no aceite do prestador
    if (!valorAcordado || isNaN(Number(valorAcordado)) || Number(valorAcordado) <= 0) {
      throw new BadRequestException('Valor acordado é obrigatório e deve ser numérico (> 0)');
    }

    // Valida o valor acordado usando o método extraído
    this.validateValorAcordado(valorAcordado, proposta.precoSugeridoMin, proposta.precoSugeridoMax);

    return this.prisma.$transaction(async tx => {
      // Atualiza proposta
      const updated = await tx.propostaServico.update({
        where: { id: proposta.id },
        data: { status: PropostaStatus.PROPOSTA_ACEITA },
      });

      // Cria OS se não existir para o chamado
      const existingOs = await tx.ordemServico.findUnique({ where: { chamadoId: proposta.chamadoId } });
      if (existingOs) throw new BadRequestException('Já existe OS para este chamado');

      // Cria ordem de serviço
      const ordemServicoData = await this.createOrdemServicoData(
        proposta.chamadoId,
        prestadorId,
        valorAcordado,
        proposta.prazoSugerido,
      );
      await tx.ordemServico.create({ data: ordemServicoData });

      // Atualiza status do chamado
      const chamadoData = await this.updateChamadoStatusData(ChamadoStatus.EM_ATENDIMENTO, prestadorId, valorAcordado);
      await tx.chamado.update({
        where: { id: proposta.chamadoId },
        data: chamadoData,
      });

      // Encerra outras propostas
      await tx.propostaServico.updateMany({
        where: { chamadoId: proposta.chamadoId, NOT: { id: proposta.id } },
        data: { status: PropostaStatus.PROPOSTA_RECUSADA },
      });

      return updated;
    });
  }

  async recusarProposta(id: number, prestadorId: string, justificativa: string) {
    const proposta = await this.propostaRepo.findByIdForPrestador(id, prestadorId);
    if (!proposta) throw new NotFoundException('Proposta não encontrada');
    if (proposta.status !== PropostaStatus.PROPOSTA_ENVIADA)
      throw new BadRequestException('Estado inválido para recusa');
    return this.propostaRepo.updateStatus(proposta.id, PropostaStatus.PROPOSTA_RECUSADA, {
      recusaJustificativa: justificativa,
    });
  }

  async contraproposta(
    id: number,
    prestadorId: string,
    dados: { precoMin?: string; precoMax?: string; prazo?: number; justificativa: string },
  ) {
    const proposta = await this.propostaRepo.findByIdForPrestador(id, prestadorId);
    if (!proposta) throw new NotFoundException('Proposta não encontrada');
    if (proposta.status !== PropostaStatus.PROPOSTA_ENVIADA)
      throw new BadRequestException('Estado inválido para contraproposta');

    if (dados.precoMin && dados.precoMax) {
      if (Number(dados.precoMin) > Number(dados.precoMax)) {
        throw new BadRequestException('Faixa de preço inválida: mínimo maior que máximo');
      }
    }

    return this.propostaRepo.updateStatus(proposta.id, PropostaStatus.CONTRAPROPOSTA_ENVIADA, {
      contrapropostaPrecoMin: dados.precoMin ? new Prisma.Decimal(dados.precoMin) : null,
      contrapropostaPrecoMax: dados.precoMax ? new Prisma.Decimal(dados.precoMax) : null,
      contrapropostaPrazo: dados.prazo ?? null,
      contrapropostaJustificativa: dados.justificativa,
    });
  }

  async adminDecidirContraproposta(id: number, adminId: string, acao: 'aprovar' | 'recusar', valorAcordado?: string) {
    // Valida permissão de admin
    await this.validateAdminPermission(adminId);

    // Busca e valida proposta
    const proposta = await this.propostaRepo.findById(id);
    await this.validatePropostaForAction(proposta, PropostaStatus.CONTRAPROPOSTA_ENVIADA, 'decisão de contraproposta');

    // Se for recusa, apenas atualiza o status
    if (acao === 'recusar') {
      return this.propostaRepo.updateStatus(id, PropostaStatus.CONTRAPROPOSTA_RECUSADA);
    }

    // Aprova contraproposta com transação
    return this.executeApprovalTransaction(id, proposta, valorAcordado);
  }

  private async executeApprovalTransaction(id: number, proposta: any, valorAcordado?: string) {
    return this.prisma.$transaction(async tx => {
      // Atualiza status da proposta
      const updated = await tx.propostaServico.update({
        where: { id },
        data: { status: PropostaStatus.CONTRAPROPOSTA_APROVADA },
      });

      // Verifica se já existe OS
      const existingOs = await tx.ordemServico.findUnique({ where: { chamadoId: updated.chamadoId } });
      if (existingOs) {
        throw new BadRequestException('Já existe OS para este chamado');
      }

      // Valida valor acordado
      this.validateValorAcordado(valorAcordado, updated.contrapropostaPrecoMin, updated.contrapropostaPrecoMax);

      // Cria ordem de serviço
      const ordemServicoData = await this.createOrdemServicoData(
        updated.chamadoId,
        updated.prestadorId,
        valorAcordado!,
        updated.contrapropostaPrazo,
      );
      await tx.ordemServico.create({ data: ordemServicoData });

      // Atualiza status do chamado
      await tx.chamado.update({
        where: { id: updated.chamadoId },
        data: await this.updateChamadoStatusData(ChamadoStatus.EM_ATENDIMENTO, updated.prestadorId),
      });

      // Encerra outras propostas
      await tx.propostaServico.updateMany({
        where: { chamadoId: updated.chamadoId, NOT: { id: updated.id } },
        data: { status: PropostaStatus.PROPOSTA_RECUSADA },
      });

      return updated;
    });
  }

  async adminEnviarPropostas(
    adminId: string,
    body: {
      chamadoId: number;
      prestadores: string[];
      precoMin?: string;
      precoMax?: string;
      prazo?: number;
      mensagem?: string;
    },
  ) {
    // Valida permissão de admin
    await this.validateAdminPermission(adminId);

    // Valida dados de entrada
    this.validateEnviarPropostasInput(body);

    // Idempotência: unique (chamadoId, prestadorId) cobre duplicidade
    const result = await this.prisma.$transaction(async tx => {
      const created: any[] = [];
      for (const prestadorId of body.prestadores) {
        // Upsert manual para não depender de índice único no banco
        const existing = await tx.propostaServico.findFirst({
          where: { chamadoId: body.chamadoId, prestadorId },
        });

        let proposta;
        if (existing) {
          proposta = await tx.propostaServico.update({
            where: { id: existing.id },
            data: {
              precoSugeridoMin: body.precoMin ? new Prisma.Decimal(body.precoMin) : null,
              precoSugeridoMax: body.precoMax ? new Prisma.Decimal(body.precoMax) : null,
              prazoSugerido: body.prazo ?? null,
              status: PropostaStatus.PROPOSTA_ENVIADA,
            },
          });
        } else {
          proposta = await tx.propostaServico.create({
            data: {
              chamadoId: body.chamadoId,
              prestadorId,
              precoSugeridoMin: body.precoMin ? new Prisma.Decimal(body.precoMin) : null,
              precoSugeridoMax: body.precoMax ? new Prisma.Decimal(body.precoMax) : null,
              prazoSugerido: body.prazo ?? null,
              status: PropostaStatus.PROPOSTA_ENVIADA,
            },
          });
        }
        created.push(proposta);
        await this.audit.log(adminId, 'PROPOSTA_ENVIADA', 'PropostaServico', String(proposta.id), {
          chamadoId: body.chamadoId,
          prestadorId,
          precoMin: body.precoMin ?? null,
          precoMax: body.precoMax ?? null,
          prazo: body.prazo ?? null,
          mensagem: body.mensagem ?? null,
        });
      }
      return created;
    });

    return { sucesso: true, propostas: result };
  }

  private validateEnviarPropostasInput(body: {
    chamadoId: number;
    prestadores: string[];
    precoMin?: string;
    precoMax?: string;
  }): void {
    if (!body.chamadoId || !Array.isArray(body.prestadores) || body.prestadores.length === 0) {
      throw new BadRequestException('chamadoId e prestadores são obrigatórios');
    }
    if (body.precoMin && body.precoMax && Number(body.precoMin) > Number(body.precoMax)) {
      throw new BadRequestException('Faixa de preço inválida: mínimo maior que máximo');
    }
  }
}
