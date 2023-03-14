import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { IProductsService } from './products.interface';
import { ProductsRepository } from './products.repository';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService implements IProductsService {
  constructor(private readonly productRepo: ProductsRepository) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepo.create(createProductDto);
  }

  async getProducts(filter: any): Promise<Product[]> {
    return this.productRepo.find(filter);
  }

  async getNewProducts(): Promise<Product[]> {
    return this.productRepo.find({}, '', 8, { createdAt: -1 });
  }

  async getTopProducts(): Promise<Product[]> {
    return this.productRepo.find({}, '', 8, { rating: -1 });
  }

  async getProduct(id: string): Promise<Product> {
    return this.productRepo.getOne({ _id: id });
  }

  updateProduct(id: string, dto: any): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  modifyProduct(id: string, dto: Partial<any>): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
