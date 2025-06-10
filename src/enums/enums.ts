
export const RegimeTributario = {
  SIMPLES_NACIONAL: 'SIMPLES_NACIONAL',
  LUCRO_PRESUMIDO: 'LUCRO_PRESUMIDO',
  LUCRO_REAL: 'LUCRO_REAL',
};

export type RegimeTributarioType = keyof typeof RegimeTributario;

export const UserType: {
  SINDICO_RESIDENTE: string;
  SINDICO_PROFISSIONAL: string;
  ADMIN_IMOVEIS: string;
  PRESTADOR: string;
  ADMIN_PLATAFORMA: string;
} = {
  SINDICO_RESIDENTE: 'SINDICO_RESIDENTE',
  SINDICO_PROFISSIONAL: 'SINDICO_PROFISSIONAL',
  ADMIN_IMOVEIS: 'ADMIN_IMOVEIS',
  PRESTADOR: 'PRESTADOR',
  ADMIN_PLATAFORMA: 'ADMIN_PLATAFORMA',
};

export type UserType = keyof typeof UserType;
