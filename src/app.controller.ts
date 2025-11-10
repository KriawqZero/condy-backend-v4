import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Saúde da Aplicação')
export class AppController {
  @Get('/health')
  @ApiOperation({ summary: 'Verificar saúde da aplicação', description: 'Retorna o status atual da API.' })
  @ApiOkResponse({ description: 'Status atual da aplicação.' })
  checkHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
