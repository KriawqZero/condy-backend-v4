import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ChamadoService } from './chamado.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';

@Controller('chamado')
@ApiTags('Chamados')
export class ChamadoController {
  constructor(private readonly chamadoService: ChamadoService) {}

  @Post()
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Criar chamado' })
  @ApiCreatedResponse({ description: 'Chamado criado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado.' })
  create(@Body() createChamadoDto: CreateChamadoDto, @GetUser('id') solicitanteId: string) {
    return this.chamadoService.create(createChamadoDto, solicitanteId);
  }

  @Get()
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Listar chamados do usuário' })
  @ApiOkResponse({ description: 'Lista de chamados recuperada com sucesso.' })
  findAll(@GetUser('id') userId: string) {
    return this.chamadoService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Buscar chamado por ID' })
  @ApiParam({ name: 'id', description: 'Identificador do chamado.' })
  @ApiOkResponse({ description: 'Chamado encontrado.' })
  findOne(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.chamadoService.findOne(+id, userId);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Atualizar informações de um chamado' })
  @ApiParam({ name: 'id', description: 'Identificador do chamado.' })
  @ApiOkResponse({ description: 'Chamado atualizado com sucesso.' })
  update(@Param('id') id: string, @Body() updateChamadoDto: UpdateChamadoDto, @GetUser('id') userId: string) {
    return this.chamadoService.update(+id, userId, updateChamadoDto);
  }

  // Atribui prestador ao chamado (Admin)
  @Patch(':id/assign-prestador/:prestadorId')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Atribuir prestador a um chamado' })
  @ApiParam({ name: 'id', description: 'Identificador do chamado.' })
  @ApiParam({ name: 'prestadorId', description: 'Identificador do prestador.' })
  @ApiOkResponse({ description: 'Prestador atribuído com sucesso.' })
  assignPrestador(@Param('id') id: string, @Param('prestadorId') prestadorId: string, @GetUser('id') userId: string) {
    return this.chamadoService.update(+id, userId, { prestadorAssignadoId: prestadorId } as any);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Remover chamado' })
  @ApiParam({ name: 'id', description: 'Identificador do chamado.' })
  @ApiOkResponse({ description: 'Chamado removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.chamadoService.remove(+id);
  }

  // Endpoint público para consulta por código do chamado
  @Get('/codigo/:code')
  @ApiOperation({ summary: 'Consultar chamado público por código' })
  @ApiParam({ name: 'code', description: 'Código público do chamado.' })
  @ApiOkResponse({ description: 'Chamado localizado por código público.' })
  async getPublicByCode(@Param('code') code: string) {
    return this.chamadoService.findPublicByNumeroChamado(code);
  }
}
