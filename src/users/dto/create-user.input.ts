import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'unique username key to login' })
  username: string;
  @Field(() => String, { description: 'unique username key to login' })
  password: string;
}
