export class Cart {
  title: string;
  image: string;
  price: number;
  productId: string;
  quantity: number;

  constructor(title = "", image = "", price = 0, productId = "", quantity = 0) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.productId = productId;
    this.quantity = quantity;
  }
}
