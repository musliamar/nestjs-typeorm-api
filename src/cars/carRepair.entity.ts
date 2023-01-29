import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
