import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/car.entity';
import { Rental } from './cars/carRental.entity';
import { Repair } from './cars/carRepair.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MARIADB_HOST,
      port: parseInt(process.env.MARIADB_PORT),
      username: process.env.MARIADB_USERNAME,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE,
      entities: [Car, Rental, Repair],
      synchronize: true,
    }),
    CarsModule,
  ],
})
export class AppModule {}
