import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AdminDecideContrapropostaDto {
  @ApiPropertyOptional({ description: 'Valor acordado pelo administrador, quando aplicável.' })
  @IsOptional()
  @IsString()
  valorAcordado?: string;
}
