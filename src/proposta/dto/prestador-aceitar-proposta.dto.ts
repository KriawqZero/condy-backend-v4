import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class PrestadorAceitarPropostaDto {
  @ApiPropertyOptional({ description: 'Valor acordado pelo prestador.' })
  @IsOptional()
  @IsString()
  valorAcordado?: string;
}
