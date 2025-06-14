import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ChamadoRepository } from 'src/chamado/chamado.repository';
import { User, UserType } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';

@Injectable()
export class ChamadoService {
  constructor(
    private readonly chamadoRepository: ChamadoRepository,
    private readonly userService: UserService,
  ) {}

  async create(createChamadoDto: CreateChamadoDto, solicitanteId: string) {
    const user: User | null = await this.userService.findById(solicitanteId);
    if (user === null) throw new UnauthorizedException('Error finding user');

    if (user.userType === UserType.ADMIN_PLATAFORMA || user.userType === UserType.PRESTADOR)
      throw new UnauthorizedException('User not allowed to create a chamado');

    return this.chamadoRepository.create({ ...createChamadoDto, solicitanteId });
  }

  findAll() {
    return `This action returns all chamado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chamado`;
  }

  update(id: number, updateChamadoDto: UpdateChamadoDto) {
    return `This action updates a #${id} chamado`;
  }

  remove(id: number) {
    return `This action removes a #${id} chamado`;
  }
}
