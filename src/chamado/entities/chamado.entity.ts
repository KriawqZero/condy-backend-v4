import { ChamadoStatus, Escopo, Prioridade } from 'src/chamado/entities/types';
import { Imovel } from 'src/imovel/entities/imovel.entity';
import { User } from 'src/user/entities/user.entity';

export class Anexo {
  id: string;
  url: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Chamado {
  id: string;
  numeroChamado: string;
  descricaoOcorrido: string;

  anexos: Anexo[]; // Assuming Anexo is another entity

  informacoesAdicionais: string;
  prioridade: Prioridade;
  escopo: Escopo;
  status: ChamadoStatus;

  imovel: Imovel;

  solicitante: User;
  prestadorAssignado?: User;
}
