import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAnexoDto {
  @IsNumber()
  chamadoId: number;

  @IsOptional()
  @IsString()
  title?: string | null;
}
