import { Injectable } from '@nestjs/common';
import { CreateProcedureInput } from './dto/create-procedure.input';
import { UpdateProcedureInput } from './dto/update-procedure.input';

@Injectable()
export class ProceduresService {
  create(createProcedureInput: CreateProcedureInput) {
    return 'This action adds a new procedure';
  }

  findAll() {
    return `This action returns all procedures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} procedure`;
  }

  update(id: number, updateProcedureInput: UpdateProcedureInput) {
    return `This action updates a #${id} procedure`;
  }

  remove(id: number) {
    return `This action removes a #${id} procedure`;
  }
}
