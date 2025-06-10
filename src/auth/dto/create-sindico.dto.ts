import { IsDate, IsNotEmpty } from 'class-validator';
import { CreateUserBase } from 'src/auth/dto/create-user-base.dto';
import { SubsindicoInfo, UserType } from 'src/user/entities/user.entity';

export class CreateSindicoDto extends CreateUserBase{
  @IsNotEmpty()
  user_type: UserType.SINDICO_PROFISSIONAL | UserType.SINDICO_RESIDENTE;

  @IsDate()
  @IsNotEmpty()
  periodo_mandato_inicio?: Date;

  @IsDate()
  @IsNotEmpty()
  periodo_mandato_fim: Date;

  subsindico_info?: SubsindicoInfo;
}