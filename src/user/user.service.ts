import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  async findUserByTelegramId(telegramId: string) {
    const user = await this.repository.findUserByTelegramId(telegramId);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
