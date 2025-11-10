import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class AdminEnviarPropostasDto {
  @ApiProperty({ description: 'Identificador do chamado relacionado.' })
  @IsNumber()
  chamadoId: number;

  @ApiProperty({ description: 'Lista de identificadores de prestadores.', type: [String] })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  prestadores: string[];

  @ApiPropertyOptional({ description: 'Preço mínimo sugerido na proposta.' })
  @IsOptional()
  @IsString()
  precoMin?: string;

  @ApiPropertyOptional({ description: 'Preço máximo sugerido na proposta.' })
  @IsOptional()
  @IsString()
  precoMax?: string;

  @ApiPropertyOptional({ description: 'Prazo sugerido em dias.' })
  @IsOptional()
  @IsNumber()
  prazo?: number;

  @ApiPropertyOptional({ description: 'Mensagem opcional enviada aos prestadores.' })
  @IsOptional()
  @IsString()
  mensagem?: string;
}
