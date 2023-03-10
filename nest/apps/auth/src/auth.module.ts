import { RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_SECRET: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        ORIGIN: Joi.string().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${config.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
    RmqModule,
    RmqModule.register({ name: 'users' }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
