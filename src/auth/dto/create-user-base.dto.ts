import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateUserBase implements Partial<User> {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString() 
  cpf_cnpj: string;

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
  data_nascimento?: Date | null;
}