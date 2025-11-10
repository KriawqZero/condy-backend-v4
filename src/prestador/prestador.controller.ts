import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { PrismaService } from 'src/database/prisma.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('prestador')
@UseGuards(JwtGuard)
@ApiTags('Dashboard do Prestador')
@ApiBearerAuth('JWT-auth')
export class PrestadorController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Recuperar dados do dashboard do prestador' })
  @ApiQuery({ name: 'from', required: false, description: 'Data inicial (ISO) para filtro de período.' })
  @ApiQuery({ name: 'to', required: false, description: 'Data final (ISO) para filtro de período.' })
  @ApiOkResponse({ description: 'Dados consolidados do dashboard retornados com sucesso.' })
  async dashboard(@GetUser('id') prestadorId: string, @Query('from') from?: string, @Query('to') to?: string) {
    const fromDate = from ? new Date(from) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const toDate = to ? new Date(to) : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

    const ordens = await this.prisma.ordemServico.findMany({
      where: {
        prestadorId,
        createdAt: { gte: fromDate, lte: toDate },
      },
    });

    const receita = ordens.reduce((acc, o) => acc + Number(o.valorAcordado ?? 0), 0);
    const custo = 0; // estrutura de custos futura
    const lucro = receita - custo;

    const hoje = new Date();
    const inicioDia = new Date(hoje);
    inicioDia.setHours(0, 0, 0, 0);
    const fimDia = new Date(hoje);
    fimDia.setHours(23, 59, 59, 999);

    const novasHoje = await this.prisma.ordemServico.count({
      where: { prestadorId, createdAt: { gte: inicioDia, lte: fimDia } },
    });
    const emAndamentoHoje = await this.prisma.ordemServico.count({
      where: { prestadorId, status: 'EM_ANDAMENTO', updatedAt: { gte: inicioDia, lte: fimDia } },
    });
    const concluidasHoje = await this.prisma.ordemServico.count({
      where: { prestadorId, status: 'CONCLUIDO', updatedAt: { gte: inicioDia, lte: fimDia } },
    });

    return {
      receitaMensal: receita,
      custoMensal: custo,
      lucroMensal: lucro,
      atividadeDoDia: {
        novas: novasHoje,
        emAndamento: emAndamentoHoje,
        concluidas: concluidasHoje,
      },
    };
  }
}
