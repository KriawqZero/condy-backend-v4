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
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { AnexoService } from 'src/anexo/anexo.service';
import { CreateAnexoDto } from 'src/anexo/dto/create-anexo.dto';
import { UpdateAnexoDto } from 'src/anexo/dto/update-anexo.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('anexo')
@UseGuards(JwtGuard) // Assuming you want to protect this controller with JWT authentication
@ApiTags('Anexos')
@ApiBearerAuth('JWT-auth')
export class AnexoController {
  constructor(private readonly anexoService: AnexoService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
      fileFilter: (_req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4'];
        if (!allowed.includes(file.mimetype)) {
          return cb(new BadRequestException('Tipo de arquivo não suportado'), false);
        }
        // Bloquear arquivos sem extensão conhecida
        const ext = extname(file.originalname || '').toLowerCase();
        const allowedExt = ['.jpg', '.jpeg', '.png', '.webp', '.mp4'];
        if (!!ext && !allowedExt.includes(ext)) {
          return cb(new BadRequestException('Extensão de arquivo não suportada'), false);
        }
        cb(null, true);
      },
    }),
  )
  @ApiOperation({ summary: 'Enviar um novo anexo' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Arquivo a ser enviado.',
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        title: { type: 'string', nullable: true },
      },
      required: ['file'],
    },
  })
  @ApiCreatedResponse({ description: 'Anexo enviado com sucesso.' })
  @ApiNotFoundResponse({ description: 'Chamado relacionado não encontrado.' })
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
  @ApiOperation({ summary: 'Listar anexos do usuário autenticado' })
  @ApiOkResponse({ description: 'Lista de anexos recuperada com sucesso.' })
  findAll(@GetUser('id') userId: string) {
    return this.anexoService.findAll(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de um anexo' })
  @ApiOkResponse({ description: 'Detalhes do anexo recuperados com sucesso.' })
  @ApiNotFoundResponse({ description: 'Anexo não localizado.' })
  findOne(@Param('id') id: string) {
    return this.anexoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar informações de um anexo' })
  @ApiBody({ type: UpdateAnexoDto })
  @ApiOkResponse({ description: 'Anexo atualizado com sucesso.' })
  @ApiNotFoundResponse({ description: 'Anexo não localizado.' })
  update(@Param('id') id: string, @GetUser('id') userId: string, @Body() updateAnexoDto: UpdateAnexoDto) {
    return this.anexoService.update(+id, userId, updateAnexoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um anexo' })
  @ApiOkResponse({ description: 'Anexo removido com sucesso.' })
  @ApiNotFoundResponse({ description: 'Anexo não localizado.' })
  remove(@Param('id') id: string) {
    return this.anexoService.remove(+id);
  }
}
