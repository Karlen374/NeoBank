import { IScoringForm, useApplicationServices } from '@utils';

const mockJsonPromise = Promise.resolve(200);
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('postScoringForm', () => {
  const getIdFromLocalStorage = () => {
    const offers = JSON.parse(window.localStorage.getItem('offers'));
    if (offers) return String(offers[0].applicationId);
    else return null;
  };
  test('Корректное значение', async () => {
    const { postScoringFormData } = useApplicationServices();
    const applicationId = getIdFromLocalStorage();
    if (applicationId) {
      const postData:IScoringForm = {
        dependentAmount: 0,
        employerINN: '214222214222',
        employmentStatus: 'EMPLOYED',
        position: 'TOP_MANAGER',
        salary: 200000,
        workExperienceCurrent: 11,
        workExperienceTotal: 23,
        gender: 'MALE',
        maritalStatus: 'SINGLE',
        passportIssueBranch: '214222',
        passportIssueDate: '2023-02-02',
      };
      const res = await postScoringFormData(postData, applicationId);
      expect(res).toEqual(200);// Запрос прошел успещно получили статус код 200
    }
  });
});
