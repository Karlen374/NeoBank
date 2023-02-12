import { useApplicationServices } from '@utils';

const mockJsonPromise = Promise.resolve(
  [{
    applicationId: 110,
    isInsuranceEnabled: false,
    isSalaryClient: false,
    monthlyPayment: 935.77,
    rate: 15,
    requestedAmount: 15000,
    term: 18,
    totalAmount: 15000,
  }],
);
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('postPrescoringForm', () => {
  test('Корректное значение', async () => {
    const { postPrescoringFormData } = useApplicationServices();
    const res = await postPrescoringFormData({
      amount: 15000,
      birthdate: new Date(1990),
      email: 'svaryan01@inbox.ru',
      firstName: 'Karlen',
      lastName: 'Svarian',
      middleName: 'adadsfad',
      passportNumber: '121242',
      passportSeries: '3232',
      term: '18',
    });
    expect(res).toEqual([{
      applicationId: 110,
      isInsuranceEnabled: false,
      isSalaryClient: false,
      monthlyPayment: 935.77,
      rate: 15,
      requestedAmount: 15000,
      term: 18,
      totalAmount: 15000,
    }]);
  });
});
