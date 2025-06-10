import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { CreateUserBase } from "src/auth/dto/create-user-base.dto";
import { UserType } from 'src/user/entities/user.entity';

export class CreateEmpresaDto extends CreateUserBase {
  @IsNotEmpty()
  @IsString()
  userType: string = UserType.EMPRESA;

  @IsOptional()
  @IsString()
  nomeFantasia: string;

  @IsNotEmpty()
  @IsString()
  razaoSocial: string;
  
  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  uf: string;
}