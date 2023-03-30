import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BillingEntity {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
