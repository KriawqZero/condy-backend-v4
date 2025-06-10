import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSindicoDto } from 'src/auth/dto/create-sindico.dto';
import { HasherService } from 'src/common/services/hasher.service';
import { User, UserType } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';

export type CreateUserDto = CreateSindicoDto;

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasherService: HasherService,
  ) {}

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

    const userData: Partial<User> = {
      ...dto,
      userType: UserType[dto.userType],
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
