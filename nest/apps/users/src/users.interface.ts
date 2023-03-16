import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './schemas/user.schema';

export interface IUsersService {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  getUsers(): Promise<User[]>;
  getUser(userId: string): Promise<User>;
  validateUser(email: string, password: string): any;
  upsertUser(email: string): Promise<User>;
  findUser(param: Partial<User>): any;
}
