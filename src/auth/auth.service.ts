import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/auth/dto/create-user-dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { UpdateUserDto } from 'src/auth/dto/update-user.dto';
import { HasherService } from 'src/common/services/hasher.service';
import { User, UserStatus, UserType } from 'src/user/entities/user.entity';
import { UserCreateInput } from 'src/user/entities/user.interface';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly hasherService: HasherService,
  ) {}

  private async signToken(userId: string, userEmail: string, userType: string): Promise<string> {
    const payload = { id: userId, email: userEmail, userType };
    return await this.jwtService.signAsync(payload);
  }

  private mapUserResponse(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      cpfCnpj: user.cpfCnpj,
      whatsapp: user.whatsapp,
      dataNascimento: user.dataNascimento,
      subsindicoInfo: user.subsindicoInfo,
      status: user.status,
      periodoMandatoInicio: user.periodoMandatoInicio,
      periodoMandatoFim: user.periodoMandatoFim,
      nomeFantasia: user.nomeFantasia,
      razaoSocial: user.razaoSocial,
    };
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    return user !== null;
  }

  /**
   * Checks if the CPF/CNPJ already exists in the database.
   * @param cpfCnpj - The CPF/CNPJ to check.
   * @returns True if the CPF/CNPJ exists, false otherwise.
   */
  async checkCpfCnpjExists(cpfCnpj: string): Promise<boolean> {
    const user = await this.userRepository.findByCpfCnpj(cpfCnpj);
    return user !== null;
  }

  /**
   * Checks if the phone number already exists in the database.
   * @param phone - The phone number to check.
   * @returns True if the phone number exists, false otherwise.
   */
  async checkPhoneExists(phone: string): Promise<boolean> {
    const user = await this.userRepository.findByPhone(phone);
    return user !== null;
  }

  async create(dto: CreateUserDto) {
    const existingEmail = await this.checkEmailExists(dto.email);
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    const existingCpfCnpj = await this.checkCpfCnpjExists(dto.cpfCnpj);
    if (existingCpfCnpj) {
      throw new ConflictException('CPF/CNPJ already exists');
    }

    const existingPhone = await this.checkPhoneExists(dto.whatsapp);
    if (existingPhone) {
      throw new ConflictException('Phone number already exists');
    }

    const hashedPassword = await this.hasherService.hashPassword(dto.password);

    const userData: CreateUserDto = {
      ...dto,
      password: hashedPassword,
    };

    const user = await this.userRepository.create(userData);

    const token = await this.signToken(user.id, user.email, user.userType);

    if (!user) {
      throw new InternalServerErrorException('User could not be created');
    }

    return {
      user: this.mapUserResponse(user),
      token: token,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepository.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (
      [UserStatus.INATIVO, UserStatus.BLOQUEADO, UserStatus.PENDENTE, UserStatus.FALTA_DOCUMENTOS].includes(user.status)
    ) {
      throw new ForbiddenException(`User is ${user.status.toLowerCase()}`);
    }

    const isPasswordValid = await this.hasherService.comparePassword(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = await this.signToken(user.id, user.email, user.userType);

    return {
      user: this.mapUserResponse(user),
      token: token,
    };
  }

  async findAll(userTypeQuery: keyof typeof UserType | undefined) {
    return await this.userRepository.findAll(userTypeQuery);
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id);
  }

  async update(id: string, dto: UpdateUserDto) {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (dto.email && dto.email !== existingUser.email) {
      const userByEmail = await this.userRepository.findByEmail(dto.email);
      if (userByEmail && userByEmail.id !== id) {
        throw new ConflictException('Email already exists');
      }
    }

    if (dto.cpfCnpj && dto.cpfCnpj !== existingUser.cpfCnpj) {
      const userByCpfCnpj = await this.userRepository.findByCpfCnpj(dto.cpfCnpj);
      if (userByCpfCnpj && userByCpfCnpj.id !== id) {
        throw new ConflictException('CPF/CNPJ already exists');
      }
    }

    if (dto.whatsapp && dto.whatsapp !== existingUser.whatsapp) {
      const userByPhone = await this.userRepository.findByPhone(dto.whatsapp);
      if (userByPhone && userByPhone.id !== id) {
        throw new ConflictException('Phone number already exists');
      }
    }

    const { password, ...rest } = dto;

    const updatePayload: Partial<UserCreateInput> = {
      ...rest,
    };

    if (password) {
      updatePayload.password = await this.hasherService.hashPassword(password);
    }

    const updatedUser = await this.userRepository.update(id, updatePayload);

    return this.mapUserResponse(updatedUser);
  }

  async remove(id: string) {
    await this.userRepository.remove(id);
  }
}
