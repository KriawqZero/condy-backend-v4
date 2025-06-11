import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bc from 'bcrypt';

@Injectable()
export class HasherService {
  private readonly saltRounds: number;

  constructor(private readonly configService: ConfigService) {
    this.saltRounds = Number(this.configService.get<number>('BCRYPT_SALT_ROUNDS', 12));
  }

  /**
   * Hashes a password using bcrypt with the configured salt rounds.
   * @param password The password to hash.
   * @returns A promise that resolves to the hashed password.
   */
  async hashPassword(password: string): Promise<string> {
    return await bc.hash(password, this.saltRounds);
  }

  /**
   * Compares a plain password with a hashed password.
   * @param password The plain password to compare.
   * @param hashedPassword The hashed password to compare against.
   * @returns A promise that resolves to true if the passwords match, false otherwise.
   */
  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bc.compare(password, hashedPassword);
  }
}
