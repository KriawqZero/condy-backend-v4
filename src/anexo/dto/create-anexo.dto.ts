import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAnexoDto {
  @ApiPropertyOptional({ description: 'Título amigável do anexo.' })
  @IsOptional()
  title?: string | null;
}
