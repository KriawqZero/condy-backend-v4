import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateIf } from 'class-validator';
import { SubsindicoInfo, UserType } from 'src/user/entities/user.entity';
import { CreateUserBase } from './create-user-base.dto';

export class CreateUserDto extends CreateUserBase {
  @IsEnum(UserType, {
    message:
      'userType must be one of the following values: SINDICO_RESIDENTE, SINDICO_PROFISSIONAL, EMPRESA, PRESTADOR',
  })
  userType: keyof typeof UserType;

  //
  // Campos obrigatórios se for EMPRESA
  //
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  razaoSocial: string;

  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsOptional()
  @IsString()
  nomeFantasia?: string;

  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  uf: string;

  //
  // Campos obrigatórios se for SÍNDICO_RESIDENTE
  //
  @ValidateIf((o: CreateUserDto) => o.userType === 'SINDICO_RESIDENTE')
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  periodoMandatoInicio: Date;

  @ValidateIf((o: CreateUserDto) => o.userType === 'SINDICO_RESIDENTE')
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  periodoMandatoFim: Date;

  @ValidateIf((o: CreateUserDto) => o.userType === 'SINDICO_RESIDENTE')
  @IsOptional()
  subsindicoInfo?: SubsindicoInfo;
}
