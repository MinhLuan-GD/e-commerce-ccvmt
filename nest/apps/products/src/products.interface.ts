import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './schemas/product.schema';

export interface IProductsService {
  createProduct(dto: CreateProductDto): Promise<Product>;
  getProducts(filter: any): Promise<Product[]>;
  getNewProducts(): Promise<Product[]>;
  getTopProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product>;
  updateProduct(id: string, dto: any): Promise<Product>;
  modifyProduct(id: string, dto: Partial<any>): Promise<Product>;
  updateProductStock(id: string, quantity: number): Promise<boolean>;
}
