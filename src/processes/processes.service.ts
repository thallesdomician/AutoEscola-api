import { Injectable } from '@nestjs/common';
import { CreateProcessInput } from './dto/create-process.input';
import { UpdateProcessInput } from './dto/update-process.input';

@Injectable()
export class ProcessesService {
  create(createProcessInput: CreateProcessInput) {
    return 'This action adds a new process';
  }

  findAll() {
    return `This action returns all processes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} process`;
  }

  update(id: number, updateProcessInput: UpdateProcessInput) {
    return `This action updates a #${id} process`;
  }

  remove(id: number) {
    return `This action removes a #${id} process`;
  }
}
