import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DebugInterceptor } from './common/interceptors/debug.interceptor';
import { FormatResponseInterceptor } from './common/interceptors/format-response.interceptor';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggerService } from './common/services/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obtém instâncias dos serviços do container de DI
  const logger = app.get(LoggerService);
  const httpExceptionFilter = app.get(HttpExceptionFilter);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      // adicione seus domínios de produção aqui, ex:
      // 'https://app.condy.com.br',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  app.setGlobalPrefix('api');

  // Aplica o filtro de exceções globalmente
  app.useGlobalFilters(httpExceptionFilter);

  if (process.env.NODE_ENV !== 'production') {
    app.useGlobalInterceptors(new DebugInterceptor(), new FormatResponseInterceptor());
  } else {
    app.useGlobalInterceptors(new FormatResponseInterceptor());
  }

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Condy API')
    .setDescription('Documentação oficial da Condy Plataforma')
    .setVersion(process.env.npm_package_version ?? '1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Informe o token JWT no formato: Bearer <token>',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Condy API Docs',
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  logger.log(`Aplicação rodando na porta ${port}`, 'Bootstrap');
}
void bootstrap();
