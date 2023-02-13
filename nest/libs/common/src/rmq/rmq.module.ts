import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

interface RmqModuleOptions {
  name: string;
}

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    const NAME = name.toUpperCase();
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name: `${NAME}_SERVICE`,
            useFactory: (config: ConfigService): any => ({
              transport: Transport.RMQ,
              options: {
                urls: [config.get<string>('RABBIT_MQ_URI')],
                queue: name,
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
