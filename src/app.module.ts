import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from 'src/common/common.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './user/user.module';
import { ChamadoModule } from './chamado/chamado.module';
import { ImovelModule } from './imovel/imovel.module';
import { ChamadoModule } from './chamado/chamado.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
