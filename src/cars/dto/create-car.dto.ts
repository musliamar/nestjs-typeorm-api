export class CreateCarDto {
  chassisNumber: string;
  manufacturer: string;
  model: string;
  typeOfCar: string;
  typeOfFuel: string;
  yearOfProduction: number;
  mileage: number;
  firstRegistrationDate: Date;
}
