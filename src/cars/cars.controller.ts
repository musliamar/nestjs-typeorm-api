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
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Car> {
    return this.carsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.carsService.remove(id);
  }
}
