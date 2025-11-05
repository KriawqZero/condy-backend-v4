import { Module } from '@nestjs/common';
import { OrdemServicoService } from './ordem-servico.service';
import { OrdemServicoRepository } from './ordem-servico.repository';
import { OrdemServicoController } from './ordem-servico.prestador.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [OrdemServicoController],
  providers: [OrdemServicoService, OrdemServicoRepository],
  exports: [OrdemServicoService],
})
export class OrdemServicoModule {}
