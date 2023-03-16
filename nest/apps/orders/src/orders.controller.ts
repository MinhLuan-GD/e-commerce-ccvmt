import { Routes, Services } from '@app/common/constants';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { IOrdersService } from './orders.interface';

@Controller(Routes.ORDERS)
export class OrdersController {
  constructor(
    @Inject(Services.ORDERS) private readonly ordersService: IOrdersService,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.getOrders();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }
}
