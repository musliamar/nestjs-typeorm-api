import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  findOne(id: number): Promise<Car> {
    return this.carsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.carsRepository.delete(id);
  }
}
