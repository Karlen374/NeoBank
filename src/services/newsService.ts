import { INews } from '../types/INews';
import { useHttp } from '../hooks/useHttp';

const useNewsServices = () => {
  const _apiBase = 'https://newsapi.org/v2/top-headlines?country=us&category=business';
  const _apiKey = '85a8a5f6d8314c139f997a018ccd7965';
  const { request } = useHttp();

  const getNews = async () => {
    const res = await request(`${_apiBase}&apiKey=${_apiKey}`);
    return (res.articles.filter((item:INews) => {
      if (item.description && item.urlToImage) {
        return {
          urlToImage: item.urlToImage,
          title: item.title,
          url: item.url,
          description: item.description,
        };
      }
    }));
  };

  return {
    getNews,
  };
};

export default useNewsServices;
