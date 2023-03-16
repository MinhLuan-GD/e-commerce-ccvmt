export class ProductImage {
  imageUrl: string;
  isMain: boolean;

  constructor(imageUrl = "", isMain = false) {
    this.imageUrl = imageUrl;
    this.isMain = isMain;
  }
}
