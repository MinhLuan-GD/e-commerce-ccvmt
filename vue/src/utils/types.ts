interface ProductImage {
  imageUrl: string;
  isMain: boolean;
}

interface Product {
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
}

interface State {
  products: Product[];
  newProducts: Product[];
  topProducts: Product[];
}

export { ProductImage, Product, State };
