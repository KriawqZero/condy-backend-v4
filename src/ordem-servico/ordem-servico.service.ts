import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { OrdemServicoRepository } from './ordem-servico.repository';
import { UserService } from 'src/user/user.service';
import { UserType } from 'src/user/entities/user.entity';
import { ChamadoStatus, OrdemServicoStatus } from 'generated/prisma/client';

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
    return this.prisma.$transaction(async (tx) => {
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
}


