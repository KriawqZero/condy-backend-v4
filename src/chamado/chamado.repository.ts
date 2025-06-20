import { Injectable } from '@nestjs/common';
import { Chamado } from 'src/chamado/entities/chamado.entity';
import { ChamadoCreateInput } from 'src/chamado/entities/chamado.interface';
import { ChamadoStatus, Escopo, Prioridade } from 'src/chamado/entities/types';
import { paginate, ResponsePayloadWithMeta } from 'src/common/pagination';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ChamadoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: Partial<ChamadoCreateInput>): Promise<Chamado> {
    return await this.prisma.chamado.create({
      data: {
        numeroChamado:
          dto.numeroChamado ??
          (() => {
            throw new Error('Numero do chamado é obrigatório');
          })(),
        descricaoOcorrido:
          dto.descricaoOcorrido ??
          (() => {
            throw new Error('Descrição do ocorrido é obrigatória');
          })(),
        informacoesAdicionais: dto.informacoesAdicionais ?? null,
        prioridade: dto.prioridade ?? Prioridade.BAIXA,
        escopo: dto.escopo ?? Escopo.ORCAMENTO,
        status: dto.status ?? ChamadoStatus.NOVO,
        imovel: {
          connect: { id: dto.imovelId },
        },
        solicitante: {
          connect: { id: dto.solicitanteId },
        },
      },
    });
  }

  async countChamadosPorData(data: Date): Promise<number> {
    const inicioDoDia = new Date(data.setHours(0, 0, 0, 0));
    const fimDoDia = new Date(data.setHours(23, 59, 59, 999));

    return await this.prisma.chamado.count({
      where: {
        createdAt: {
          gte: inicioDoDia,
          lte: fimDoDia,
        },
      },
    });
  }

  async findAll(): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    return paginate(
      () =>
        this.prisma.chamado.findMany({
          include: {
            solicitante: true,
            imovel: true,
          },
        }),
      () => this.prisma.chamado.count(),
    );
  }

  async findAllByPrestadorId(prestadorId: string): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    return paginate(
      () =>
        this.prisma.chamado.findMany({
          where: {
            prestadorAssignadoId: prestadorId,
          },
          include: {
            solicitante: true,
            imovel: true,
          },
        }),
      () => this.prisma.chamado.count({ where: { prestadorAssignadoId: prestadorId } }),
    );
  }

  async findAllByUserId(userId: string): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    return paginate(
      () =>
        this.prisma.chamado.findMany({
          where: {
            solicitanteId: userId,
          },
          include: {
            solicitante: true,
            imovel: true,
            anexos: true,
          },
        }),
      () => this.prisma.chamado.count(),
    );
  }

  async findOneById(id: number): Promise<Chamado | null> {
    return await this.prisma.chamado.findUnique({
      where: { id },
      include: {
        solicitante: true,
        imovel: true,
        anexos: true,
      },
    });
  }
}
