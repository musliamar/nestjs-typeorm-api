export class CreateCarDto {
  id: number;
  chassisNumber: string;
  manufacturer: string;
  model: string;
  typeOfCar: string;
  typeOfFuel: string;
  yearOfProduction: number;
  mileage: number;
  firstRegistrationDate: Date;
}
