import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ProductImage, ProductImageSchema } from './image.schema';

@Schema({ collection: 'products', versionKey: false, timestamps: true })
export class Product {
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [ProductImageSchema] })
  images: ProductImage[];

  @Prop({ default: 5 })
  rating: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  category: string;

  @Prop({ default: 1 })
  countInStock: number;

  createdAt: string;
  updatedAt: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
