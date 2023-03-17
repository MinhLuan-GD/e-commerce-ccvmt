import { Cart } from "./cart";

export class Order {
  userId: string;
  cart: Cart[];
  shippingAddress: string;

  constructor(userId = "", cart: Cart[] = [], shippingAddress = "") {
    this.userId = userId;
    this.cart = cart;
    this.shippingAddress = shippingAddress;
  }
}
