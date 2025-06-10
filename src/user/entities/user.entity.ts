import { UserInterface } from "src/user/entities/user.interface";

export type SubsindicoInfo = {
  nome: string;
  email: string;
  telefone: string;
  whatsapp: string;
}

export enum UserType {
  SINDICO_RESIDENTE = 'SINDICO_RESIDENTE',
  SINDICO_PROFISSIONAL = 'SINDICO_PROFISSIONAL',
  ADMIN_IMOVEIS = 'ADMIN_IMOVEIS',
  PRESTADOR = 'PRESTADOR',
  ADMIN_PLATAFORMA = 'ADMIN_PLATAFORMA',
}

export enum UserStatus {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  BLOQUEADO = 'BLOQUEADO',
  PENDENTE = 'PENDENTE',
  FALTA_DOCUMENTOS = 'FALTA_DOCUMENTOS',
}

export class User implements UserInterface {
  id: number;
  name: string;
  cpf_cnpj: string;
  whatsapp: string;
  email: string;
  password: string;
  user_type: UserType;
  data_nascimento: Date | null;

  created_at: Date;
  updated_at: Date;
  status: UserStatus;

  periodo_mandato_inicio: Date | null;
  periodo_mandato_fim: Date | null;
  subsindico_info: SubsindicoInfo | null;

  nome_fantasia: string | null;
  razao_social: string | null;
  cep: string | null;
  endereco: string | null;
  cidade: string | null;
  uf: string | null;
}