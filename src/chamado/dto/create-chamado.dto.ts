import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Escopo, Prioridade } from 'src/chamado/entities/types';

export class CreateChamadoDto {
  @ApiProperty({ description: 'Descrição detalhada do ocorrido.' })
  @IsString()
  @IsNotEmpty()
  descricaoOcorrido: string;

  @ApiPropertyOptional({ description: 'Informações adicionais fornecidas pelo solicitante.' })
  @IsOptional()
  @IsString()
  informacoesAdicionais: string;

  @ApiProperty({ description: 'Nível de prioridade do chamado.', enum: Prioridade })
  @IsEnum(Prioridade)
  @IsNotEmpty()
  prioridade: Prioridade;

  @ApiProperty({ description: 'Identificador do imóvel relacionado ao chamado.' })
  @IsNumber()
  @IsNotEmpty()
  imovelId: number;

  @ApiProperty({ description: 'Escopo do chamado.', enum: Escopo })
  @IsEnum(Escopo)
  @IsNotEmpty()
  escopo: Escopo;
}
