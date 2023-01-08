import React, { useState } from 'react';
import AboutCard from './informations/aboutCard';
import CashBack from './informations/cashback';
import Faq from './informations/faq';
import RatesAndConditions from './informations/ratesAndConditions';
import './informationSection.scss';

interface INavItems{
  name:string;
  id: 0 | 1 | 2 | 3;
}
const navItems:INavItems[] = [
  {
    name: 'About card',
    id: 0,
  },
  {
    name: 'Rates and conditions',
    id: 1,
  },
  {
    name: 'Cashback',
    id: 2,
  },
  {
    name: 'FAQ',
    id: 3,
  },
];

export const InformationSection = () => {
  const [informationNavId, setinformationNavId] = useState<0 | 1 | 2| 3>(0);

  return (
    <section className="information-section wrapper">
      <div className="information-section__navigation">
        {
          navItems.map((item) => {
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
