import React, { useState } from 'react';
import { informationNavItems } from '@utils';
import AboutCard from './informations/aboutCard';
import CashBack from './informations/cashback';
import Faq from './informations/faq';
import RatesAndConditions from './informations/ratesAndConditions';
import './informationSection.scss';

export const InformationSection = () => {
  const [informationNavId, setinformationNavId] = useState<0 | 1 | 2| 3>(0);

  return (
    <section className="information-section wrapper">
      <div className="information-section__navigation">
        {
          informationNavItems.map((item) => {
            const style = (item.id === informationNavId) ? 'information-section__navigation_active' : null;
            return (
              <p key={item.id} className={style} onClick={() => setinformationNavId(item.id)}>{item.name}</p>
            );
          })
        }
      </div>
      {informationNavId === 0 && <AboutCard />}
      {informationNavId === 1 && <RatesAndConditions />}
      {informationNavId === 2 && <CashBack />}
      {informationNavId === 3 && <Faq />}
    </section>
  );
};
