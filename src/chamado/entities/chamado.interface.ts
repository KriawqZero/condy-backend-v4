import { Anexo, Chamado } from 'generated/prisma';

export type ChamadoInterface = Chamado;
export type ChamadoCreateInput = Omit<Chamado, 'id' | 'createdAt' | 'updatedAt'>;

export type AnexoInterface = Anexo;
export type AnexoCreateInput = Omit<Anexo, 'id' | 'createdAt' | 'updatedAt'>;
