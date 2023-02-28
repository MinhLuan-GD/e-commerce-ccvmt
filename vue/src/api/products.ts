import { Product } from "@/utils/types";
import api from ".";

const getProducts = () => api.get<Product[]>("/products");

export { getProducts };
