import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DebugInterceptor } from 'src/common/interceptors/debug.interceptor';
import { FormatResponseInterceptor } from 'src/common/interceptors/format-response.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV !== 'a') {
    app.useGlobalInterceptors(
      new DebugInterceptor(), // <-- esse primeiro
      new FormatResponseInterceptor(), // <-- esse depois
    );
  } else {
    app.useGlobalInterceptors(new FormatResponseInterceptor());
  }

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
