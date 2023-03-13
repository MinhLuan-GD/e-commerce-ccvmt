/* eslint-disable @typescript-eslint/ban-types */
import { Services } from '@app/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PassportSerializer } from '@nestjs/passport';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(Services.USERS) private readonly usersClient: ClientProxy,
  ) {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await lastValueFrom(
      this.usersClient.send('get-user-by-id', payload._id),
    );
    return user ? done(null, user) : done(null, null);
  }
}
