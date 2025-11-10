import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SubsindicoInfo, UserStatus, UserType } from 'src/user/entities/user.entity';

export class SubsindicoInfoDto implements SubsindicoInfo {
  [x: string]: import('@prisma/client/runtime/library').JsonValue | undefined;
  @ApiProperty({ description: 'Nome do subsíndico.' })
  nome: string;

  @ApiProperty({ description: 'E-mail do subsíndico.' })
  email: string;

  @ApiProperty({ description: 'Telefone do subsíndico.' })
  telefone: string;

  @ApiProperty({ description: 'Número de WhatsApp do subsíndico.' })
  whatsapp: string;
}

export class AuthenticatedUserDto {
  @ApiProperty({ description: 'Identificador único do usuário.' })
  id: string;

  @ApiProperty({ description: 'Nome do usuário.' })
  name: string;

  @ApiProperty({ description: 'CPF ou CNPJ do usuário.' })
  cpfCnpj: string;

  @ApiProperty({ description: 'Número de WhatsApp do usuário.' })
  whatsapp: string;

  @ApiProperty({ description: 'Endereço de e-mail do usuário.' })
  email: string;

  @ApiProperty({
    description: 'Tipo de usuário dentro da plataforma.',
    enum: Object.keys(UserType),
  })
  userType: keyof typeof UserType;

  @ApiPropertyOptional({ type: String, format: 'date-time', description: 'Data de nascimento do usuário.' })
  dataNascimento: Date | null;

  @ApiProperty({ description: 'Status atual do usuário na plataforma.', enum: Object.keys(UserStatus) })
  status: keyof typeof UserStatus;

  @ApiPropertyOptional({ type: String, format: 'date-time', description: 'Início do mandato do síndico.' })
  periodoMandatoInicio: Date | null;

  @ApiPropertyOptional({ type: String, format: 'date-time', description: 'Fim do mandato do síndico.' })
  periodoMandatoFim: Date | null;

  @ApiPropertyOptional({ type: () => SubsindicoInfoDto, description: 'Informações do subsíndico, quando houver.' })
  subsindicoInfo: SubsindicoInfo | null;

  @ApiPropertyOptional({ description: 'Nome fantasia da empresa, quando aplicável.' })
  nomeFantasia: string | null;

  @ApiPropertyOptional({ description: 'Razão social da empresa, quando aplicável.' })
  razaoSocial: string | null;
}

export class AuthResponseDto {
  @ApiProperty({ type: () => AuthenticatedUserDto })
  user: AuthenticatedUserDto;

  @ApiProperty({ description: 'Token JWT para autenticação de requisições protegidas.' })
  token: string;
}
