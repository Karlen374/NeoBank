import { useHttp } from '@utils';

export const useMailServices = () => {
  const _apiBase = 'http://localhost:8080';
  const { request } = useHttp();

  const postEmail = async (email:string) => {
    const body = JSON.stringify({ email });
    const res = await request(`${_apiBase}/email`, 'POST', body, { 'Content-Type': 'application/json' }, true);
    return res;
  };
  return {
    postEmail,
  };
};
