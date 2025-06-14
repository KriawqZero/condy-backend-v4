import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ChamadoService } from './chamado.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';

@Controller('chamado')
@UseGuards(JwtGuard)
export class ChamadoController {
  constructor(private readonly chamadoService: ChamadoService) {}

  @Post()
  create(@Body() createChamadoDto: CreateChamadoDto, @GetUser('id') solicitanteId: string) {
    return this.chamadoService.create(createChamadoDto, solicitanteId);
  }

  @Get()
  findAll() {
    return this.chamadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chamadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChamadoDto: UpdateChamadoDto) {
    return this.chamadoService.update(+id, updateChamadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chamadoService.remove(+id);
  }
}
