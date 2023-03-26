import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from './schemas/category.schema';

export interface ICategoriesService {
  createCategory(category: CreateCategoryDto): Promise<Category>;
  getCategories(query: any, limit?: number): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category>;
  updateCategory(id: string, category: Category): Promise<Category | null>;
  deleteCategory(id: string): Promise<void>;
}
