import { Module } from '@nestjs/common';
import { PropostaService } from './proposta.service';
import { PropostaRepository } from './proposta.repository';
import { PropostaPrestadorController } from './proposta.prestador.controller';
import { PropostaAdminController } from './proposta.admin.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { UserModule } from 'src/user/user.module';
import { ChamadoModule } from 'src/chamado/chamado.module';

@Module({
  imports: [PrismaModule, UserModule, ChamadoModule],
  controllers: [PropostaPrestadorController, PropostaAdminController],
  providers: [PropostaService, PropostaRepository],
  exports: [PropostaService],
})
export class PropostaModule {}


