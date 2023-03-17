import { Category } from "@/models/category";
import api from ".";

const get3Cate = () => api.get<Category>("categories/?limit=3");

export { get3Cate };
