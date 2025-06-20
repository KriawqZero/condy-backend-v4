import { Module } from '@nestjs/common';
import { AnexoRepository } from 'src/anexo/anexo.repository';
import { CommonModule } from 'src/common/common.module';
import { AnexoController } from './anexo.controller';
import { AnexoService } from './anexo.service';

@Module({
  controllers: [AnexoController],
  providers: [AnexoService, AnexoRepository],
  imports: [CommonModule],
})
export class AnexoModule {}
