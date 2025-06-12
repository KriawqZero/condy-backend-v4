import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/create-user-dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('check-email')
  async checkEmailExists(@Query('payload') email: string) {
    return { email: email, exists: await this.authService.checkEmailExists(email) };
  }

  @Get('check-cpf-cnpj')
  async checkCpfCnpjExists(@Query('payload') cpfCnpj: string) {
    return { cpfCnpj: cpfCnpj, exists: await this.authService.checkCpfCnpjExists(cpfCnpj) };
  }

  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
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
