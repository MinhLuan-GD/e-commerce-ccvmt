/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConflictException, Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcrypt';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepo.findOne({
      email: createUserDto.email,
    });

    if (findUser) throw new ConflictException('email already exist');

    const password = hashSync(createUserDto.password, 10);
    return this.usersRepo.create({
      ...createUserDto,
      password,
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersRepo.findOne({ email });
    if (!user) return null;
    const { password: hashPass, ...rs } = user;
    return compareSync(password, hashPass) ? rs : null;
  }

  async upsertUser(email: string) {
    return this.usersRepo.upsert({ email }, {}, '-password');
  }

  async findUser(param: Partial<User>) {
    return this.usersRepo.findOne(param, '-password');
  }

  async getUser(userId: string) {
    return this.usersRepo.getOne({ _id: userId }, '-password');
  }

  async getUsers() {
    const user = await this.usersRepo.find({}, '-password');
    return user;
  }

  // async updateUser(userId: string, updateUserDetails: UpdateUserDetails) {}

  // async deleteUser() {}
}
