export interface ICardCustomizeForm {
  amount: number,
  term: 6 | 12 | 18 |24,
  firstName: string,
  lastName: string,
  middleName: string | null,
  email: string,
  birthdate: Date,
  passportSeries: string,
  passportNumber: string
}
