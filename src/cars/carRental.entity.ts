import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
