  import { JsonObject } from '@prisma/client/runtime/library';
import { UserInterface } from 'src/user/entities/user.interface';

export interface SubsindicoInfo extends JsonObject {
  nome: string;
  email: string;
  telefone: string;
  whatsapp: string;
}

export const UserType = {
  SINDICO_RESIDENTE: 'SINDICO_RESIDENTE',
  SINDICO_PROFISSIONAL: 'SINDICO_PROFISSIONAL',
  EMPRESA: 'EMPRESA',
  PRESTADOR: 'PRESTADOR',
  ADMIN_PLATAFORMA: 'ADMIN_PLATAFORMA',
};

export const UserStatus = {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  BLOQUEADO: 'BLOQUEADO',
  PENDENTE: 'PENDENTE',
  FALTA_DOCUMENTOS: 'FALTA_DOCUMENTOS',
};

export class User implements UserInterface {
  id: string;
  name: string;
  cpfCnpj: string;
  whatsapp: string;
  email: string;
  password: string;
  userType: keyof typeof UserType;
  dataNascimento: Date | null;

  createdAt: Date;
  updatedAt: Date;
  status: keyof typeof UserStatus;

  periodoMandatoInicio: Date | null;
  periodoMandatoFim: Date | null;
  subsindicoInfo: SubsindicoInfo | null;

  nomeFantasia: string | null;
  razaoSocial: string | null;
  cep: string | null;
  endereco: string | null;
  cidade: string | null;
  uf: string | null;
}
