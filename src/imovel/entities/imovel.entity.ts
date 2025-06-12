import { Chamado } from 'src/chamado/entities/chamado.entity';
import { User } from 'src/user/entities/user.entity';

export class Imovel {
  id: string;

  cep: string;
  endereco: string;
  cidade: string;
  bairro: string;
  numero: string;
  uf: string;

  complemento?: string; // Optional field

  quantidade_moradias: number;

  gestor: User;
  chamados: Chamado[];
  // Additional fields can be added as needed
}
