import { Routes, Services } from '@app/common/constants';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ICategoriesService } from './categories.interface';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller(Routes.CATEGORIES)
export class CategoriesController {
  constructor(
    @Inject(Services.CATEGORIES)
    private readonly categoriesService: ICategoriesService,
  ) {}

  @Get()
  find(@Query() param: any) {
    const { limit, ...query } = param;
    return this.categoriesService.getCategories(query, parseInt(limit));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
