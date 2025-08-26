import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { PropostaService } from './proposta.service';

@Controller('prestador/propostas')
@UseGuards(JwtGuard)
export class PropostaPrestadorController {
  constructor(private readonly propostaService: PropostaService) {}

  @Get()
  async list(@GetUser('id') prestadorId: string) {
    return this.propostaService.listPrestador(prestadorId);
  }

  @Post(':id/aceitar')
  async aceitar(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body() body: { valorAcordado?: string },
  ) {
    return this.propostaService.aceitarProposta(Number(id), prestadorId, body?.valorAcordado);
  }

  @Post(':id/recusar')
  async recusar(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body() body: { justificativa: string },
  ) {
    return this.propostaService.recusarProposta(Number(id), prestadorId, body.justificativa);
  }

  @Post(':id/contraproposta')
  async contraproposta(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body()
    body: { precoMin?: string; precoMax?: string; prazo?: number; justificativa: string },
  ) {
    return this.propostaService.contraproposta(Number(id), prestadorId, body);
  }
}


