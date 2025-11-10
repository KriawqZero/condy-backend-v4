// src/aws/s3.service.ts
import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { extname } from 'path';
import { LoggerService } from './logger.service';

@Injectable()
export class S3Service {
  private readonly s3: S3Client;
  private readonly bucket: string;

  constructor(private readonly logger: LoggerService) {
    this.s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    this.bucket = process.env.AWS_S3_BUCKET!;
  }

  async uploadFile(file: Express.Multer.File, folder = 'uploads'): Promise<string> {
    const key = `${folder}/${randomUUID()}${extname(file.originalname)}`;

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    try {
      await this.s3.send(command);
      return key;
    } catch (error) {
      this.logger.logError(error as Error, 'S3Service.uploadFile', { key, folder });
      throw new InternalServerErrorException('Erro ao enviar arquivo para S3');
    }
  }

  async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    try {
      await this.s3.send(command);
    } catch (error) {
      this.logger.logError(error as Error, 'S3Service.deleteFile', { key });
      throw new InternalServerErrorException('Erro ao remover arquivo do S3');
    }
  }

  async getSignedUrl(key: string, expiresInSeconds = 3600): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    try {
      return await getSignedUrl(this.s3, command, { expiresIn: expiresInSeconds });
    } catch (error) {
      this.logger.logError(error as Error, 'S3Service.getSignedUrl', { key, expiresInSeconds });
      throw new InternalServerErrorException('Erro ao gerar URL assinada');
    }
  }

  getFileUrl(key: string): string {
    return `${process.env.NON_AWS_URL}/${key}`;
  }
}
