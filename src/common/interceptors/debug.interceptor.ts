import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DebugInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const { method, originalUrl, headers, body } = request;

    console.log('--- [Request] --------------------');
    console.log(`${method} ${originalUrl}`);
    console.log('Headers:', headers);
    console.log('Body:', body);

    return next.handle().pipe(
      tap(data => {
        const responseHeaders = response.getHeaders();
        const duration = Date.now() - now;

        console.log('--- [Response] -------------------');
        console.log(`Status: ${response.statusCode}`);
        console.log('Headers:', responseHeaders);
        console.log('Body:', data);
        console.log(`Time: ${duration}ms`);
        console.log('----------------------------------');
      }),
    );
  }
}
