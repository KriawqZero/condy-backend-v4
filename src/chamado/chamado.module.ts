import { Module } from '@nestjs/common';
import { ChamadoRepository } from 'src/chamado/chamado.repository';
import { UserModule } from 'src/user/user.module';
import { ChamadoController } from './chamado.controller';
import { ChamadoService } from './chamado.service';

@Module({
  imports: [UserModule],
  controllers: [ChamadoController],
  providers: [ChamadoService, ChamadoRepository],
})
export class ChamadoModule {}
