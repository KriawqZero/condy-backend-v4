import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DebugInterceptor } from './common/interceptors/debug.interceptor';
import { FormatResponseInterceptor } from './common/interceptors/format-response.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      // adicione seus domínios de produção aqui, ex:
      // 'https://app.condy.com.br',
    ],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV !== 'production') {
    app.useGlobalInterceptors(new DebugInterceptor(), new FormatResponseInterceptor());
  } else {
    app.useGlobalInterceptors(new FormatResponseInterceptor());
  }

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
