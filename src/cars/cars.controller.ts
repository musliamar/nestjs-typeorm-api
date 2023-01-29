import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { Car } from './car.entity';
import { Rental } from './carRental.entity';
import { Repair } from './carRepair.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { CreateRentalDto } from './dto/create-rental.dto';
import { CreateRepairDto } from './dto/create-repair.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carsService.create(createCarDto);
  }

  @Post('repairs')
  createRepair(@Body() createRepairDto: CreateRepairDto): Promise<Repair> {
    return this.carsService.createRepair(createRepairDto);
  }

  @Post('rentals')
  createRental(@Body() createRentalDto: CreateRentalDto): Promise<Rental> {
    return this.carsService.createRental(createRentalDto);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get('repairs')
  findAllRepairs(): Promise<Repair[]> {
    return this.carsService.findAllRepairs();
  }

  @Get('rentals')
  findAllRentals(): Promise<Rental[]> {
    return this.carsService.findAllRentals();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Car> {
    return this.carsService.findOne(id);
  }

  @Get('repairs/:id')
  findOneRepair(@Param('id', ParseIntPipe) id: number): Promise<Repair> {
    return this.carsService.findOneRepair(id);
  }

  @Get('rentals/:id')
  findOneRental(@Param('id', ParseIntPipe) id: number): Promise<Rental> {
    return this.carsService.findOneRental(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.carsService.remove(id);
  }

  @Delete('repairs/:id')
  removeRepair(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.carsService.removeRepair(id);
  }

  @Delete('rentals/:id')
  removeRental(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.carsService.removeRental(id);
  }
}
