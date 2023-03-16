import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schemas/category.schema';
import { Models, Services } from '@app/common/constants';
import * as Joi from 'joi';
import { CategoriesRepository } from './categories.repository';

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
      { name: Models.CATEGORY, schema: CategorySchema },
    ]),
    RmqModule,
  ],
  controllers: [CategoriesController],
  providers: [
    {
      provide: Services.CATEGORIES,
      useClass: CategoriesService,
    },
    CategoriesRepository,
  ],
  exports: [
    {
      provide: Services.CATEGORIES,
      useClass: CategoriesService,
    },
  ],
})
export class CategoriesModule {}
