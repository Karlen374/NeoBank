import React from 'react';
import './exchangeValuesSection.scss';
import BankIcon from '../../public/icons/bankIcon';
import ExchangeItem from './exchangeItem';
import worldImg from '../../public/assets/world.png';

const valuesMap = ['USD', 'EUR', 'CNY', 'JPY', 'GBP', 'CAD'];

const ExchangeValuesSection = () => {
  return (
    <>
      <section className="exchange-section wrapper">
        <div className="exchange-section__header">
          <h3 className="exchange-section__header_name">Exchange rate in internet bank</h3>
          <h5 className="exchange-section__header_info">Update every 15 minutes, MSC 09.08.2022</h5>
        </div>
        <div className="exchange-section__rate">
          <div>
            <p className="exchange-section__rate_subHeader">Currency</p>
            <div className="exchange-section__rateBlock">
              {valuesMap.map((item) => <ExchangeItem value={item} key={item} />)}
            </div>
            <p className="exchange-section__rate_more">All courses</p>
          </div>
          <span className="exchange-section__rate_icon">
            <BankIcon />
          </span>
        </div>
      </section>
      <div className="world-section wrapper">
        <h2 className="world-section_header">You can use our services anywhere in the world</h2>
        <p className="world-section_subHeader">Withdraw and transfer money online through our application</p>
        <img src={worldImg} alt="world map" />
      </div>
    </>
  );
};
export default ExchangeValuesSection;
