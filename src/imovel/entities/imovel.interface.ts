import { Imovel } from 'generated/prisma';

export type ImovelInterface = Imovel;
export type ImovelCreateInput = Omit<Imovel, 'id' | 'createdAt' | 'updatedAt'>;
