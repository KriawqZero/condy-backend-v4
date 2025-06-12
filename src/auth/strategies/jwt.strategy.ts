import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserType } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';

export interface JwtPayload {
  id: string;
  email: string;
  userType: keyof typeof UserType;
}

export interface JwtResponse {
  id: string;
  name: string;
  email: string;
  userType: keyof typeof UserType;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    private readonly userRepository: UserRepository,
  ) {
    const jwtSecret = config.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    });
  }
  async validate(payload: JwtPayload): Promise<JwtResponse> {
    const user = await this.userRepository.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    if (user.userType !== payload.userType) {
      throw new UnauthorizedException('User type mismatch');
    }
    if (user.email !== payload.email) {
      throw new UnauthorizedException('Email mismatch');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType,
    };
  }
}
