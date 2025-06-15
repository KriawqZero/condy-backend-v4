import { Module } from '@nestjs/common';
import { ImovelRepository } from 'src/imovel/imovel.repository';
import { ImovelController } from './imovel.controller';
import { ImovelService } from './imovel.service';

@Module({
  controllers: [ImovelController],
  providers: [ImovelService, ImovelRepository],
  exports: [ImovelService],
})
export class ImovelModule {}
