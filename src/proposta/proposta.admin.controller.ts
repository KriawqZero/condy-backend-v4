import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { PropostaService } from './proposta.service';

@Controller('admin/propostas')
@UseGuards(JwtGuard)
export class PropostaAdminController {
  constructor(private readonly propostaService: PropostaService) {}

  @Post(':id/aprovar-contraproposta')
  async aprovar(@Param('id') id: string, @GetUser('id') adminId: string) {
    return this.propostaService.adminDecidirContraproposta(Number(id), adminId, 'aprovar');
  }

  @Post(':id/recusar-contraproposta')
  async recusar(@Param('id') id: string, @GetUser('id') adminId: string) {
    return this.propostaService.adminDecidirContraproposta(Number(id), adminId, 'recusar');
  }
}


