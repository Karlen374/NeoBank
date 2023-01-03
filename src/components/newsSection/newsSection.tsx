import React, { useEffect, useState } from 'react';
import { INews } from '../../types/INews';
import NewsItem from './newsItem';
import useNewsServices from '../../services/newsService';
import './newsSection.scss';

const NewsSection = () => {
  const { getNews } = useNewsServices();
  const [news, setNews] = useState<null | INews[]>();
  const [viewNewsStart, setViewNewsStart] = useState(0);

  const getNextNews = () => {
    if (news.length - 3 !== viewNewsStart) {
      setViewNewsStart(viewNewsStart + 1);
    }
  };
  const getPrevNews = () => {
    if (viewNewsStart > 0) {
      setViewNewsStart(viewNewsStart - 1);
    }
  };
  const getAllNews = async () => {
    const data = await getNews();
    setNews(data);
  };
  useEffect(() => {
    getAllNews();
  }, []);
  const nextButtonStyle = viewNewsStart + 3 < news?.length
    ? 'news-section__next news-section__next_active'
    : 'news-section__next news-section__next_disabled';

  const prevButtonStyle = viewNewsStart > 0
    ? 'news-section__prev news-section__prev_active'
    : 'news-section__prev news-section__prev_disabled';
  return (
    <section className="news-section wrapper">
      <h1>Current news from the world of finance</h1>
      <p>We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.</p>
      <div className="news-section__newsList">
        {news?.slice(viewNewsStart, viewNewsStart + 3).map((item) => <NewsItem key={item.url} data={item} />)}
      </div>
      <div className="news-section__navigation">
        <button onClick={getPrevNews} type="button" className={prevButtonStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109
              1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
              stroke="#222222"
            />
          </svg>
        </button>
        <button onClick={getNextNews} type="button" className={nextButtonStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655
              9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
              stroke="#222222"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default NewsSection;
