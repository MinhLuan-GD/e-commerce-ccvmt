import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ collection: 'categories', versionKey: false, timestamps: true })
export class Category {
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  createdAt: string;
  updatedAt: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
