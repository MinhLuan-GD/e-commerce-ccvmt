import { RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const rmqService = app.get(RmqService);
  app.connectMicroservice(rmqService.getOptions('users', true));
  app.enableVersioning();
  app.enableCors({
    origin: process.env.ORIGIN?.split(' ') ?? '*',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
