import { Injectable } from '@nestjs/common';
import { IProductsService } from './products.interface';
import { ProductsRepository } from './products.repository';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService implements IProductsService {
  constructor(private readonly productRepo: ProductsRepository) {}

  createProduct(product: any): Product {
    throw new Error('Method not implemented.');
  }

  getProducts(): Product[] {
    throw new Error('Method not implemented.');
  }

  getProduct(productId: string): Product {
    throw new Error('Method not implemented.');
  }

  updateProduct(productId: string, product: any): Product {
    throw new Error('Method not implemented.');
  }

  modifyProduct(productId: string, product: Partial<any>): Product {
    throw new Error('Method not implemented.');
  }
}
