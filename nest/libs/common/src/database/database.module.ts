import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (conf: ConfigService) => ({
        uri: `mongodb://${conf.get('MONGO_HOST')}:27017`,
        dbName: conf.get('MONGO_DB'),
        auth: {
          username: conf.get('MONGO_USER'),
          password: conf.get('MONGO_PASS'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
