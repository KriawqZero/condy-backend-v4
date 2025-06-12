import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ChamadoStatus, Escopo, Prioridade } from 'src/chamado/entities/types';

export class CreateChamadoDto {
  @IsString()
  @IsNotEmpty()
  descricaoOcorrido: string;

  @IsOptional()
  @IsString()
  informacoesAdicionais: string;

  @IsEnum(Prioridade)
  @IsNotEmpty()
  prioridade: Prioridade;

  @IsNumber()
  @IsNotEmpty()
  imovelId: number;

  @IsEnum(Escopo)
  @IsNotEmpty()
  escopo: Escopo;

  @IsEnum(ChamadoStatus)
  @IsNotEmpty()
  status: ChamadoStatus;
}
