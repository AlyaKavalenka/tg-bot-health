import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: dto,
      include: { measurements: true },
    });
  }

  async findUserByTelegramId(telegramId: string) {
    return this.prisma.user.findUnique({
      where: { telegramId },
      include: {
        measurements: {
          orderBy: [{ createdAt: 'asc' }],
        },
      },
    });
  }
}
