import React from 'react';
import ExchangeValuesSection from '../../components/exchangeValuesSection/exchangeValuesSection';
import CardChooseSection from '../../components/cardChooseSection/cardChooseSection';
import NewsSection from '../../components/newsSection/newsSection';
import SupportSection from '../../components/supportSection/supportSection';

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
