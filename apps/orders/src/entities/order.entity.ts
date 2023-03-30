import { AbstractDocument } from '@app/common/database/abstract.schema';
import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class OrderEntity {
  @Field(() => ID, {})
  _id: string;
  @Prop()
  @Field()
  name: string;
  @Prop()
  @Field(() => Float)
  price: number;
  @Prop()
  @Field()
  phoneNumber: string;
}
