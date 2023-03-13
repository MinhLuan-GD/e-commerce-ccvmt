import { Injectable } from '@nestjs/common';
import { CreateOrderDro } from './dtos/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepo: OrdersRepository) {}

  create(createOrderDto: CreateOrderDro) {
    const shippingPrice = 0.0;
    const itemsPrice = createOrderDto.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const totalPrice = itemsPrice + shippingPrice;
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 30);
    return this.ordersRepo.create({
      ...createOrderDto,
      shippingPrice,
      itemsPrice,
      totalPrice,
      expiresAt: JSON.stringify(expiresAt),
    });
  }

  findAll() {
    return this.ordersRepo.find({});
  }

  findOne(id: string) {
    return this.ordersRepo.getOne({ _id: id });
  }
}
