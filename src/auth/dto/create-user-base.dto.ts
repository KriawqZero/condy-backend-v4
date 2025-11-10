import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsCpfCnpjConformeUsertype } from 'src/auth/dto/validators/cpfCnpj';
import { UserInterface } from 'src/user/entities/user.interface';

export class CreateUserBase implements Partial<UserInterface> {
  @ApiProperty({ description: 'Nome completo do usuário.' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'CPF ou CNPJ do usuário.' })
  @IsNotEmpty()
  @IsString()
  @IsCpfCnpjConformeUsertype({ message: 'CPF ou CNPJ inválido conforme tipo de usuário' })
  cpfCnpj: string;

  @ApiProperty({ description: 'Número de WhatsApp do usuário.' })
  @IsNotEmpty()
  @IsString()
  whatsapp: string;

  @ApiProperty({ description: 'E-mail do usuário.' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha de acesso à plataforma.' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiPropertyOptional({ type: String, format: 'date-time', description: 'Data de nascimento do usuário.' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataNascimento?: Date | null;
}
