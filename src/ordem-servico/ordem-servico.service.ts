import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { OrdemServicoRepository } from './ordem-servico.repository';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/entities/user.entity';
import { ChamadoStatus, OrdemServicoStatus } from '@prisma/client';

@Injectable()
export class OrdemServicoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly osRepo: OrdemServicoRepository,
    private readonly userService: UserService,
  ) {}

  async listPrestador(prestadorId: string, page?: number, limit?: number) {
    return this.osRepo.listByPrestador(prestadorId, page, limit);
  }

  async getOne(id: number, prestadorId: string) {
    const os = await this.osRepo.findOne(id, prestadorId);
    if (!os) throw new NotFoundException('OS não encontrada');
    return os;
  }

  async alterarStatus(id: number, prestadorId: string, status: OrdemServicoStatus) {
    const os = await this.osRepo.findOne(id, prestadorId);
    if (!os) throw new NotFoundException('OS não encontrada');

    // Transições simples: qualquer um dos três estados mas com sincronização do Chamado
    return this.prisma.$transaction(async tx => {
      const updated = await tx.ordemServico.update({ where: { id: os.id }, data: { status } });

      let novoStatusChamado: ChamadoStatus | null = null;
      if (status === OrdemServicoStatus.CONCLUIDO) novoStatusChamado = ChamadoStatus.CONCLUIDO;
      else if (status === OrdemServicoStatus.EM_ANDAMENTO) novoStatusChamado = ChamadoStatus.EM_ATENDIMENTO;
      else if (status === OrdemServicoStatus.CANCELADO) novoStatusChamado = ChamadoStatus.NOVO;

      if (novoStatusChamado) {
        await tx.chamado.update({
          where: { id: updated.chamadoId },
          data: { status: novoStatusChamado },
        });
      }

      return updated;
    });
  }

  async criarOrdemAvulsa(
    prestadorId: string,
    body: { descricao: string; valorAcordado?: number; prazoAcordado?: number; referenciaExterna?: string },
  ) {
    const user = await this.userService.findById(prestadorId);
    if (!user || user.userType !== UserType.PRESTADOR) {
      throw new UnauthorizedException('Apenas prestadores podem criar OS avulsa');
    }

    // Criar um Chamado interno "fantasma" com escopo ORCAMENTO para manter integridade
    const chamado = await this.prisma.chamado.create({
      data: {
        numeroChamado: `OS-${Date.now()}`,
        descricaoOcorrido: body.descricao,
        prioridade: 'MEDIA' as any,
        escopo: 'ORCAMENTO' as any,
        status: 'NOVO' as any,
        // Relacionamentos mínimos: precisamos de um imovel e solicitante
        // Como é externo, criamos um Imovel placeholder atrelado ao prestador como gestor
        imovel: {
          create: {
            nome: 'OS Externa',
            gestorId: prestadorId,
            cep: '00000000',
            endereco: 'N/A',
            cidade: 'N/A',
            bairro: 'N/A',
            numero: '0',
            uf: 'NA',
            quantidadeMoradias: 0,
          },
        },
        solicitante: { connect: { id: prestadorId } },
      },
    });

    const os = await this.prisma.ordemServico.create({
      data: {
        chamadoId: chamado.id,
        prestadorId,
        valorAcordado: body.valorAcordado as any,
        prazoAcordado: body.prazoAcordado ?? null,
        status: OrdemServicoStatus.EM_ANDAMENTO,
      },
      include: { chamado: true },
    });

    return os;
  }
}
