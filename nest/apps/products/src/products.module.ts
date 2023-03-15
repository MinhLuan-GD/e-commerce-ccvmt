import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { Models, Services } from '@app/common/constants';
import { ProductsRepository } from './products.repository';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
        MONGO_DB: Joi.string().required(),
        MONGO_USER: Joi.string().required(),
        MONGO_PASS: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        ORIGIN: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Models.PRODUCT, schema: ProductSchema },
    ]),
    RmqModule,
  ],
  controllers: [ProductsController],
  providers: [
    ProductsRepository,
    {
      provide: Services.PRODUCTS,
      useClass: ProductsService,
    },
  ],
  exports: [
    {
      provide: Services.PRODUCTS,
      useClass: ProductsService,
    },
  ],
})
export class ProductsModule {}
