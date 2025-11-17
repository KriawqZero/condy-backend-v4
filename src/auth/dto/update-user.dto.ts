import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user-dto';
import { UserStatus, UserType } from 'src/user/entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: 'Tipo de usuário.',
    enum: Object.keys(UserType),
  })
  @IsOptional()
  @IsEnum(UserType, {
    message:
      'userType deve ser um dos seguintes valores: SINDICO_RESIDENTE, SINDICO_PROFISSIONAL, EMPRESA, PRESTADOR, ADMIN_PLATAFORMA',
  })
  override userType?: keyof typeof UserType;

  @ApiPropertyOptional({
    description: 'Status do usuário.',
    enum: Object.keys(UserStatus),
  })
  @IsOptional()
  @IsEnum(UserStatus, {
    message:
      'status deve ser um dos seguintes valores: ATIVO, INATIVO, BLOQUEADO, PENDENTE, FALTA_DOCUMENTOS',
  })
  status?: keyof typeof UserStatus;

  @ApiPropertyOptional({ description: 'Senha do usuário.' })
  @IsOptional()
  @IsString()
  override password?: string;
}

