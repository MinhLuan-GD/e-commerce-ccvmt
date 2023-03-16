import { Product } from "@/models/product";
import api from ".";

const getProduct = (id: string) => api.get<Product>(`/products/${id}`);
const getProducts = () => api.get<Product[]>("/products");
const getNewProducts = () => api.get<Product[]>("/products/new-products");
const getTopProducts = () => api.get<Product[]>("/products/top-products");

export { getProducts, getNewProducts, getTopProducts, getProduct };
