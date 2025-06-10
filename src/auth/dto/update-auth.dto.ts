import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-sindico.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
