import React from 'react';
import {
  ExchangeValuesSection,
  CardChooseSection,
  NewsSection,
  SupportSection,
} from '@components';

const MainPage = () => {
  return (
    <main>
      <CardChooseSection />
      <ExchangeValuesSection />
      <NewsSection />
      <SupportSection />
    </main>
  );
};
export default MainPage;
