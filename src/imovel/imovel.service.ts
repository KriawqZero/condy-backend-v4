import { Injectable } from '@nestjs/common';
import { Imovel } from 'src/imovel/entities/imovel.entity';
import { ResponsePayloadWithMeta } from 'src/imovel/entities/imovel.interface';
import { ImovelRepository } from 'src/imovel/imovel.repository';
import { CreateImovelDto } from './dto/create-imovel.dto';

@Injectable()
export class ImovelService {
  constructor(private readonly imovelRepository: ImovelRepository) {}
  create(createImovelDto: CreateImovelDto): Promise<Imovel> {
    return this.imovelRepository.create(createImovelDto);
  }

  async findAll(page: number = 1, limit: number = 10): Promise<ResponsePayloadWithMeta<Imovel[]>> {
    const { items, meta } = await this.imovelRepository.findAll(page, limit);
    return { items, meta };
  }

  async findAllByUserId(id: string, page: number = 1, limit: number = 10): Promise<ResponsePayloadWithMeta<Imovel[]>> {
    const { items, meta } = await this.imovelRepository.findAllByUserId(id, { page, limit });
    return { items, meta };
  }

  /*
  async findOne(id: number) {
    return await this.imovelRepository.findOne(id);
  }

  async update(id: number, updateImovelDto: UpdateImovelDto) {
    return await this.imovelRepository.update(id, updateImovelDto);
  }

  async remove(id: number) {
    return await this.imovelRepository.remove(id);
  }*/
}
