import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateIf } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SubsindicoInfo, UserType } from 'src/user/entities/user.entity';
import { CreateUserBase } from './create-user-base.dto';

export class CreateUserDto extends CreateUserBase {
  @ApiProperty({
    description: 'Tipo de usuário a ser criado.',
    enum: Object.keys(UserType),
  })
  @IsEnum(UserType, {
    message:
      'userType must be one of the following values: SINDICO_RESIDENTE, SINDICO_PROFISSIONAL, EMPRESA, PRESTADOR',
  })
  userType: keyof typeof UserType;

  //
  // Campos obrigatórios se for EMPRESA
  //
  @ApiProperty({ description: 'Razão social da empresa.', required: false })
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  razaoSocial: string;

  @ApiPropertyOptional({ description: 'Nome fantasia da empresa.' })
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsOptional()
  @IsString()
  nomeFantasia?: string;

  @ApiProperty({ description: 'CEP do endereço da empresa.', required: false })
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ApiProperty({ description: 'Endereço da empresa.', required: false })
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ApiProperty({ description: 'Cidade da empresa.', required: false })
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ApiProperty({ description: 'UF da empresa.', required: false, maxLength: 2 })
  @ValidateIf((o: CreateUserDto) => o.userType === 'EMPRESA')
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  uf: string;

  //
  // Campos obrigatórios se for SÍNDICO_RESIDENTE
  //
  @ApiProperty({
    description: 'Data de início do mandato (para síndico residente).',
    required: false,
    type: String,
    format: 'date-time',
  })
  @ValidateIf((o: CreateUserDto) => o.userType === 'SINDICO_RESIDENTE')
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  periodoMandatoInicio: Date;

  @ApiProperty({
    description: 'Data de término do mandato (para síndico residente).',
    required: false,
    type: String,
    format: 'date-time',
  })
  @ValidateIf((o: CreateUserDto) => o.userType === 'SINDICO_RESIDENTE')
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  periodoMandatoFim: Date;

  @ApiPropertyOptional({ description: 'Informações do subsíndico (para síndico residente).' })
  @ValidateIf((o: CreateUserDto) => o.userType === 'SINDICO_RESIDENTE')
  @IsOptional()
  subsindicoInfo?: SubsindicoInfo;
}
