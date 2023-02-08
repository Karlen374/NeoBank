export const useHttp = () => {
  const request = async (
    url:string,
    method = 'GET',
    body:string | null = null,
    headers:{ 'Content-Type': 'application/json' } | {
      'X-RapidAPI-Key': string,
      'X-RapidAPI-Host': string,
    }
    = null,
    status = false,
  ) => {
    try {
      if (status) {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error('error');
          // throw new Error(`Could not fetch ${url} status: ${response.status}`);
          // console.log(`Could not fetch ${url} status: ${response.status}`);// для тестирования
        }
        return 200;// запрос прошел успешно
      } else {
        const options = (body || headers) ? { method, body, headers } : { method };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('error');
          // throw new Error(`Could not fetch ${url} status: ${response.status}`);
          // console.log(`Could not fetch ${url} status: ${response.status}`);// для тестирования
        }
        const data = await response.json();
        return data;
      }
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
