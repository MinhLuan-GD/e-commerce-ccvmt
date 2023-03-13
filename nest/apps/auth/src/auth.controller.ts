import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { Routes } from '@app/common/constants';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: any,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate-user')
  @Get('current-user')
  async validateUser(@CurrentUser() user: any) {
    return user;
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    return 'Google Oauth';
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(
    @Res({ passthrough: true }) response: Response,
    @CurrentUser() user: any,
  ) {
    // FIXME: replace base url
    await this.authService.login(user, response);
    response.redirect(`http://localhost:8080/login/success`);
  }

  @Get('logout')
  logout(@Res() res: Response) {
    // FIXME: replace base url
    this.authService.logout(res);
    return res.redirect(`http://localhost:8080/login`);
  }
}
