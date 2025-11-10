import { ApiProperty } from '@nestjs/swagger';
import { OrdemServicoStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateOrdemServicoStatusDto {
  @ApiProperty({ description: 'Novo status da ordem de serviço.', enum: OrdemServicoStatus })
  @IsEnum(OrdemServicoStatus)
  status: OrdemServicoStatus;
}
