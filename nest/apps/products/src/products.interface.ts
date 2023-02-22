import { Product } from './schemas/product.schema';

export interface IProductsService {
  createProduct(product: any): Product;
  getProducts(): Product[];
  getProduct(productId: string): Product;
  updateProduct(productId: string, product: any): Product;
  modifyProduct(productId: string, product: Partial<any>): Product;
}
