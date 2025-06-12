import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/auth/dto/create-user-dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { HasherService } from 'src/common/services/hasher.service';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly hasherService: HasherService,
  ) {}

  /**
   * Generates a JWT token for the user.
   * @param userId - The ID of the user.
   * @param userType - The type of the user (e.g., 'admin', 'user').
   * @returns A signed JWT token.
   */
  private async signToken(userId: string, userEmail: string, userType: string): Promise<string> {
    const payload = { id: userId, email: userEmail, userType };
    return await this.jwtService.signAsync(payload);
  }

  /**
   * Checks if the email already exists in the database.
   * @param email - The email to check.
   * @returns True if the email exists, false otherwise.
   */
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

  async create(dto: CreateUserDto) {
    const existingEmail = await this.checkEmailExists(dto.email);
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    const existingCpfCnpj = await this.checkCpfCnpjExists(dto.cpfCnpj);
    if (existingCpfCnpj) {
      throw new ConflictException('CPF/CNPJ already exists');
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
      user: {
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
      },
      token: token,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepository.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await this.hasherService.comparePassword(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = await this.signToken(user.id, user.email, user.userType);

    return {
      user: {
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
      },
      token: token,
    };
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id);
  }

  /*   remove(id: string) {
    return this.userRepository.remove(id);
  } */
}
