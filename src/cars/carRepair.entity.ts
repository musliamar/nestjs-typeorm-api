import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Repair {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descOfRepair: string;

  @Column()
  details: string;

  @Column()
  cost: number;

  @Column()
  fromDate: Date;

  @Column()
  toDate: Date;

  @ManyToOne(() => Car, (car) => car.repairs)
  car: Car;
}
