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
import { MessagePattern } from '@nestjs/microservices';
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

  @Get('new-products')
  getNewProducts() {
    return this.productsService.getNewProducts();
  }

  @Get('top-products')
  getTopProducts() {
    return this.productsService.getTopProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @MessagePattern('update-product-stock')
  updateProductStock(data: any) {
    return this.productsService.updateProductStock(data.id, data.quantity);
  }
}
