export enum Prioridade {
  BAIXA = 'BAIXA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
}

export enum Escopo {
  ORCAMENTO = 'ORCAMENTO',
  SERVICO_IMEDIATO = 'SERVICO_IMEDIATO',
}

export enum ChamadoStatus {
  NOVO = 'NOVO',
  A_CAMINHO = 'A_CAMINHO',
  EM_ATENDIMENTO = 'EM_ATENDIMENTO',
  CONCLUIDO = 'CONCLUIDO',
}

export type ChamadoStatusType = ChamadoStatus;
export type EscopoType = Escopo;
export type PrioridadeType = Prioridade;
