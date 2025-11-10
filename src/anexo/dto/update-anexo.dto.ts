import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAnexoDto {
  @ApiProperty({ description: 'Identificador do chamado associado ao anexo.' })
  @IsNumber()
  chamadoId: number;

  @ApiPropertyOptional({ description: 'Título amigável do anexo.' })
  @IsOptional()
  @IsString()
  title?: string | null;
}
