import { useHttp } from '../hooks/useHttp';

const useExchangeServices = () => {
  const _apiBase = 'https://currency-exchange.p.rapidapi.com/exchange';
  const { request } = useHttp();

  const getExchangeValue = async (from:string, to:string, query = 1.0) => {
    const headers = {
      'X-RapidAPI-Key': '74ced9f0e7msh85770ce19fef9a3p17d0e6jsn3926b9226038',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
    };
    const res = await request(`${_apiBase}?from=${from}&to=${to}&q=${query}`, 'GET', null, headers);
    return res;
  };
  return {
    getExchangeValue,
  };
};

export default useExchangeServices;
