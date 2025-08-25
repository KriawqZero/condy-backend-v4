import { Imovel } from '@prisma/client';

export type ImovelInterface = Imovel;
export type ImovelCreateInput = Omit<Imovel, 'id' | 'createdAt' | 'updatedAt'>;
