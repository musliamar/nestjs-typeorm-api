import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chassisNumber: string;

  @Column()
  manufacturer: string;

  @Column()
  model: string;

  @Column()
  typeOfCar: string;

  @Column()
  typeOfFuel: string;

  @Column()
  yearOfProduction: number;

  @Column()
  mileage: number;

  @Column()
  firstRegistrationDate: Date;
}
