import { Injectable } from '@nestjs/common';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { MeasurementRepository } from './measurement.repository';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MeasurementService {
  constructor(
    private readonly repository: MeasurementRepository,
    private readonly userService: UserService,
  ) {}

  async create(createMeasurementDto: CreateMeasurementDto) {
    const { telegramId, ...rest } = createMeasurementDto;
    let user = await this.userService.findUserByTelegramId(telegramId);

    if (!user) user = await this.userService.create({ telegramId });

    return this.repository.create({ ...rest, userId: user.id });
  }
}
