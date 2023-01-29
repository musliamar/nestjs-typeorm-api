export class CreateRentalDto {
  details: string;
  costPerDay: number;
  mileageAtEnd: number;
  mileageAtBeginning: number;
  isActive: boolean;
  toDate: Date;
  fromDate: Date;
}
