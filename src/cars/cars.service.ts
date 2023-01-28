import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  create(createCarDto: CreateCarDto): Promise<Car> {
    const car = new Car();

    car.chassisNumber = createCarDto.chassisNumber;
    car.manufacturer = createCarDto.manufacturer;
    car.model = createCarDto.model;
    car.typeOfCar = createCarDto.typeOfCar;
    car.typeOfFuel = createCarDto.typeOfFuel;
    car.yearOfProduction = createCarDto.yearOfProduction;
    car.mileage = createCarDto.mileage;
    car.firstRegistrationDate = createCarDto.firstRegistrationDate;

    return this.carsRepository.save(car);
  }

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
