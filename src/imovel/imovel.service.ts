import { Injectable } from '@nestjs/common';
import { ResponsePayloadWithMeta } from 'src/common/pagination';
import { Imovel } from 'src/imovel/entities/imovel.entity';
import { ImovelRepository } from 'src/imovel/imovel.repository';
import { CreateImovelDto } from './dto/create-imovel.dto';

@Injectable()
export class ImovelService {
  constructor(private readonly imovelRepository: ImovelRepository) {}

  async isImovelOwner(gestorId: string, imovelId: number): Promise<boolean> {
    const imovel = await this.imovelRepository.findById(imovelId);
    if (!imovel) return false;
    return imovel.gestorId === gestorId;
  }

  create(createImovelDto: CreateImovelDto, gestorId: string): Promise<Imovel> {
    return this.imovelRepository.create(createImovelDto, gestorId);
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
