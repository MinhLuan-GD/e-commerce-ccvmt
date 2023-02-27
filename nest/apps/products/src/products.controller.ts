import { Routes, Services } from '@app/common/constants';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { IProductsService } from './products.interface';

@Controller(Routes.PRODUCTS)
export class ProductsController {
  constructor(
    @Inject(Services.PRODUCTS)
    private readonly productsService: IProductsService,
  ) {}

  @Post()
  createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @Get()
  getProducts(@Query() query: any) {
    return this.productsService.getProducts(query);
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }
}
