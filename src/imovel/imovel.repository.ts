import { Injectable } from '@nestjs/common';
import { paginate, ResponsePayloadWithMeta } from 'src/common/pagination';
import { PrismaService } from 'src/database/prisma.service';
import { Imovel } from 'src/imovel/entities/imovel.entity';
import { ImovelCreateInput } from 'src/imovel/entities/imovel.interface';

@Injectable()
export class ImovelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: Partial<ImovelCreateInput>, gestorId: string): Promise<Imovel> {
    return await this.prisma.imovel.create({
      data: {
        nome:
          dto.nome ??
          (() => {
            throw new Error('Nome é obrigatório');
          })(),
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
        quantidadeMoradias: dto.quantidadeMoradias ?? 0,
        gestor: {
          connect: { id: gestorId },
        },
      },
    });
  }

  async findAll(page: number = 1, limit: number = 10): Promise<ResponsePayloadWithMeta<Imovel[]>> {
    return paginate(
      () =>
        this.prisma.imovel.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),
      () => this.prisma.imovel.count(),
      page,
      limit,
    );
  }

  async findAllByUserId(
    id: string,
    query: { page: number; limit: number } = { page: 1, limit: 10 },
  ): Promise<ResponsePayloadWithMeta<Imovel[]>> {
    return paginate(
      () =>
        this.prisma.imovel.findMany({
          where: { gestorId: id },
          skip: (query.page - 1) * query.limit,
          take: query.limit,
        }),
      () => this.prisma.imovel.count({ where: { gestorId: id } }),
      query.page,
      query.limit,
    );
  }

  async findById(id: number): Promise<Imovel | null> {
    return await this.prisma.imovel.findUnique({
      where: { id },
    });
  }
}
