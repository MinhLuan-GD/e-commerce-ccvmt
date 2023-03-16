import { Services } from '@app/common/constants';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(Services.USERS) private readonly usersClient: ClientProxy,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await lastValueFrom(
      this.usersClient.send('validate-user', {
        email,
        password,
      }),
    );
    if (user) return user;
    throw new UnauthorizedException();
  }
}
