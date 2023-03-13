import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, Observable, tap } from 'rxjs';
import { Services } from '../constants';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject(Services.AUTH) private authClient: ClientProxy,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context);
    const role = this.reflector.get<string>('role', context.getHandler());
    return this.authClient
      .send('validate-user', {
        Authentication: authentication,
      })
      .pipe(
        tap((res) => {
          if (role === 'admin' && !res.isAdmin)
            throw new UnauthorizedException();
          this.addUser(res, context);
        }),
        catchError((err) => {
          console.log(err);
          throw new UnauthorizedException();
        }),
      );
  }

  private getAuthentication(context: ExecutionContext) {
    let authentication = '';
    if (context.getType() === 'rpc') {
      authentication = context.switchToRpc().getData().Authentication;
    } else if (context.getType() === 'http') {
      authentication = context
        .switchToHttp()
        .getRequest()
        .headers.cookie?.split('Authentication=')[1];
    }
    if (!authentication) {
      throw new UnauthorizedException(
        'No value was provided for Authentication',
      );
    }
    return authentication;
  }

  private addUser(user: any, context: ExecutionContext) {
    if (context.getType() === 'rpc') {
      context.switchToRpc().getData().user = user;
    } else if (context.getType() === 'http') {
      context.switchToHttp().getRequest().user = user;
    }
  }
}
