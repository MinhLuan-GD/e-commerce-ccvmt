import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './schemas/product.schema';

export interface IProductsService {
  createProduct(dto: CreateProductDto): Promise<Product>;
  getProducts(filter: any): Promise<Product[]>;
  getProduct(id: string): Promise<Product>;
  updateProduct(id: string, dto: any): Promise<Product>;
  modifyProduct(id: string, dto: Partial<any>): Promise<Product>;
}
