import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BillingService } from './billing.service';
import { BillingEntity } from './entities/billing.entity';
import { RmqService } from '@app/common/rmq/rmq.service';
import { JwtAuthGuard } from '@app/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';

@Resolver(() => BillingEntity)
export class BillingResolver {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @Query(() => String)
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(data);
    console.log('resolver billing');
    this.billingService.bill(data);
    this.rmqService.ack(context);
  }
}
