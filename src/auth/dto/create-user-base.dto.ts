import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserInterface } from 'src/user/entities/user.interface';

export class CreateUserBase implements Partial<UserInterface> {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
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

  @IsDate()
  dataNascimento?: Date | null;
}
