import { Routes, Services } from '@app/common/constants';
import { Controller, Inject } from '@nestjs/common';
import { IProductsService } from './products.interface';

@Controller({ path: Routes.PRODUCTS })
export class ProductsController {
  constructor(
    @Inject(Services.PRODUCTS)
    private readonly productsService: IProductsService,
  ) {}
}
