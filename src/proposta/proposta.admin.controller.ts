import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { PropostaService } from './proposta.service';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AdminDecideContrapropostaDto } from './dto/admin-decide-contraproposta.dto';
import { AdminEnviarPropostasDto } from './dto/admin-enviar-propostas.dto';

@Controller('admin/propostas')
@UseGuards(JwtGuard)
@ApiTags('Propostas - Administração')
@ApiBearerAuth('JWT-auth')
export class PropostaAdminController {
  constructor(private readonly propostaService: PropostaService) {}

  @Post(':id/aprovar-contraproposta')
  @ApiOperation({ summary: 'Aprovar contraproposta de prestador' })
  @ApiParam({ name: 'id', description: 'Identificador da proposta.' })
  @ApiBody({ type: AdminDecideContrapropostaDto })
  @ApiOkResponse({ description: 'Contraproposta aprovada com sucesso.' })
  async aprovar(@Param('id') id: string, @GetUser('id') adminId: string, @Body() body: AdminDecideContrapropostaDto) {
    return this.propostaService.adminDecidirContraproposta(Number(id), adminId, 'aprovar', body?.valorAcordado);
  }

  @Post(':id/recusar-contraproposta')
  @ApiOperation({ summary: 'Recusar contraproposta de prestador' })
  @ApiParam({ name: 'id', description: 'Identificador da proposta.' })
  @ApiOkResponse({ description: 'Contraproposta recusada com sucesso.' })
  async recusar(@Param('id') id: string, @GetUser('id') adminId: string) {
    return this.propostaService.adminDecidirContraproposta(Number(id), adminId, 'recusar');
  }

  // Enviar propostas para múltiplos prestadores
  @Post('enviar')
  @ApiOperation({ summary: 'Enviar propostas para múltiplos prestadores' })
  @ApiBody({ type: AdminEnviarPropostasDto })
  @ApiOkResponse({ description: 'Propostas enviadas com sucesso.' })
  async enviarPropostas(
    @GetUser('id') adminId: string,
    @Body()
    body: AdminEnviarPropostasDto,
  ) {
    return this.propostaService.adminEnviarPropostas(adminId, body);
  }

  @Get('por-chamado/:chamadoId')
  @ApiOperation({ summary: 'Listar propostas por chamado' })
  @ApiParam({ name: 'chamadoId', description: 'Identificador do chamado.' })
  @ApiOkResponse({ description: 'Lista de propostas para o chamado informado.' })
  async listarPorChamado(@Param('chamadoId') chamadoId: string) {
    return this.propostaService['prisma'].propostaServico.findMany({
      where: { chamadoId: Number(chamadoId) },
      include: { prestador: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
