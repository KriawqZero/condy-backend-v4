import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SubsindicoInfo, User, UserType } from 'src/user/entities/user.entity';
import { UserCreateInput } from 'src/user/entities/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Formata um usuário do Prisma para o tipo User com subsindicoInfo parseado
   */
  private formatUser(user: any | null): User | null {
    if (!user) {
      return null;
    }
    return {
      ...user,
      subsindicoInfo: this.parseSubsindicoInfo(user.subsindicoInfo),
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return this.formatUser(user);
  }

  async findByCpfCnpj(cpfCnpj: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { cpfCnpj } });
    return this.formatUser(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return this.formatUser(user);
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { whatsapp: phone } });
    return this.formatUser(user);
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
        status: userData.status,
        periodoMandatoInicio: userData.periodoMandatoInicio,
        periodoMandatoFim: userData.periodoMandatoFim,
        nomeFantasia: userData.nomeFantasia,
        razaoSocial: userData.razaoSocial,
        cep: userData.cep,
        endereco: userData.endereco,
        cidade: userData.cidade,
        uf: userData.uf,
      },
    });

    return this.formatUser(user)!;
  }

  async findAll(userTypeQuery?: keyof typeof UserType): Promise<User[]> {
    const where = userTypeQuery ? { userType: userTypeQuery } : undefined;
    const users = await this.prisma.user.findMany({ where });
    return users.map(user => this.formatUser(user)!).filter(Boolean);
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
        status: data.status ?? existingUser.status,
        periodoMandatoInicio: data.periodoMandatoInicio ?? existingUser.periodoMandatoInicio,
        periodoMandatoFim: data.periodoMandatoFim ?? existingUser.periodoMandatoFim,
        nomeFantasia: data.nomeFantasia ?? existingUser.nomeFantasia,
        razaoSocial: data.razaoSocial ?? existingUser.razaoSocial,
        cep: data.cep ?? existingUser.cep,
        endereco: data.endereco ?? existingUser.endereco,
        cidade: data.cidade ?? existingUser.cidade,
        uf: data.uf ?? existingUser.uf,
      },
    });

    return this.formatUser(user)!;
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
