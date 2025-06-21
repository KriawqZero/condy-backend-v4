import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

type Response = {
  status: string;
  data: any;
};

@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    return next.handle().pipe(
      map(data => {
        // Format the response data as needed
        return {
          status: 'success',
          data: data,
        };
      }),
    );
  }
}
