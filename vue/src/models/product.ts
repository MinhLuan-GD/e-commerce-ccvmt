import { ProductImage } from "./product-image";

export class Product {
  _id: string;
  title: string;
  description: string;
  images: ProductImage[];
  rating: number;
  price: number;
  category: string;
  countInStock: number;
  createdAt: string;
  updatedAt: string;

  constructor(
    _id = "",
    title = "",
    description = "",
    images: ProductImage[] = [],
    rating = 0,
    price = 0,
    category = "",
    countInStock = 0,
    createdAt = "",
    updatedAt = ""
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.images = images;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.countInStock = countInStock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
