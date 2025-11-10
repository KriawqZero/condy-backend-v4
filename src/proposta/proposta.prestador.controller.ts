import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { PropostaService } from './proposta.service';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PrestadorAceitarPropostaDto } from './dto/prestador-aceitar-proposta.dto';
import { PrestadorRecusarPropostaDto } from './dto/prestador-recusar-proposta.dto';
import { PrestadorContrapropostaDto } from './dto/prestador-contraproposta.dto';

@Controller('prestador/propostas')
@UseGuards(JwtGuard)
@ApiTags('Propostas - Prestador')
@ApiBearerAuth('JWT-auth')
export class PropostaPrestadorController {
  constructor(private readonly propostaService: PropostaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar propostas recebidas pelo prestador' })
  @ApiOkResponse({ description: 'Lista de propostas retornada com sucesso.' })
  async list(@GetUser('id') prestadorId: string) {
    return this.propostaService.listPrestador(prestadorId);
  }

  @Post(':id/aceitar')
  @ApiOperation({ summary: 'Aceitar proposta' })
  @ApiParam({ name: 'id', description: 'Identificador da proposta.' })
  @ApiBody({ type: PrestadorAceitarPropostaDto })
  @ApiOkResponse({ description: 'Proposta aceita com sucesso.' })
  async aceitar(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body() body: PrestadorAceitarPropostaDto,
  ) {
    return this.propostaService.aceitarProposta(Number(id), prestadorId, body?.valorAcordado);
  }

  @Post(':id/recusar')
  @ApiOperation({ summary: 'Recusar proposta' })
  @ApiParam({ name: 'id', description: 'Identificador da proposta.' })
  @ApiBody({ type: PrestadorRecusarPropostaDto })
  @ApiOkResponse({ description: 'Proposta recusada com sucesso.' })
  async recusar(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body() body: PrestadorRecusarPropostaDto,
  ) {
    return this.propostaService.recusarProposta(Number(id), prestadorId, body.justificativa);
  }

  @Post(':id/contraproposta')
  @ApiOperation({ summary: 'Registrar contraproposta' })
  @ApiParam({ name: 'id', description: 'Identificador da proposta.' })
  @ApiBody({ type: PrestadorContrapropostaDto })
  @ApiOkResponse({ description: 'Contraproposta registrada com sucesso.' })
  async contraproposta(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body()
    body: PrestadorContrapropostaDto,
  ) {
    return this.propostaService.contraproposta(Number(id), prestadorId, body);
  }
}
