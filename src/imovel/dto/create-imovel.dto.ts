import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateImovelDto {
  @ApiProperty({ description: 'Nome do imóvel.' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ description: 'CEP do imóvel.' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ description: 'Endereço completo (logradouro) do imóvel.' })
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @ApiProperty({ description: 'Cidade onde o imóvel está localizado.' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ description: 'Bairro do imóvel.' })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({ description: 'Número do imóvel.' })
  @IsString()
  @IsNotEmpty()
  numero: string;

  @ApiProperty({ description: 'UF do imóvel.', maxLength: 2 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  uf: string;

  @ApiPropertyOptional({ description: 'Complemento do endereço.' })
  @IsString()
  @IsOptional()
  complemento?: string | null;

  @ApiProperty({ description: 'Quantidade de moradias do condomínio.' })
  @IsInt()
  @IsNotEmpty()
  quantidade_moradias: number;
}
