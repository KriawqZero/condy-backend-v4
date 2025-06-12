import { Injectable } from '@nestjs/common';
import { Chamado } from 'src/chamado/entities/chamado.entity';
import { ChamadoCreateInput } from 'src/chamado/entities/chamado.interface';
import { ChamadoStatus, Escopo, Prioridade } from 'src/chamado/entities/types';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ChamadoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.chamado.findMany();
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
}
