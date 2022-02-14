import { CreateProcessInput } from './create-process.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProcessInput extends PartialType(CreateProcessInput) {
  @Field(() => Int)
  id: number;
}
