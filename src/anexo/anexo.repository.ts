import { Injectable } from '@nestjs/common';
import { CreateAnexoDto } from 'src/anexo/dto/create-anexo.dto';
import { UpdateAnexoDto } from 'src/anexo/dto/update-anexo.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Anexo } from './entities/anexo.entity';

@Injectable()
export class AnexoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(id: number): Promise<Anexo | null> {
    return this.prismaService.anexo.findUnique({
      where: { id },
    });
  }

  async create(data: CreateAnexoDto & { url: string; awsKey: string }): Promise<Anexo> {
    return this.prismaService.anexo.create({
      data: {
        title: data.title,
        url: data.url,
        awsKey: data.awsKey,
      },
    });
  }

  async update(id: number, data: UpdateAnexoDto): Promise<Anexo> {
    return this.prismaService.anexo.update({
      where: { id },
      data: {
        title: data.title,
        chamadoId: data.chamadoId,
      },
    });
  }
}
