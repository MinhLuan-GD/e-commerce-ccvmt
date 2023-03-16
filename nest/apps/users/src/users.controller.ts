import { Routes, Services } from '@app/common/constants';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUsersService } from './users.interface';

@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly usersService: IUsersService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':userId')
  async getUser(@Param('userId') userId: string) {
    return this.usersService.getUser(userId);
  }

  @MessagePattern('validate-user')
  async validateUser(user: any) {
    return this.usersService.validateUser(user.email, user.password);
  }

  @MessagePattern('upsert-user')
  async upsertUser(email: string) {
    return this.usersService.upsertUser(email);
  }

  @MessagePattern('get-user-by-email')
  async getUserByEmail(email: string) {
    return this.usersService.findUser({ email });
  }

  @MessagePattern('get-user-by-id')
  async getUserById(userId: any) {
    return this.usersService.findUser({ _id: userId });
  }
}
