import React, { useState } from 'react';
import AboutCard from './informations/aboutCard';
import CashBack from './informations/cashback';
import Faq from './informations/Faq';
import RatesAndConditions from './informations/ratesAndConditions';
import './informationSection.scss';

const InformationSection = () => {
  const [informationNav, setInformationNav] = useState<1 | 2 | 3| 4>(1);

  return (
    <section className="information-section wrapper">
      <div className="information-section__navigation">
        <p onClick={() => setInformationNav(1)} className="information-section__navigation_active">About card</p>
        <p onClick={() => setInformationNav(2)}>Rates and conditions</p>
        <p onClick={() => setInformationNav(3)}>Cashback</p>
        <p onClick={() => setInformationNav(4)}>FAQ</p>
      </div>
      {informationNav === 1 && <AboutCard />}
      {informationNav === 2 && <RatesAndConditions />}
      {informationNav === 3 && <CashBack />}
      {informationNav === 4 && <Faq />}
    </section>
  );
};
export default InformationSection;
