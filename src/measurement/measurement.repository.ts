import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class MeasurementRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.MeasurementCreateManyInput) {
    return this.prisma.measurement.create({ data });
  }
}
