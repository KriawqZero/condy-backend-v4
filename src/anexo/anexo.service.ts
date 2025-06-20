import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnexoDto } from 'src/anexo/dto/create-anexo.dto';
import { S3Service } from 'src/common/services/s3.service';
import { AnexoRepository } from './anexo.repository';
import { UpdateAnexoDto } from './dto/update-anexo.dto';

@Injectable()
export class AnexoService {
  constructor(
    private readonly anexoRepository: AnexoRepository,
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

  update(id: number, dto: UpdateAnexoDto) {
    const anexo = this.anexoRepository.findOne(id);
    if (!anexo) throw new NotFoundException('Anexo not found');

    return this.anexoRepository.update(id, dto);
  }

  findAll() {
    return `This action returns all anexo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anexo`;
  }

  remove(id: number) {
    return `This action removes a #${id} anexo`;
  }
}
