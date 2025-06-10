import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HasherService } from './services/hasher.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [HasherService],
  exports: [HasherService],
})
export class CommonModule {}
