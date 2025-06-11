import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateIf } from 'class-validator';
import { SubsindicoInfo, UserType } from 'src/user/entities/user.entity';
import { CreateUserBase } from './create-user-base.dto';

export class CreateUserDto extends CreateUserBase {
  @IsEnum(UserType, {message: 'userType must be one of the following values: SINDICO_RESIDENTE, SINDICO_PROFISSIONAL, EMPRESA, PRESTADOR'})
  userType: typeof UserType;

  //
  // Campos obrigatórios se for EMPRESA
  //
  @ValidateIf(o => o.userType === UserType.EMPRESA)
  @IsNotEmpty()
  @IsString()
  razaoSocial: string;

  @ValidateIf(o => o.userType === UserType.EMPRESA)
  @IsOptional()
  @IsString()
  nomeFantasia?: string;

  @ValidateIf(o => o.userType === UserType.EMPRESA)
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ValidateIf(o => o.userType === UserType.EMPRESA)
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ValidateIf(o => o.userType === UserType.EMPRESA)
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ValidateIf(o => o.userType === UserType.EMPRESA)
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  uf: string;

  //
  // Campos obrigatórios se for SÍNDICO_RESIDENTE
  //
  @ValidateIf(o => o.userType === UserType.SINDICO_RESIDENTE)
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  periodoMandatoInicio: Date;

  @ValidateIf(o => o.userType === UserType.SINDICO_RESIDENTE)
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  periodoMandatoFim: Date;

  @ValidateIf(o => o.userType === UserType.SINDICO_RESIDENTE)
  @IsOptional()
  subsindicoInfo?: SubsindicoInfo;
}
