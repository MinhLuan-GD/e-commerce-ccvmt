import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './dtos/create-order.dto';

export interface IOrdersService {
  createOrder(order: CreateOrderDto): Promise<Order>;
  getOrders(): Promise<Order[]>;
  getOrderById(id: string): Promise<Order>;
  updateOrder(id: string, order: Order): Promise<Order>;
  deleteOrder(id: string): Promise<void>;
}
