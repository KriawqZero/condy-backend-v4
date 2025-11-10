import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../services/logger.service';

@Catch()
@Injectable()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception instanceof HttpException ? exception.getResponse() : 'Erro interno do servidor';

    // Log do erro
    this.logger.logError(exception as Error, 'HttpExceptionFilter', {
      url: request.url,
      method: request.method,
      body: request.body,
      query: request.query,
      params: request.params,
      ip: request.ip,
      userAgent: request.get('user-agent'),
    });

    // Formata a resposta de erro
    const errorResponse = {
      status: 'error',
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: this.extractErrorMessage(message),
      ...(process.env.NODE_ENV !== 'production' && {
        stack: exception instanceof Error ? exception.stack : undefined,
      }),
    };

    response.status(status).json(errorResponse);
  }

  private extractErrorMessage(message: any): string | string[] {
    if (typeof message === 'string') {
      return message;
    }

    if (typeof message === 'object' && message !== null) {
      // Para erros de validação do class-validator
      if (Array.isArray(message.message)) {
        return message.message;
      }

      if (message.message) {
        return message.message;
      }

      if (message.error) {
        return message.error;
      }
    }

    return 'Erro desconhecido';
  }
}


