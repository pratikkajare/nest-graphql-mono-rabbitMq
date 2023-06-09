import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { OrderEntity } from '../entities/order.entity';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: string;
}

export const OrderSchema = SchemaFactory.createForClass(OrderEntity);
