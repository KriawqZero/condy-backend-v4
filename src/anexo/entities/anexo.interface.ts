import { Anexo } from '@prisma/client';

export type AnexoInterface = Anexo;
export type AnexoCreateInput = Omit<Anexo, 'id' | 'createdAt' | 'updatedAt'>;
