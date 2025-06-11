import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsCpfCnpjConformeUsertype } from 'src/auth/dto/validators/cpfCnpj';
import { UserInterface } from 'src/user/entities/user.interface';

export class CreateUserBase implements Partial<UserInterface> {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsCpfCnpjConformeUsertype({ message: 'CPF ou CNPJ inválido conforme tipo de usuário' })
  cpfCnpj: string;

  @IsNotEmpty()
  @IsString()
  whatsapp: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dataNascimento?: Date | null;
}
