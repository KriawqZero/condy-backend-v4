import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PropostaStatus } from '@prisma/client';

@Injectable()
export class PropostaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listByPrestador(prestadorId: string) {
    return this.prisma.propostaServico.findMany({
      where: {
        prestadorId,
        NOT: { status: { in: [PropostaStatus.PROPOSTA_ACEITA, PropostaStatus.CONTRAPROPOSTA_APROVADA] } },
      },
      include: {
        chamado: { include: { imovel: true, solicitante: true } },
        prestador: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByIdForPrestador(id: number, prestadorId: string) {
    return this.prisma.propostaServico.findFirst({ where: { id, prestadorId } });
  }

  async updateStatus(id: number, status: PropostaStatus, extra: Record<string, any> = {}) {
    return this.prisma.propostaServico.update({
      where: { id },
      data: { status, ...extra },
    });
  }

  async findById(id: number) {
    return this.prisma.propostaServico.findUnique({ where: { id } });
  }

  async closeOtherProposalsForChamado(chamadoId: number, keepId: number) {
    return this.prisma.propostaServico.updateMany({
      where: { chamadoId, NOT: { id: keepId } },
      data: { status: PropostaStatus.PROPOSTA_RECUSADA },
    });
  }
}
