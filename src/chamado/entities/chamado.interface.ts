import { Chamado } from '@prisma/client';

export type ChamadoInterface = Chamado;
export type ChamadoCreateInput = Omit<Chamado, 'id' | 'createdAt' | 'updatedAt'>;
