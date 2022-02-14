import { CreateProcedureInput } from './create-procedure.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProcedureInput extends PartialType(CreateProcedureInput) {
  @Field(() => Int)
  id: number;
}
