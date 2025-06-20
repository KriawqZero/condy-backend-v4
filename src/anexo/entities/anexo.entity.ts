import { AnexoInterface } from 'src/anexo/entities/anexo.interface';

export class Anexo implements AnexoInterface {
  id: number;
  url: string;
  awsKey: string;
  title: string | null;

  createdAt: Date;
  updatedAt: Date;

  chamadoId: number | null;
}
