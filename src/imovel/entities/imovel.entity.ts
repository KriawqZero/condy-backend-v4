import { ImovelInterface } from 'src/imovel/entities/imovel.interface';

export class Imovel implements ImovelInterface {
  id: number;

  cep: string;
  endereco: string;
  cidade: string;
  bairro: string;
  numero: string;
  uf: string;
  complemento: string | null;

  quantidadeMoradias: number;

  gestorId: string;

  createdAt: Date;
  updatedAt: Date;
}
