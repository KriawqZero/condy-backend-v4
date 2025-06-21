import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAnexoDto } from 'src/anexo/dto/create-anexo.dto';
import { ChamadoRepository } from 'src/chamado/chamado.repository';
import { S3Service } from 'src/common/services/s3.service';
import { AnexoRepository } from './anexo.repository';
import { UpdateAnexoDto } from './dto/update-anexo.dto';

@Injectable()
export class AnexoService {
  constructor(
    private readonly anexoRepository: AnexoRepository,
    private readonly chamadoRepository: ChamadoRepository,
    private readonly s3Service: S3Service,
  ) {}

  async upload(file: Express.Multer.File, dto: CreateAnexoDto) {
    const { title } = dto;

    // Upload the file to S3
    const responseKey = await this.s3Service.uploadFile(file, 'anexos');

    // Create the anexo record in the database
    return this.anexoRepository.create({
      title,
      url: this.s3Service.getFileUrl(responseKey),
      awsKey: responseKey,
    });
  }

  async update(id: number, userId: string, dto: UpdateAnexoDto) {
    const anexo = await this.anexoRepository.findOne(id);
    if (!anexo) throw new NotFoundException('Anexo not found');

    const chamado = await this.chamadoRepository.findOneById(dto.chamadoId);
    if (!chamado) throw new NotFoundException('Chamado not found');

    if (chamado.solicitanteId !== userId)
      throw new UnauthorizedException('You do not have permission to update this anexo');

    return this.anexoRepository.update(id, dto);
  }

  findAll(userId: string) {
    return this.anexoRepository.findAll(userId);
  }

  findOne(id: number) {
    return `This action returns a #${id} anexo`;
  }

  remove(id: number) {
    return `This action removes a #${id} anexo`;
  }
}
