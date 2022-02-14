import { CreateStudentProcessInput } from './create-student-process.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentProcessInput extends PartialType(CreateStudentProcessInput) {
  @Field(() => Int)
  id: number;
}
