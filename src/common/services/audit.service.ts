import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(actorId: string, action: string, entity: string, entityId: string, metadata?: Record<string, unknown>) {
    try {
      const data: any = { actorId, action, entity, entityId };
      if (metadata !== undefined) {
        data.metadata = metadata;
      }
      await this.prisma.auditLog.create({ data });
    } catch {
      // evitar quebrar o fluxo por falha de auditoria
    }
  }
}
