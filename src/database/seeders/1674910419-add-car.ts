import { Car } from '../../cars/car.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAndImportCars1674910419569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'car',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'chassisNumber',
            type: 'varchar',
          },
          {
            name: 'manufacturer',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'typeOfCar',
            type: 'varchar',
          },
          {
            name: 'typeOfFuel',
            type: 'varchar',
          },
          {
            name: 'yearOfProduction',
            type: 'int',
          },
          {
            name: 'mileage',
            type: 'int',
          },
          {
            name: 'firstRegistrationDate',
            type: 'datetime',
          },
        ],
      }),
    );

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
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.clear(Car);
  }
}
