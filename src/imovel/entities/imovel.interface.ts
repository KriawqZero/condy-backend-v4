import { Imovel } from 'generated/prisma';

export type ImovelInterface = Imovel;
export type ImovelCreateInput = Omit<Imovel, 'id' | 'createdAt' | 'updatedAt'>;

export interface ResponsePayloadWithMeta<T> {
  items: T;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
