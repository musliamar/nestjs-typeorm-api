import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  details: string;

  @Column()
  costPerDay: number;

  @Column()
  mileageAtEnd: number;

  @Column()
  mileageAtBeginning: number;

  @Column()
  isActive: boolean;

  @Column()
  toDate: Date;

  @Column()
  fromDate: Date;

  @ManyToOne(() => Car, (car) => car.rentals)
  car: Car;
}
