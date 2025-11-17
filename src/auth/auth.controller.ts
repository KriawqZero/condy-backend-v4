import { Body, Controller, Get, Param, Patch, Post, Query, UnauthorizedException, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/auth/dto/create-user-dto';
import { AuthResponseDto } from 'src/auth/dto/auth-response.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { UpdateUserDto } from 'src/auth/dto/update-user.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { UserType } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('Autenticação')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('check-email')
  @ApiOperation({ summary: 'Verificar existência de e-mail' })
  @ApiQuery({ name: 'payload', description: 'E-mail a ser verificado.' })
  @ApiOkResponse({ description: 'Retorna se o e-mail já está cadastrado.' })
  async checkEmailExists(@Query('payload') email: string) {
    return { email: email, exists: await this.authService.checkEmailExists(email) };
  }

  @Get('check-cpf-cnpj')
  @ApiOperation({ summary: 'Verificar existência de CPF/CNPJ' })
  @ApiQuery({ name: 'payload', description: 'CPF ou CNPJ a ser verificado.' })
  @ApiOkResponse({ description: 'Retorna se o CPF/CNPJ já está cadastrado.' })
  async checkCpfCnpjExists(@Query('payload') cpfCnpj: string) {
    return { cpfCnpj: cpfCnpj, exists: await this.authService.checkCpfCnpjExists(cpfCnpj) };
  }

  @Get('check-phone')
  @ApiOperation({ summary: 'Verificar existência de telefone/WhatsApp' })
  @ApiQuery({ name: 'payload', description: 'Número de telefone ou WhatsApp a ser verificado.' })
  @ApiOkResponse({ description: 'Retorna se o telefone já está cadastrado.' })
  async checkPhoneExists(@Query('payload') phone: string) {
    return { phone: phone, exists: await this.authService.checkPhoneExists(phone) };
  }

  @Post()
  @ApiOperation({ summary: 'Registrar novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ description: 'Usuário registrado com sucesso.', type: AuthResponseDto })
  @ApiConflictResponse({ description: 'Dados já cadastrados.' })
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ description: 'Login realizado com sucesso.', type: AuthResponseDto })
  @ApiUnauthorizedResponse({ description: 'Credenciais inválidas.' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get()
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Listar usuários', description: 'Disponível apenas para administradores da plataforma.' })
  @ApiQuery({ name: 'userType', required: false, description: 'Filtra usuários por tipo.' })
  @ApiOkResponse({ description: 'Lista de usuários cadastrados.' })
  @ApiUnauthorizedResponse({ description: 'Acesso restrito a administradores.' })
  findAll(@GetUser('userType') userType: string, @Query('userType') userTypeQuery: keyof typeof UserType | undefined) {
    if (userType == UserType.ADMIN_PLATAFORMA) return this.authService.findAll(userTypeQuery as keyof typeof UserType);
    else throw new UnauthorizedException('Unauthorized access');
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Obter usuário por ID',
    description: 'Disponível apenas para administradores da plataforma.',
  })
  @ApiOkResponse({ description: 'Usuário encontrado.' })
  @ApiUnauthorizedResponse({ description: 'Acesso restrito a administradores.' })
  findOne(@GetUser('userType') userType: string, @Param('id') id: string) {
    if (userType == UserType.ADMIN_PLATAFORMA) return this.authService.findOne(id);
    else throw new UnauthorizedException('Unauthorized access');
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Atualizar usuário',
    description: 'Disponível apenas para administradores da plataforma.',
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({ description: 'Usuário atualizado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Acesso restrito a administradores.' })
  update(@GetUser('userType') userType: string, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (userType == UserType.ADMIN_PLATAFORMA) return this.authService.update(id, updateUserDto);
    else throw new UnauthorizedException('Unauthorized access');
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(id, updateAuthDto);
  } */

  /*   @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  } */
}
