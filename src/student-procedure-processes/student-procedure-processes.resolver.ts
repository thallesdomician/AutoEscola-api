import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentProcedureProcessesService } from './student-procedure-processes.service';
import { StudentProcedureProcess } from './entities/student-procedure-process.entity';
import { CreateStudentProcedureProcessInput } from './dto/create-student-procedure-process.input';
import { UpdateStudentProcedureProcessInput } from './dto/update-student-procedure-process.input';

@Resolver(() => StudentProcedureProcess)
export class StudentProcedureProcessesResolver {
  constructor(private readonly studentProcedureProcessesService: StudentProcedureProcessesService) {}

  @Mutation(() => StudentProcedureProcess)
  createStudentProcedureProcess(@Args('createStudentProcedureProcessInput') createStudentProcedureProcessInput: CreateStudentProcedureProcessInput) {
    return this.studentProcedureProcessesService.create(createStudentProcedureProcessInput);
  }

  @Query(() => [StudentProcedureProcess], { name: 'studentProcedureProcesses' })
  findAll() {
    return this.studentProcedureProcessesService.findAll();
  }

  @Query(() => StudentProcedureProcess, { name: 'studentProcedureProcess' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentProcedureProcessesService.findOne(id);
  }

  @Mutation(() => StudentProcedureProcess)
  updateStudentProcedureProcess(@Args('updateStudentProcedureProcessInput') updateStudentProcedureProcessInput: UpdateStudentProcedureProcessInput) {
    return this.studentProcedureProcessesService.update(updateStudentProcedureProcessInput.id, updateStudentProcedureProcessInput);
  }

  @Mutation(() => StudentProcedureProcess)
  removeStudentProcedureProcess(@Args('id', { type: () => Int }) id: number) {
    return this.studentProcedureProcessesService.remove(id);
  }
}
