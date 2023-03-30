import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field()
  name: string;
  @Field(() => Int)
  price: number;
  @Field()
  phoneNumber: string;
}
