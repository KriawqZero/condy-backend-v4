import { IsDate, IsNotEmpty } from 'class-validator';
import { CreateUserBase } from 'src/auth/dto/create-user-base.dto';
import { SubsindicoInfo, UserType } from 'src/user/entities/user.entity';

export class CreateSindicoDto extends CreateUserBase {
  @IsNotEmpty()
  userType: typeof UserType.SINDICO_RESIDENTE;

  @IsDate()
  @IsNotEmpty()
  periodoMandatoInicio?: Date;

  @IsDate()
  @IsNotEmpty()
  periodoMandatoFim: Date;

  subsindicoInfo?: SubsindicoInfo;
}
