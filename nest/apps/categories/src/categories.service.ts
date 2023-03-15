import { Injectable } from '@nestjs/common';
import { Order } from 'apps/orders/src/schemas/order.schema';
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

  async getCategories(): Promise<Category[]> {
    return this.categoryRepositories.find({});
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.categoryRepositories.getOne({ _id: id });
  }

  async updateCategory(id: string, category: Category): Promise<Category> {
    return this.categoryRepositories.updateOne({ _id: id }, category);
  }

  async deleteCategory(id: string): Promise<void> {
    this.categoryRepositories.deleteOne({ _id: id });
  }
}
