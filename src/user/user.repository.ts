import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SubsindicoInfo, User } from 'src/user/entities/user.entity';
import { UserCreateInput } from 'src/user/entities/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      return null;
    }
    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  async findByCpfCnpj(cpfCnpj: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { cpfCnpj } });
    if (!user) {
      return null;
    }
    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      return null;
    }
    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { whatsapp: phone } });
    if (!user) {
      return null;
    }
    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  async create(data: Partial<UserCreateInput>): Promise<User> {
    if (!data.name) {
      throw new Error('Name is required');
    }

    const userData: UserCreateInput = {
      name: data.name,
      email: data.email!,
      password: data.password!,
      userType: data.userType!,
      cpfCnpj: data.cpfCnpj!,
      whatsapp: data.whatsapp!,
      dataNascimento: data.dataNascimento ?? null,
      subsindicoInfo: data.subsindicoInfo || null,
      status: data.status!,
      periodoMandatoInicio: data.periodoMandatoInicio ?? null,
      periodoMandatoFim: data.periodoMandatoFim ?? null,
      nomeFantasia: data.nomeFantasia ?? null,
      razaoSocial: data.razaoSocial ?? null,
      cep: data.cep ?? null,
      endereco: data.endereco ?? null,
      cidade: data.cidade ?? null,
      uf: data.uf ?? null,
    };

    const user = await this.prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        userType: userData.userType,
        cpfCnpj: userData.cpfCnpj,
        whatsapp: userData.whatsapp,
        dataNascimento: userData.dataNascimento ?? null,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        subsindicoInfo: data.subsindicoInfo ? (data.subsindicoInfo as any) : null,
      },
    });

    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map(user => ({
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    }));
  }

  async update(id: string, data: Partial<UserCreateInput>): Promise<User> {
    const existingUser = await this.findById(id);
    if (!existingUser) {
      throw new BadRequestException('User not found');
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name ?? existingUser.name,
        email: data.email ?? existingUser.email,
        password: data.password ?? existingUser.password,
        userType: data.userType ?? existingUser.userType,
        cpfCnpj: data.cpfCnpj ?? existingUser.cpfCnpj,
        whatsapp: data.whatsapp ?? existingUser.whatsapp,
        dataNascimento: data.dataNascimento ?? existingUser.dataNascimento,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        subsindicoInfo: data.subsindicoInfo ? (data.subsindicoInfo as any) : (existingUser.subsindicoInfo as any),
      },
    });

    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  /**
   * Converte o valor do banco de dados para o tipo SubsindicoInfo
   */
  private parseSubsindicoInfo(value: any): SubsindicoInfo | null {
    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value === 'string') {
      try {
        return JSON.parse(value) as SubsindicoInfo;
      } catch {
        return null;
      }
    }

    if (typeof value === 'object') {
      return value as SubsindicoInfo;
    }

    return null;
  }
}
