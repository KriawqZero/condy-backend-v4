import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { OrdemServicoService } from './ordem-servico.service';
import { OrdemServicoStatus } from '@prisma/client';

@Controller('prestador/ordens')
@UseGuards(JwtGuard)
export class OrdemServicoController {
  constructor(private readonly osService: OrdemServicoService) {}

  @Get()
  async list(@GetUser('id') prestadorId: string, @Query('page') page?: string, @Query('limit') limit?: string) {
    return this.osService.listPrestador(
      prestadorId,
      page ? Number(page) : undefined,
      limit ? Number(limit) : undefined,
    );
  }

  @Get(':id')
  async get(@Param('id') id: string, @GetUser('id') prestadorId: string) {
    return this.osService.getOne(Number(id), prestadorId);
  }

  @Post(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body() body: { status: OrdemServicoStatus },
  ) {
    return this.osService.alterarStatus(Number(id), prestadorId, body.status);
  }

  // Criação de OS avulsa (fora da plataforma) pelo prestador
  @Post()
  async criarOrdemAvulsa(
    @GetUser('id') prestadorId: string,
    @Body()
    body: {
      descricao: string;
      valorAcordado?: number;
      prazoAcordado?: number;
      referenciaExterna?: string;
    },
  ) {
    return this.osService.criarOrdemAvulsa(prestadorId, body);
  }
}
