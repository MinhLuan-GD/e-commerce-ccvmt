import { Product } from "./product";

export class CartItem {
  product: Product;
  quantity: number;

  constructor(product = new Product(), quantity = 0) {
    this.product = product;
    this.quantity = quantity;
  }
}
