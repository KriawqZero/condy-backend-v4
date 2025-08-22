import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from 'src/common/common.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChamadoModule } from './chamado/chamado.module';
import { PrismaModule } from './database/prisma.module';
import { ImovelModule } from './imovel/imovel.module';
import { UserModule } from './user/user.module';
import { AnexoModule } from './anexo/anexo.module';
import { PropostaModule } from './proposta/proposta.module';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';
import { PrestadorModule } from './prestador/prestador.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChamadoModule,
    ImovelModule,
    AnexoModule,
    PropostaModule,
    OrdemServicoModule,
    PrestadorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
