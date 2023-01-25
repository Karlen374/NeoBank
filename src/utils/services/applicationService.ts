import {
  useHttp,
  ICardCustomizeForm,
  IOffer,
  IScoringForm,
  transformScoringData,
} from '@utils';

export const useApplicationServices = () => {
  const _apiBase = 'http://localhost:8080';
  const { request } = useHttp();

  const postPrescoringFormData = async (formData:ICardCustomizeForm) => {
    const body = JSON.stringify({ ...formData, term: Number(formData.term), middleName: formData.middleName ? formData.middleName : null });
    const res = await request(`${_apiBase}/application`, 'POST', body, { 'Content-Type': 'application/json' });
    return res;
  };
  const postChooseOffer = async (offer: IOffer) => {
    const body = JSON.stringify(offer);
    const res = await request(`${_apiBase}/application/apply`, 'POST', body, { 'Content-Type': 'application/json' }, true);
    return res;
  };
  const getOfferStatus = async (applicationId: string) => {
    const res = await request(`${_apiBase}/admin/application/${applicationId}`, 'GET', null, { 'Content-Type': 'application/json' });
    return res;
  };
  const postScoringFormData = async (formData:IScoringForm, applicationId:string) => {
    const body = JSON.stringify(transformScoringData(formData));
    const res = await request(
      `${_apiBase}/application/registration/${applicationId}`,
      'PUT',
      body,
      { 'Content-Type': 'application/json' },
      true,
    );
    return res;
  };

  const postUserPermission = async (applicationId: string) => {
    const res = await request(`${_apiBase}/document/${applicationId}`, 'POST', null, { 'Content-Type': 'application/json' }, true);
    return res;
  };

  const postUserSign = async (applicationId: string) => {
    const res = await request(`${_apiBase}/document/${applicationId}/sign`, 'POST', null, { 'Content-Type': 'application/json' }, true);
    return res;
  };

  const postSignCode = async (applicationId: string, code: string) => {
    const res = await request(
      `${_apiBase}/document/${applicationId}/sign/code`,
      'POST',
      code,
      { 'Content-Type': 'application/json' },
      true,
    );
    return res;
  };
  return {
    postPrescoringFormData,
    postChooseOffer,
    getOfferStatus,
    postScoringFormData,
    postUserPermission,
    postUserSign,
    postSignCode,
  };
};
