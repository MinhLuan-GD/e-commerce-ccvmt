import { Injectable } from '@nestjs/common';
import { ICategoriesService } from './categories.interface';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoriesService implements ICategoriesService {
  constructor(private readonly categoryRepositories: CategoriesRepository) {}

  async createCategory(category: CreateCategoryDto): Promise<Category> {
    return this.categoryRepositories.create(category);
  }

  async getCategories(query: any, limit?: number): Promise<Category[]> {
    return this.categoryRepositories.find(query, undefined, limit);
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.categoryRepositories.getOne({ _id: id });
  }

  async updateCategory(
    id: string,
    category: Category,
  ): Promise<Category | null> {
    return this.categoryRepositories.updateOne({ _id: id }, category);
  }

  async deleteCategory(id: string): Promise<void> {
    this.categoryRepositories.deleteOne({ _id: id });
  }
}
