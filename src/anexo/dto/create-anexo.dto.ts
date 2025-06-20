import { IsOptional } from 'class-validator';

export class CreateAnexoDto {
  @IsOptional()
  title?: string | null;
}
