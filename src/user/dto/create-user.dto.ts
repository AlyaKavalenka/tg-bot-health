import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  telegramId: string;
}
