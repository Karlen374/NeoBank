import { useHttp, ICardCustomizeForm } from '@utils';

export const useApplicationServices = () => {
  const _apiBase = 'http://localhost:8080';
  const { request } = useHttp();

  const postFormData = async (formData:ICardCustomizeForm) => {
    const body = JSON.stringify({ ...formData, term: +formData.term });
    const res = await request(`${_apiBase}/application`, 'POST', body, { 'Content-Type': 'application/json' });
    return res;
  };
  return {
    postFormData,
  };
};
