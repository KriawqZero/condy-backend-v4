import { Injectable } from '@nestjs/common';
import { UpdateAnexoDto } from './dto/update-anexo.dto';

@Injectable()
export class AnexoService {
  upload(file: Express.Multer.File) {}

  findAll() {
    return `This action returns all anexo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anexo`;
  }

  update(id: number, updateAnexoDto: UpdateAnexoDto) {
    return `This action updates a #${id} anexo`;
  }

  remove(id: number) {
    return `This action removes a #${id} anexo`;
  }
}
