import { Module } from '@nestjs/common';
import { PrestadorController } from './prestador.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PrestadorController],
})
export class PrestadorModule {}


