import { Anexo } from 'generated/prisma';

export type AnexoInterface = Anexo;
export type AnexoCreateInput = Omit<Anexo, 'id' | 'createdAt' | 'updatedAt'>;
