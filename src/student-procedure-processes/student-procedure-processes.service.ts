import { Injectable } from '@nestjs/common';
import { CreateStudentProcedureProcessInput } from './dto/create-student-procedure-process.input';
import { UpdateStudentProcedureProcessInput } from './dto/update-student-procedure-process.input';

@Injectable()
export class StudentProcedureProcessesService {
  create(createStudentProcedureProcessInput: CreateStudentProcedureProcessInput) {
    return 'This action adds a new studentProcedureProcess';
  }

  findAll() {
    return `This action returns all studentProcedureProcesses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentProcedureProcess`;
  }

  update(id: number, updateStudentProcedureProcessInput: UpdateStudentProcedureProcessInput) {
    return `This action updates a #${id} studentProcedureProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentProcedureProcess`;
  }
}
