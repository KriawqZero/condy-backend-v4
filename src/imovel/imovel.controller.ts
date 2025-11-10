import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { UserType } from 'src/user/entities/user.entity';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { ImovelService } from './imovel.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('imovel')
@UseGuards(JwtGuard)
@ApiTags('Imóveis')
@ApiBearerAuth('JWT-auth')
export class ImovelController {
  constructor(
    private readonly imovelService: ImovelService,
    private readonly authService: AuthService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Cadastrar imóvel' })
  @ApiCreatedResponse({ description: 'Imóvel cadastrado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Somente administradores podem cadastrar imóveis.' })
  @ApiNotFoundResponse({ description: 'Gestor informado não encontrado.' })
  async create(
    @Body() createImovelDto: CreateImovelDto,
    @GetUser('userType') userType: string,
    @Query('gestorId') gestorId: string,
  ) {
    if (userType === UserType.ADMIN_PLATAFORMA) {
      // Admin pode cadastrar para qualquer gestor (gestorId via query), ou para si mesmo se não informado
      const gestor = await this.authService.findOne(gestorId);
      if (!gestor) {
        throw new NotFoundException('Gestor não encontrado.');
      }
      return this.imovelService.create(createImovelDto, gestor.id);
    } else {
      throw new UnauthorizedException('Somente administradores da plataforma podem cadastrar imóveis.');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar imóveis' })
  @ApiQuery({ name: 'page', required: false, description: 'Número da página para paginação.' })
  @ApiQuery({ name: 'limit', required: false, description: 'Quantidade de itens por página.' })
  @ApiOkResponse({ description: 'Lista de imóveis recuperada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Acesso restrito.' })
  findAll(
    @GetUser('userType') userType: string,
    @GetUser('id') userId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    if (userType === UserType.ADMIN_PLATAFORMA) {
      return this.imovelService.findAll(page, limit);
    } else if (userType === UserType.SINDICO_RESIDENTE || userType === UserType.SINDICO_PROFISSIONAL) {
      return this.imovelService.findAllByUserId(userId, page, limit);
    } else {
      throw new UnauthorizedException();
    }
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imovelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImovelDto: UpdateImovelDto) {
    return this.imovelService.update(+id, updateImovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imovelService.remove(+id);
  }*/
}
