import { RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const rmqService = app.get(RmqService);
  app.connectMicroservice(rmqService.getOptions('orders', true));
  app.enableVersioning();
  app.enableCors({ origin: '*', credentials: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
