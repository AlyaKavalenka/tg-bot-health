import { Measurement } from '@prisma/client';

export class User {
  id: string;
  telegramId: string;
  measurements: Measurement[];
}
