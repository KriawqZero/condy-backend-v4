import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { PropostaService } from './proposta.service';

@Controller('admin/propostas')
@UseGuards(JwtGuard)
export class PropostaAdminController {
  constructor(private readonly propostaService: PropostaService) {}

  @Post(':id/aprovar-contraproposta')
  async aprovar(
    @Param('id') id: string,
    @GetUser('id') adminId: string,
    @Body() body: { valorAcordado?: string },
  ) {
    return this.propostaService.adminDecidirContraproposta(Number(id), adminId, 'aprovar', body?.valorAcordado);
  }

  @Post(':id/recusar-contraproposta')
  async recusar(@Param('id') id: string, @GetUser('id') adminId: string) {
    return this.propostaService.adminDecidirContraproposta(Number(id), adminId, 'recusar');
  }

  // Enviar propostas para múltiplos prestadores
  @Post('enviar')
  async enviarPropostas(
    @GetUser('id') adminId: string,
    @Body()
    body: {
      chamadoId: number;
      prestadores: string[]; // array de userIds PRESTADOR
      precoMin?: string;
      precoMax?: string;
      prazo?: number;
      mensagem?: string;
    },
  ) {
    return this.propostaService.adminEnviarPropostas(adminId, body);
  }

  @Get('por-chamado/:chamadoId')
  async listarPorChamado(@Param('chamadoId') chamadoId: string) {
    return this.propostaService['prisma'].propostaServico.findMany({
      where: { chamadoId: Number(chamadoId) },
      include: { prestador: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}


