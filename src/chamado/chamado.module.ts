import { Module } from '@nestjs/common';
import { ChamadoRepository } from 'src/chamado/chamado.repository';
import { ImovelModule } from 'src/imovel/imovel.module';
import { UserModule } from 'src/user/user.module';
import { ChamadoController } from './chamado.controller';
import { ChamadoService } from './chamado.service';

@Module({
  imports: [UserModule, ImovelModule],
  controllers: [ChamadoController],
  providers: [ChamadoService, ChamadoRepository],
  exports: [ChamadoRepository],
})
export class ChamadoModule {}
