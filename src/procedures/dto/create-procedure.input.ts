import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProcedureInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
