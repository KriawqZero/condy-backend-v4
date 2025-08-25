import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { OrdemServicoStatus } from 'generated/prisma/client';

@Injectable()
export class OrdemServicoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listByPrestador(prestadorId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.prisma.ordemServico.findMany({
        where: { prestadorId },
        include: { chamado: { include: { imovel: true, solicitante: true } } },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.ordemServico.count({ where: { prestadorId } }),
    ]);
    return { items, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(id: number, prestadorId: string) {
    return this.prisma.ordemServico.findFirst({
      where: { id, prestadorId },
      include: { chamado: { include: { imovel: true, solicitante: true } } },
    });
  }

  async updateStatus(id: number, status: OrdemServicoStatus) {
    return this.prisma.ordemServico.update({ where: { id }, data: { status } });
  }
}


