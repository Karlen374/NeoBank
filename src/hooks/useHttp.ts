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
  ) => {
    try {
      const options = (body || headers) ? { method, body, headers } : { method };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url} status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};