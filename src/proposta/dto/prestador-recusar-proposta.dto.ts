import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PrestadorRecusarPropostaDto {
  @ApiProperty({ description: 'Justificativa para a recusa.' })
  @IsString()
  @IsNotEmpty()
  justificativa: string;
}
