import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../auth.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          if (request.Authentication) return request.Authentication;
          return request.headers.cookie?.split('Authentication=')[1];
        },
      ]),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate({ userId }: TokenPayload) {
    const user = await lastValueFrom(
      this.usersClient.send('get-user-by-id', userId),
    );
    if (user) return user;
    throw new UnauthorizedException();
  }
}
