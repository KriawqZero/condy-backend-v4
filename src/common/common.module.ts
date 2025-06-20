import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HasherService } from './services/hasher.service';
import { S3Service } from './services/s3.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [HasherService, S3Service],
  exports: [HasherService, S3Service],
})
export class CommonModule {}
