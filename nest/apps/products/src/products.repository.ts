import { AbstractRepository } from '@app/common';
import { Models } from '@app/common/constants';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsRepository extends AbstractRepository<Product> {
  protected readonly logger = new Logger(ProductsRepository.name);

  constructor(
    @InjectModel(Models.PRODUCT) productModel: Model<Product>,
    @InjectConnection() connection: Connection,
  ) {
    super(productModel, connection);
  }
}
