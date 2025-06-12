import { AnexoInterface, ChamadoInterface } from 'src/chamado/entities/chamado.interface';
import { ChamadoStatus, Escopo, Prioridade } from 'src/chamado/entities/types';

export class Anexo implements AnexoInterface {
  id: number;
  url: string;
  title: string | null;

  createdAt: Date;
  updatedAt: Date;

  chamadoId: number;
  ativoId: number | null;
  areasComunsId: number | null;
}

export class Chamado implements ChamadoInterface {
  id: number;
  numeroChamado: string;
  descricaoOcorrido: string;
  informacoesAdicionais: string | null;

  prioridade: keyof typeof Prioridade;
  escopo: keyof typeof Escopo;
  status: keyof typeof ChamadoStatus;

  imovelId: number;
  solicitanteId: string;
  ativoId: number | null;
  prestadorAssignadoId: string | null;

  createdAt: Date;
  updatedAt: Date;
}
