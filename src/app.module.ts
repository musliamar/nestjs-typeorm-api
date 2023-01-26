import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/car.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MARIADB_HOST,
      port: parseInt(process.env.MARIADB_PORT),
      username: process.env.MARIADB_USERNAME,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE,
      entities: [Car],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
