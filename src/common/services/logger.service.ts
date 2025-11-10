import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

@Injectable()
export class LoggerService implements NestLoggerService {
  private readonly context = 'Application';

  log(message: any, context?: string): void {
    console.log(`[${context || this.context}] ${message}`);
  }

  error(message: any, trace?: string, context?: string): void {
    console.error(`[${context || this.context}] ERROR: ${message}`);
    if (trace) {
      console.error(trace);
    }
  }

  warn(message: any, context?: string): void {
    console.warn(`[${context || this.context}] WARN: ${message}`);
  }

  debug(message: any, context?: string): void {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[${context || this.context}] DEBUG: ${message}`);
    }
  }

  verbose(message: any, context?: string): void {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[${context || this.context}] VERBOSE: ${message}`);
    }
  }

  // Método personalizado para log de erros estruturados
  logError(error: Error | any, context?: string, additionalData?: Record<string, any>): void {
    const errorInfo = {
      message: error?.message || String(error),
      stack: error?.stack,
      context,
      timestamp: new Date().toISOString(),
      ...additionalData,
    };

    console.error('[ERROR]', JSON.stringify(errorInfo, null, 2));
  }

  // Método para log de eventos de negócio
  logBusinessEvent(event: string, data?: Record<string, any>, context?: string): void {
    const eventInfo = {
      event,
      data,
      context,
      timestamp: new Date().toISOString(),
    };

    console.log('[EVENT]', JSON.stringify(eventInfo, null, 2));
  }
}


