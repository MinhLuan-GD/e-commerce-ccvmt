import { AbstractRepository } from '@app/common';
import { Models } from '@app/common/constants';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoriesRepository extends AbstractRepository<Category> {
  protected readonly logger = new Logger(CategoriesRepository.name);

  constructor(
    @InjectModel(Models.CATEGORY) categoryModel: Model<Category>,
    @InjectConnection() connection: Connection,
  ) {
    super(categoryModel, connection);
  }
}
