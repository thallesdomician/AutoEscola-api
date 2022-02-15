import { CreateStudentProcedureProcessInput } from './create-student-procedure-process.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentProcedureProcessInput extends PartialType(CreateStudentProcedureProcessInput) {
  @Field(() => Int)
  id: number;
}
