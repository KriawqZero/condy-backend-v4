import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ChamadoRepository } from 'src/chamado/chamado.repository';
import { Chamado } from 'src/chamado/entities/chamado.entity';
import { ResponsePayloadWithMeta } from 'src/common/pagination';
import { ImovelService } from 'src/imovel/imovel.service';
import { User, UserType } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';

@Injectable()
export class ChamadoService {
  constructor(
    private readonly chamadoRepository: ChamadoRepository,
    private readonly userService: UserService,
    private readonly imovelService: ImovelService,
  ) {}

  async gerarCodigoChamado(): Promise<string> {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');

    const dataStr = `${ano}${mes}${dia}`; // 20250614

    // Busca quantos chamados já foram criados hoje
    const chamadosHoje = await this.chamadoRepository.countChamadosPorData(hoje);

    const numeroSequencial = String(chamadosHoje + 1).padStart(4, '0'); // Ex: 0012

    return `CH-${dataStr}-${numeroSequencial}`;
  }

  async create(createChamadoDto: CreateChamadoDto, solicitanteId: string) {
    const user: User | null = await this.userService.findById(solicitanteId);
    if (user === null) throw new UnauthorizedException('Error finding user');

    if (user.userType === UserType.ADMIN_PLATAFORMA || user.userType === UserType.PRESTADOR)
      throw new UnauthorizedException('User not allowed to create a chamado');

    if ((await this.imovelService.isImovelOwner(solicitanteId, createChamadoDto.imovelId)) === false)
      throw new UnauthorizedException('User not allowed to create a chamado for this imovel');

    return this.chamadoRepository.create({
      numeroChamado: await this.gerarCodigoChamado(),
      ...createChamadoDto,
      solicitanteId,
    });
  }

  async findAll(userId: string): Promise<ResponsePayloadWithMeta<Chamado[]>> {
    const user: User | null = await this.userService.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (user.userType == UserType.ADMIN_PLATAFORMA) {
      return this.chamadoRepository.findAll();
    }

    if (user.userType == UserType.PRESTADOR) {
      return this.chamadoRepository.findAllByPrestadorId(userId);
    }

    return this.chamadoRepository.findAllByUserId(userId);
  }

  async findOne(id: number, userId: string): Promise<Chamado | null> {
    const user: User | null = await this.userService.findById(userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    const chamado: Chamado | null = await this.chamadoRepository.findOneById(id);

    if (!chamado) {
      throw new NotFoundException();
    }

    if (user.userType === UserType.ADMIN_PLATAFORMA) return chamado;

    if (user.userType === UserType.PRESTADOR) {
      if (chamado.prestadorAssignadoId !== userId)
        throw new UnauthorizedException('User not allowed to view this chamado');

      return chamado;
    }

    if (chamado.solicitanteId !== userId) throw new UnauthorizedException('User not allowed to view this chamado');

    return chamado;
  }

  // Consulta pública: não retorna dados sensíveis do solicitante
  async findPublicByNumeroChamado(numeroChamado: string): Promise<Partial<Chamado> | null> {
    const chamado = await this.chamadoRepository.findOneByNumeroChamado(numeroChamado);
    if (!chamado) return null;

    // Remover dados sensíveis antes de retornar publicamente
    const { solicitanteId, prestadorAssignadoId, ...safe } = chamado as any;
    return safe;
  }

  update(id: number, updateChamadoDto: UpdateChamadoDto) {
    return `This action updates a #${id} chamado`;
  }

  remove(id: number) {
    return `This action removes a #${id} chamado`;
  }
}
