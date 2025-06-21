import { Module } from '@nestjs/common';
import { AnexoRepository } from 'src/anexo/anexo.repository';
import { ChamadoModule } from 'src/chamado/chamado.module';
import { CommonModule } from 'src/common/common.module';
import { AnexoController } from './anexo.controller';
import { AnexoService } from './anexo.service';

@Module({
  controllers: [AnexoController],
  providers: [AnexoService, AnexoRepository],
  imports: [CommonModule, ChamadoModule],
})
export class AnexoModule {}
