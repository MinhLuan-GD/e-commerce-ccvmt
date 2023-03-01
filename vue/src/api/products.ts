import { Product } from "@/utils/types";
import api from ".";

const getProducts = () => api.get<Product[]>("/products");
const getNewProducts = () => api.get<Product[]>("/products/new-products");

export { getProducts, getNewProducts };
