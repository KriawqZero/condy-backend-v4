import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { OrdemServicoService } from './ordem-servico.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateOrdemServicoStatusDto } from './dto/update-ordem-servico-status.dto';
import { CreateOrdemServicoAvulsaDto } from './dto/create-ordem-servico-avulsa.dto';

@Controller('prestador/ordens')
@UseGuards(JwtGuard)
@ApiTags('Ordens de Serviço - Prestador')
@ApiBearerAuth('JWT-auth')
export class OrdemServicoController {
  constructor(private readonly osService: OrdemServicoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar ordens de serviço do prestador' })
  @ApiQuery({ name: 'page', required: false, description: 'Número da página para paginação.' })
  @ApiQuery({ name: 'limit', required: false, description: 'Quantidade de itens por página.' })
  @ApiOkResponse({ description: 'Lista de ordens de serviço recuperada com sucesso.' })
  async list(@GetUser('id') prestadorId: string, @Query('page') page?: string, @Query('limit') limit?: string) {
    return this.osService.listPrestador(
      prestadorId,
      page ? Number(page) : undefined,
      limit ? Number(limit) : undefined,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de uma ordem de serviço' })
  @ApiParam({ name: 'id', description: 'Identificador numérico da ordem de serviço.' })
  @ApiOkResponse({ description: 'Detalhes da ordem retornados com sucesso.' })
  async get(@Param('id') id: string, @GetUser('id') prestadorId: string) {
    return this.osService.getOne(Number(id), prestadorId);
  }

  @Post(':id/status')
  @ApiOperation({ summary: 'Atualizar status da ordem de serviço' })
  @ApiParam({ name: 'id', description: 'Identificador numérico da ordem de serviço.' })
  @ApiOkResponse({ description: 'Status atualizado com sucesso.' })
  async updateStatus(
    @Param('id') id: string,
    @GetUser('id') prestadorId: string,
    @Body() body: UpdateOrdemServicoStatusDto,
  ) {
    return this.osService.alterarStatus(Number(id), prestadorId, body.status);
  }

  // Criação de OS avulsa (fora da plataforma) pelo prestador
  @Post()
  @ApiOperation({ summary: 'Criar ordem de serviço avulsa' })
  @ApiOkResponse({ description: 'Ordem de serviço criada com sucesso.' })
  async criarOrdemAvulsa(
    @GetUser('id') prestadorId: string,
    @Body()
    body: CreateOrdemServicoAvulsaDto,
  ) {
    return this.osService.criarOrdemAvulsa(prestadorId, body);
  }
}
