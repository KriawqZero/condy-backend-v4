import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserInterface } from 'src/user/entities/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserInterface | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: Partial<UserInterface>): Promise<UserInterface> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<UserInterface[]> {
    return this.prisma.user.findMany();
  }
  async update(id: number, data: Partial<UserInterface>): Promise<UserInterface> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }
}
