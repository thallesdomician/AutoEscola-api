import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProcessInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
