import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementController } from './measurement.controller';
import { MeasurementRepository } from './measurement.repository';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [MeasurementController],
  providers: [MeasurementService, MeasurementRepository, PrismaService],
})
export class MeasurementModule {}
