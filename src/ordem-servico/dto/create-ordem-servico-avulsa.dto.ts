import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrdemServicoAvulsaDto {
  @ApiProperty({ description: 'Descrição da ordem de serviço.' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiPropertyOptional({ description: 'Valor acordado para a execução da ordem de serviço.' })
  @IsOptional()
  @IsNumber()
  valorAcordado?: number;

  @ApiPropertyOptional({ description: 'Prazo acordado (em dias) para finalização da ordem.' })
  @IsOptional()
  @IsNumber()
  prazoAcordado?: number;

  @ApiPropertyOptional({ description: 'Referência externa utilizada pelo prestador.' })
  @IsOptional()
  @IsString()
  referenciaExterna?: string;
}
