export interface ICardCustomizeForm {
  amount: number,
  term: string,
  firstName: string,
  lastName: string,
  middleName: string | null,
  email: string,
  birthdate: Date,
  passportSeries: string,
  passportNumber: string
}
