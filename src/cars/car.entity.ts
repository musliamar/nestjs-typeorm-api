import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Rental } from './carRental.entity';
import { Repair } from './carRepair.entity';

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

  @OneToMany(() => Rental, (rental) => rental.car)
  rentals: Rental[];

  @OneToMany(() => Repair, (repair) => repair.car)
  repairs: Repair[];
}
