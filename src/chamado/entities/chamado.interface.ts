import { Chamado } from 'generated/prisma';

export type ChamadoInterface = Chamado;
export type ChamadoCreateInput = Omit<Chamado, 'id' | 'createdAt' | 'updatedAt'>;
