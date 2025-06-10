import { Injectable } from '@nestjs/common';
import { CreateSindicoDto } from 'src/auth/dto/create-sindico.dto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createAuthDto: CreateSindicoDto) {
    return this.userRepository.create(createAuthDto);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
