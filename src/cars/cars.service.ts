import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { Rental } from './carRental.entity';
import { Repair } from './carRepair.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { CreateRentalDto } from './dto/create-rental.dto';
import { CreateRepairDto } from './dto/create-repair.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    @InjectRepository(Rental)
    private rentalsRepository: Repository<Rental>,
    @InjectRepository(Repair)
    private repairsRepository: Repository<Repair>,
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

  createRental(createRentalDto: CreateRentalDto): Promise<Rental> {
    const rental = new Rental();

    rental.details = createRentalDto.details;
    rental.costPerDay = createRentalDto.costPerDay;
    rental.mileageAtEnd = createRentalDto.mileageAtEnd;
    rental.mileageAtBeginning = createRentalDto.mileageAtBeginning;
    rental.isActive = createRentalDto.isActive;
    rental.toDate = createRentalDto.toDate;
    rental.fromDate = createRentalDto.fromDate;

    return this.rentalsRepository.save(rental);
  }

  createRepair(createRepairDto: CreateRepairDto): Promise<Repair> {
    const repair = new Repair();

    repair.descOfRepair = createRepairDto.descOfRepair;
    repair.details = createRepairDto.details;
    repair.cost = createRepairDto.cost;
    repair.fromDate = createRepairDto.fromDate;
    repair.toDate = createRepairDto.toDate;

    return this.repairsRepository.save(repair);
  }

  findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  findAllRentals(): Promise<Rental[]> {
    return this.rentalsRepository.find();
  }

  findAllRepairs(): Promise<Repair[]> {
    return this.repairsRepository.find();
  }

  findOne(id: number): Promise<Car> {
    return this.carsRepository.findOneBy({ id });
  }

  findOneRental(id: number): Promise<Rental> {
    return this.rentalsRepository.findOneBy({ id });
  }

  findOneRepair(id: number): Promise<Repair> {
    return this.repairsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.carsRepository.delete(id);
  }

  async removeRental(id: number): Promise<void> {
    await this.rentalsRepository.delete(id);
  }

  async removeRepair(id: number): Promise<void> {
    await this.repairsRepository.delete(id);
  }
}
