import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, _id: false })
export class ProductImage {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ default: true })
  isMain: boolean;
}

export const ProductImageSchema = SchemaFactory.createForClass(ProductImage);
