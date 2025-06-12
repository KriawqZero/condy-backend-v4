import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express'; // NestJS usa Express por padrão

export const GetUser = createParamDecorator((data: string | undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const user = request.user as Record<string, unknown>; // ou tipar melhor se você souber a forma do usuário
  if (data) {
    return user[data];
  }
  return user;
});
