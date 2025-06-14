import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Imovel } from 'src/imovel/entities/imovel.entity';
import { ImovelCreateInput, ResponsePayloadWithMeta } from 'src/imovel/entities/imovel.interface';

@Injectable()
export class ImovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: Partial<ImovelCreateInput>, gestorId: string): Promise<Imovel> {
    return await this.prisma.imovel.create({
      data: {
        cep:
          dto.cep ??
          (() => {
            throw new Error('CEP é obrigatório');
          })(),
        endereco:
          dto.endereco ??
          (() => {
            throw new Error('Endereço é obrigatório');
          })(),
        cidade:
          dto.cidade ??
          (() => {
            throw new Error('Cidade é obrigatória');
          })(),
        bairro:
          dto.bairro ??
          (() => {
            throw new Error('Bairro é obrigatório');
          })(),
        numero:
          dto.numero ??
          (() => {
            throw new Error('Número é obrigatório');
          })(),
        uf:
          dto.uf ??
          (() => {
            throw new Error('UF é obrigatória');
          })(),
        complemento: dto.complemento ?? null,
        quantidade_moradias: dto.quantidade_moradias ?? 0,
        gestor: {
          connect: { id: gestorId },
        },
      },
    });
  }

  async findAll(page: number = 1, limit: number = 10): Promise<ResponsePayloadWithMeta<Imovel[]>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.prisma.imovel.findMany({
        skip,
        take: limit,
      }),
      this.prisma.imovel.count(),
    ]);

    return {
      items: data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findAllByUserId(
    id: string,
    query: { page: number; limit: number } = { page: 1, limit: 10 },
  ): Promise<ResponsePayloadWithMeta<Imovel[]>> {
    const skip = (query.page - 1) * query.limit;
    const where = { gestorId: id };

    const [data, total] = await Promise.all([
      this.prisma.imovel.findMany({
        where,
        skip,
        take: query.limit,
      }),
      this.prisma.imovel.count({ where }),
    ]);

    return {
      items: data,
      meta: {
        total,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }
}
