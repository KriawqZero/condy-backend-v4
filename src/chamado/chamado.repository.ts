import { Injectable } from '@nestjs/common';
import { Chamado } from 'src/chamado/entities/chamado.entity';
import { ChamadoCreateInput } from 'src/chamado/entities/chamado.interface';
import { ChamadoStatus, Escopo, Prioridade } from 'src/chamado/entities/types';
import { paginate, ResponsePayloadWithMeta } from 'src/common/pagination';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { DateUtils } from 'src/common/utils/date.utils';

@Injectable()
export class ChamadoRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Includes padrão para consultas de chamados
  private readonly defaultIncludes = {
    solicitante: true,
    imovel: true,
    prestadorAssignado: true,
  } as const;

  private readonly fullIncludes = {
    solicitante: true,
    imovel: true,
    anexos: true,
    prestadorAssignado: true,
  } as const;

  /**
   * Método genérico para buscar chamados com paginação
   */
  private async findAllWithPagination(
    where?: Prisma.ChamadoWhereInput,
    include?: Prisma.ChamadoInclude,
  ): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    return paginate(
      () =>
        this.prisma.chamado.findMany({
          where,
          include: include || this.defaultIncludes,
        }),
      () => this.prisma.chamado.count({ where }),
    );
  }

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
    const inicioDoDia = DateUtils.startOfDay(data);
    const fimDoDia = DateUtils.endOfDay(data);

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
    return this.findAllWithPagination();
  }

  async findAllByPrestadorId(prestadorId: string): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    return this.findAllWithPagination({ prestadorAssignadoId: prestadorId }, this.defaultIncludes);
  }

  async findAllByUserId(userId: string): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    return this.findAllWithPagination({ solicitanteId: userId }, this.fullIncludes);
  }

  async findOneById(id: number): Promise<Chamado | null> {
    return await this.prisma.chamado.findUnique({
      where: { id },
      include: this.fullIncludes,
    });
  }

  async findOneByNumeroChamado(numeroChamado: string): Promise<Chamado | null> {
    return await this.prisma.chamado.findUnique({
      where: { numeroChamado },
      include: {
        imovel: true,
        anexos: true,
      },
    });
  }

  async update(id: number, data: Partial<Chamado>): Promise<Chamado> {
    return await this.prisma.chamado.update({
      where: { id },
      data: {
        descricaoOcorrido: data.descricaoOcorrido ?? undefined,
        informacoesAdicionais: (data as any).informacoesAdicionais ?? undefined,
        prioridade: (data as any).prioridade ?? undefined,
        escopo: (data as any).escopo ?? undefined,
        status: (data as any).status ?? undefined,
        valorEstimado: (data as any).valorEstimado ?? undefined,
        prestadorAssignadoId: (data as any).prestadorAssignadoId ?? undefined,
      },
      include: this.fullIncludes,
    });
  }
}
