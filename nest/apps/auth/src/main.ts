import { RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get(RmqService);
  app.connectMicroservice(rmqService.getOptions('auth', true));
  app.enableVersioning();
  app.enableCors({ origin: process.env.ORIGIN.split(' '), credentials: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
