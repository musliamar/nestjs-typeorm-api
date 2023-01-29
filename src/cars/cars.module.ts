import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from './car.entity';
import { Rental } from './carRental.entity';
import { Repair } from './carRepair.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Repair, Rental])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
