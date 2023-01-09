import React from 'react';
import './newsSection.scss';
import { INews } from '@utils';

interface INewsItem{
  data:INews;
}
const NewsItem = ({ data }:INewsItem) => {
  return (
    <div className="news-section__item">
      <img src={data.urlToImage} alt="news img" />
      <h3>{data.title}</h3>
      <p><a href={data.url} target="_blank" rel="noreferrer">{data.description}</a></p>
    </div>
  );
};
export default NewsItem;
