import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentProcessesService } from './student-processes.service';
import { StudentProcess } from './entities/student-process.entity';
import { CreateStudentProcessInput } from './dto/create-student-process.input';
import { UpdateStudentProcessInput } from './dto/update-student-process.input';

@Resolver(() => StudentProcess)
export class StudentProcessesResolver {
  constructor(private readonly studentProcessesService: StudentProcessesService) {}

  @Mutation(() => StudentProcess)
  createStudentProcess(@Args('createStudentProcessInput') createStudentProcessInput: CreateStudentProcessInput) {
    return this.studentProcessesService.create(createStudentProcessInput);
  }

  @Query(() => [StudentProcess], { name: 'studentProcesses' })
  findAll() {
    return this.studentProcessesService.findAll();
  }

  @Query(() => StudentProcess, { name: 'studentProcess' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentProcessesService.findOne(id);
  }

  @Mutation(() => StudentProcess)
  updateStudentProcess(@Args('updateStudentProcessInput') updateStudentProcessInput: UpdateStudentProcessInput) {
    return this.studentProcessesService.update(updateStudentProcessInput.id, updateStudentProcessInput);
  }

  @Mutation(() => StudentProcess)
  removeStudentProcess(@Args('id', { type: () => Int }) id: number) {
    return this.studentProcessesService.remove(id);
  }
}
