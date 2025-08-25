import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { UserService } from './user.service';
import { UserType } from './entities/user.entity';

@Controller('user')
@UseGuards(JwtGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Lista prestadores (para admin atribuir em chamado)
  @Get('prestadores')
  async listarPrestadores(@Query('q') q?: string) {
    const all = await this.userService.findAll();
    const list = all.filter((u) => u.userType === UserType.PRESTADOR);
    if (!q) return list;
    const term = q.toLowerCase();
    return list.filter((u) =>
      [u.name, u.email, u.cpfCnpj, u.whatsapp, u.nomeFantasia]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term)),
    );
  }
}
