import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ChamadoService } from './chamado.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';

@Controller('chamado')
export class ChamadoController {
  constructor(private readonly chamadoService: ChamadoService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createChamadoDto: CreateChamadoDto, @GetUser('id') solicitanteId: string) {
    return this.chamadoService.create(createChamadoDto, solicitanteId);
  }

  @Get()
  @UseGuards(JwtGuard)
  findAll(@GetUser('id') userId: string) {
    return this.chamadoService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.chamadoService.findOne(+id, userId);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateChamadoDto: UpdateChamadoDto, @GetUser('id') userId: string) {
    return this.chamadoService.update(+id, userId, updateChamadoDto);
  }

  // Atribui prestador ao chamado (Admin)
  @Patch(':id/assign-prestador/:prestadorId')
  @UseGuards(JwtGuard)
  assignPrestador(@Param('id') id: string, @Param('prestadorId') prestadorId: string, @GetUser('id') userId: string) {
    return this.chamadoService.update(+id, userId, { prestadorAssignadoId: prestadorId } as any);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.chamadoService.remove(+id);
  }

  // Endpoint público para consulta por código do chamado
  @Get('/codigo/:code')
  async getPublicByCode(@Param('code') code: string) {
    return this.chamadoService.findPublicByNumeroChamado(code);
  }
}
