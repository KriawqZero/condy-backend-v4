import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PrestadorContrapropostaDto {
  @ApiPropertyOptional({ description: 'Preço mínimo sugerido pelo prestador.' })
  @IsOptional()
  @IsString()
  precoMin?: string;

  @ApiPropertyOptional({ description: 'Preço máximo sugerido pelo prestador.' })
  @IsOptional()
  @IsString()
  precoMax?: string;

  @ApiPropertyOptional({ description: 'Prazo sugerido em dias.' })
  @IsOptional()
  @IsNumber()
  prazo?: number;

  @ApiProperty({ description: 'Justificativa do prestador.' })
  @IsString()
  @IsNotEmpty()
  justificativa: string;
}
