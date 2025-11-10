import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HasherService } from './services/hasher.service';
import { S3Service } from './services/s3.service';
import { AuditService } from './services/audit.service';
import { LoggerService } from './services/logger.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [HasherService, S3Service, AuditService, LoggerService, HttpExceptionFilter],
  exports: [HasherService, S3Service, AuditService, LoggerService, HttpExceptionFilter],
})
export class CommonModule {}
