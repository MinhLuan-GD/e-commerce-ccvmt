import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Cart {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreateOrderDro {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Cart)
  cart: Cart[];

  @IsString()
  @IsNotEmpty()
  shippingAddress: string;
}
