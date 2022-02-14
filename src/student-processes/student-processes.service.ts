import { Injectable } from '@nestjs/common';
import { CreateStudentProcessInput } from './dto/create-student-process.input';
import { UpdateStudentProcessInput } from './dto/update-student-process.input';

@Injectable()
export class StudentProcessesService {
  create(createStudentProcessInput: CreateStudentProcessInput) {
    return 'This action adds a new studentProcess';
  }

  findAll() {
    return `This action returns all studentProcesses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentProcess`;
  }

  update(id: number, updateStudentProcessInput: UpdateStudentProcessInput) {
    return `This action updates a #${id} studentProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentProcess`;
  }
}
