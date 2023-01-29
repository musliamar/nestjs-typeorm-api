import { Car } from '../../cars/car.entity';
import { Rental } from 'src/cars/carRental.entity';
import { Repair } from 'src/cars/carRepair.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

export class InitialData1674910419569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Car, [
      {
        chassisNumber: 'WHGGJK8432534HFKSD',
        manufacturer: 'Ford',
        model: 'Focus',
        typeOfCar: 'Hatchback',
        typeOfFuel: 'Petrol',
        yearOfProduction: 2017,
        mileage: 133337,
        firstRegistrationDate: new Date(2020, 12, 12),
      },
    ]);

    await queryRunner.manager.insert(Rental, [
      {
        details: 'test',
        costPerDay: 200,
        mileageAtEnd: 20000,
        mileageAtBeginning: 1900,
        isActive: true,
        toDate: new Date(2020, 12, 12),
        fromDate: new Date(2020, 12, 12),
      },
    ]);

    await queryRunner.manager.insert(Repair, [
      {
        descOfRepair: 'test2',
        details: 'test2',
        cost: 2002,
        fromDate: new Date(2020, 12, 12),
        toDate: new Date(2020, 12, 12),
      },
    ]);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.clear(Car);
  }
}
