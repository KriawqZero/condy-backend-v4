import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AnexoService } from 'src/anexo/anexo.service';
import { CreateAnexoDto } from 'src/anexo/dto/create-anexo.dto';
import { UpdateAnexoDto } from 'src/anexo/dto/update-anexo.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('anexo')
@UseGuards(JwtGuard) // Assuming you want to protect this controller with JWT authentication
export class AnexoController {
  constructor(private readonly anexoService: AnexoService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @GetUser('id') userId: string,
    @Body() createAnexoDto: CreateAnexoDto,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    const uploadedFile = await this.anexoService.upload(file, createAnexoDto, userId);
    return uploadedFile;
  }

  @Get()
  findAll(@GetUser('id') userId: string) {
    return this.anexoService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anexoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @GetUser('id') userId: string, @Body() updateAnexoDto: UpdateAnexoDto) {
    return this.anexoService.update(+id, userId, updateAnexoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anexoService.remove(+id);
  }
}
