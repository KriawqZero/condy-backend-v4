import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile } from '@nestjs/common';
import { AnexoService } from 'src/anexo/anexo.service';
import { UpdateAnexoDto } from 'src/anexo/dto/update-anexo.dto';

@Controller('anexo')
export class AnexoController {
  constructor(private readonly anexoService: AnexoService) {}

  @Post('upload')
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const uploadedFile = await this.anexoService.upload(file);
    return uploadedFile;
  }

  @Get()
  findAll() {
    return this.anexoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anexoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnexoDto: UpdateAnexoDto) {
    return this.anexoService.update(+id, updateAnexoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anexoService.remove(+id);
  }
}
