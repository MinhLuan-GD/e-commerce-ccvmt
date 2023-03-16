import { Services } from '@app/common/constants';
import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateOrderDto } from './dtos/create-order.dto';
import { IOrdersService } from './orders.interface';
import { OrdersRepository } from './orders.repository';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrdersService implements IOrdersService {
  constructor(
    private readonly ordersRepo: OrdersRepository,
    @Inject(Services.PRODUCTS) private productClient: ClientProxy,
  ) {}

  async createOrder(order: CreateOrderDto): Promise<Order> {
    const shippingPrice = 0.0;
    const itemsPrice = order.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const totalPrice = itemsPrice + shippingPrice;

    for (let i = 0; i < order.cart.length; i++) {
      const item = order.cart[i];
      const { data } = await lastValueFrom(
        this.productClient.send('update-product-stock', {
          id: item.productId,
          quantity: item.quantity,
        }),
      );
      if (!data) {
        throw new BadRequestException('Product not enough stock');
      }
    }

    return this.ordersRepo.create({
      ...order,
      shippingPrice,
      itemsPrice,
      totalPrice,
    });
  }

  async getOrders(): Promise<Order[]> {
    return this.ordersRepo.find({});
  }

  async getOrderById(id: string): Promise<Order> {
    return this.ordersRepo.getOne({ _id: id });
  }

  async updateOrder(id: string, order: Order): Promise<Order> {
    return this.ordersRepo.updateOne({ _id: id }, order);
  }

  async deleteOrder(id: string): Promise<void> {
    this.ordersRepo.deleteOne({ _id: id });
  }
}
