import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PropostaRepository } from './proposta.repository';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/entities/user.entity';
import { PropostaStatus, OrdemServicoStatus, ChamadoStatus, Prisma } from '@prisma/client';
import { AuditService } from 'src/common/services/audit.service';

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

  async aceitarProposta(id: number, prestadorId: string, valorAcordado?: string) {
    const proposta = await this.propostaRepo.findByIdForPrestador(id, prestadorId);
    if (!proposta) throw new NotFoundException('Proposta não encontrada');
    if (proposta.status !== PropostaStatus.PROPOSTA_ENVIADA)
      throw new BadRequestException('Estado inválido para aceite');

    // Valor acordado é obrigatório no aceite do prestador
    if (!valorAcordado || isNaN(Number(valorAcordado)) || Number(valorAcordado) <= 0) {
      throw new BadRequestException('Valor acordado é obrigatório e deve ser numérico (> 0)');
    }

    const v = Number(valorAcordado);
    if (proposta.precoSugeridoMin !== null && proposta.precoSugeridoMin !== undefined) {
      const minPermitido = Number(proposta.precoSugeridoMin) * 0.5;
      if (v < minPermitido) {
        throw new BadRequestException(`Valor acordado abaixo do mínimo permitido (${minPermitido}).`);
      }
    }
    if (proposta.precoSugeridoMax !== null && proposta.precoSugeridoMax !== undefined) {
      if (v > Number(proposta.precoSugeridoMax)) {
        throw new BadRequestException(`Valor acordado acima do máximo permitido (${proposta.precoSugeridoMax}).`);
      }
    }

    return this.prisma.$transaction(async tx => {
      // Atualiza proposta
      const updated = await tx.propostaServico.update({
        where: { id: proposta.id },
        data: { status: PropostaStatus.PROPOSTA_ACEITA },
      });

      // Cria OS se não existir para o chamado
      const existingOs = await tx.ordemServico.findUnique({ where: { chamadoId: proposta.chamadoId } });
      if (existingOs) throw new BadRequestException('Já existe OS para este chamado');

      await tx.ordemServico.create({
        data: {
          chamadoId: proposta.chamadoId,
          prestadorId: prestadorId,
          status: OrdemServicoStatus.EM_ANDAMENTO,
          valorAcordado: new Prisma.Decimal(valorAcordado),
          prazoAcordado: proposta.prazoSugerido ?? null,
        },
      });

      // Atualiza status do chamado
      await tx.chamado.update({
        where: { id: proposta.chamadoId },
        data: {
          status: ChamadoStatus.EM_ATENDIMENTO,
          valorEstimado: new Prisma.Decimal(valorAcordado),
          prestadorAssignadoId: prestadorId,
        },
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
    const admin = await this.userService.findById(adminId);
    if (!admin || admin.userType !== UserType.ADMIN_PLATAFORMA) throw new UnauthorizedException('Acesso negado');

    const proposta = await this.propostaRepo.findById(id);
    if (!proposta) throw new NotFoundException('Proposta não encontrada');
    if (proposta.status !== PropostaStatus.CONTRAPROPOSTA_ENVIADA) throw new BadRequestException('Estado inválido');

    if (acao === 'recusar') {
      return this.propostaRepo.updateStatus(id, PropostaStatus.CONTRAPROPOSTA_RECUSADA);
    }

    // Aprovar contraproposta => criar OS e fechar demais
    return this.prisma.$transaction(async tx => {
      const updated = await tx.propostaServico.update({
        where: { id },
        data: { status: PropostaStatus.CONTRAPROPOSTA_APROVADA },
      });

      const existingOs = await tx.ordemServico.findUnique({ where: { chamadoId: updated.chamadoId } });
      if (existingOs) throw new BadRequestException('Já existe OS para este chamado');

      // Valor acordado é obrigatório na aprovação do admin
      if (!valorAcordado || isNaN(Number(valorAcordado)) || Number(valorAcordado) <= 0) {
        throw new BadRequestException('Valor acordado é obrigatório e deve ser numérico (> 0)');
      }
      const v = Number(valorAcordado);
      if (updated.contrapropostaPrecoMin !== null && updated.contrapropostaPrecoMin !== undefined) {
        const minPermitido = Number(updated.contrapropostaPrecoMin) * 0.5;
        if (v < minPermitido) {
          throw new BadRequestException(`Valor acordado abaixo do mínimo permitido (${minPermitido}).`);
        }
      }
      if (updated.contrapropostaPrecoMax !== null && updated.contrapropostaPrecoMax !== undefined) {
        if (v > Number(updated.contrapropostaPrecoMax)) {
          throw new BadRequestException(
            `Valor acordado acima do máximo permitido (${updated.contrapropostaPrecoMax}).`,
          );
        }
      }

      await tx.ordemServico.create({
        data: {
          chamadoId: updated.chamadoId,
          prestadorId: updated.prestadorId,
          status: OrdemServicoStatus.EM_ANDAMENTO,
          valorAcordado: new Prisma.Decimal(valorAcordado),
          prazoAcordado: updated.contrapropostaPrazo ?? null,
        },
      });

      await tx.chamado.update({
        where: { id: updated.chamadoId },
        data: { status: ChamadoStatus.EM_ATENDIMENTO, prestadorAssignadoId: updated.prestadorId },
      });

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
    const admin = await this.userService.findById(adminId);
    if (!admin || admin.userType !== UserType.ADMIN_PLATAFORMA) throw new UnauthorizedException('Acesso negado');

    if (!body.chamadoId || !Array.isArray(body.prestadores) || body.prestadores.length === 0) {
      throw new BadRequestException('chamadoId e prestadores são obrigatórios');
    }
    if (body.precoMin && body.precoMax && Number(body.precoMin) > Number(body.precoMax)) {
      throw new BadRequestException('Faixa de preço inválida: mínimo maior que máximo');
    }

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
}
