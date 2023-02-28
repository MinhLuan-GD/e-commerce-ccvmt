import { RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  const rmqService = app.get(RmqService);
  app.connectMicroservice(rmqService.getOptions('products', true));
  app.enableVersioning();
  app.enableCors({ origin: process.env.ORIGIN.split(' '), credentials: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
}
bootstrap();
