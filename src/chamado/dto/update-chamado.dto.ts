import { PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ChamadoStatus } from 'src/chamado/entities/types';
import { CreateChamadoDto } from './create-chamado.dto';

export class UpdateChamadoDto extends PartialType(CreateChamadoDto) {
  @ApiPropertyOptional({ description: 'Status atual do chamado.', enum: ChamadoStatus })
  @IsOptional()
  @IsEnum(ChamadoStatus)
  status?: ChamadoStatus;

  @ApiPropertyOptional({ description: 'Valor estimado para resolução do chamado.' })
  @IsOptional()
  @IsNumber()
  valorEstimado?: number;

  @ApiPropertyOptional({ description: 'Identificador do prestador assignado ao chamado.' })
  @IsOptional()
  @IsString()
  prestadorAssignadoId?: string;

  // Estes já existem via PartialType(CreateChamadoDto) mas deixamos aqui por clareza
  @ApiPropertyOptional({ description: 'Descrição detalhada do ocorrido.' })
  @IsOptional()
  @IsString()
  descricaoOcorrido?: string;

  @ApiPropertyOptional({ description: 'Informações adicionais fornecidas pelo solicitante.' })
  @IsOptional()
  @IsString()
  informacoesAdicionais?: string;
}
