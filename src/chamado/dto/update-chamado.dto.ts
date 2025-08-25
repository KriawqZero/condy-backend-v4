import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ChamadoStatus } from 'src/chamado/entities/types';
import { CreateChamadoDto } from './create-chamado.dto';

export class UpdateChamadoDto extends PartialType(CreateChamadoDto) {
  @IsOptional()
  @IsEnum(ChamadoStatus)
  status?: ChamadoStatus;

  @IsOptional()
  @IsNumber()
  valorEstimado?: number;

  @IsOptional()
  @IsString()
  prestadorAssignadoId?: string;

  // Estes já existem via PartialType(CreateChamadoDto) mas deixamos aqui por clareza
  @IsOptional()
  @IsString()
  descricaoOcorrido?: string;

  @IsOptional()
  @IsString()
  informacoesAdicionais?: string;
}
