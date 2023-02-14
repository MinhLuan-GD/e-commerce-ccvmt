import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Cart, CartSchema } from './cart.schema';

export enum OrderStatus {
  CREATED = 'created',
  CANCELLED = 'cancelled',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Schema({ collection: 'orders', versionKey: false, timestamps: true })
export class Order {
  _id: Types.ObjectId;

  @Prop({ required: true })
  userId: string;

  @Prop({ enum: OrderStatus, default: OrderStatus.CREATED })
  status: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Date })
  expiresAt: string;

  @Prop({ required: true, type: [CartSchema] })
  cart: Cart[];

  @Prop({ required: true })
  shippingAddress: string;

  @Prop({ default: 'stripe' })
  paymentMethod: string;

  @Prop({ default: 0.0 })
  itemsPrice: number;

  @Prop({ default: 0.0 })
  shippingPrice: number;

  @Prop({ default: 0.0 })
  totalPrice: number;

  @Prop({ default: false })
  isDelivered: boolean;

  @Prop({ type: mongoose.Schema.Types.Date })
  deliveredAt?: string;

  createdAt: string;
  updatedAt: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
