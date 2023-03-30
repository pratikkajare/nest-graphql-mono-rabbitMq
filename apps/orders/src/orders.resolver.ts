import { OrdersService } from './orders.service';
import { OrderEntity } from './entities/order.entity';
import { UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '@app/common/auth/jwt-auth.guard';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/create-order-input';

@Resolver(() => OrderEntity)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}
  // @UseGuards(JwtAuthGuard)
  // @MessagePattern('notifications')
  @Mutation(() => OrderEntity)
  createOrder(
    @Args('request') request: CreateOrderInput,
    @Context() context: { req: Request },
  ) {
    console.log('Inside Orders', context.req.headers?.authorization);
    console.log('request', request);
    return this.ordersService.createOrder(
      request,
      context.req.headers?.authorization,
    );
  }
  @Query(() => [OrderEntity], { name: 'orders' })
  getOrders() {
    return this.ordersService.getOrders();
  }
}
