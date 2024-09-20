import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMeasurementDto {
  @IsString()
  @ApiProperty({
    example: '123456',
    description: 'User`s telegram id',
  })
  telegramId: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 45 })
  weight: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 90 })
  chest: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 60 })
  waist: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 90 })
  hips: number;
}
