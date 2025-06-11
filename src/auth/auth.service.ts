import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/auth/dto/create-user-dto';
import { HasherService } from 'src/common/services/hasher.service';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly hasherService: HasherService,
  ) {}

  private async signToken(userId: number, userType: string): Promise<string> {
    const payload = { sub: userId, userType };
    return await this.jwtService.signAsync(payload);
  }

  async create(dto: CreateUserDto) {
    const existingEmail = await this.userRepository.findByEmail(dto.email);
    if (existingEmail != null) {
      throw new ConflictException('Email already exists');
    }

    const existingCpfCnpj = await this.userRepository.findByCpfCnpj(dto.cpfCnpj);
    if (existingCpfCnpj != null) {
      throw new ConflictException('CPF/CNPJ already exists');
    }

    const hashedPassword = await this.hasherService.hashPassword(dto.password);

    const userData: CreateUserDto = {
      ...dto,
      password: hashedPassword,
    };

    console.log('Creating user with data:', userData);

    //return await this.userRepository.create(userData);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findById(id);
  }

  /*   remove(id: number) {
    return this.userRepository.remove(id);
  } */
}
