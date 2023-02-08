import React from 'react';
import '../informationSection.scss';

const RatesAndConditions = () => {
  return (
    <div data-testid="rates-section" className="information-section__rates">
      <div className="information-section__rate">
        <p className="information-section__rate_header">Card currency</p>
        <p className="information-section__rate_info">Rubles, dollars, euro</p>
      </div>
      <div className="information-section__rate">
        <p className="information-section__rate_header">Interest free period</p>
        <p className="information-section__rate_info">0% up to 160 days</p>
      </div>
      <div className="information-section__rate">
        <p className="information-section__rate_header">Payment system</p>
        <p className="information-section__rate_info">Mastercard, Visa</p>
      </div>
      <div className="information-section__rate">
        <p className="information-section__rate_header">Maximum credit limit on the card</p>
        <p className="information-section__rate_info">600 000 ₽</p>
      </div>
      <div className="information-section__rate">
        <p className="information-section__rate_header">Replenishment and withdrawal</p>
        <p className="information-section__rate_info">
          At any ATM. Top up your credit card for free with cash or transfer from other cards
        </p>
      </div>
      <div className="information-section__rate">
        <p className="information-section__rate_header">Max cashback per month</p>
        <p className="information-section__rate_info">15 000 ₽</p>
      </div>
      <div className="information-section__rate">
        <p className="information-section__rate_header">Transaction Alert</p>
        <p className="information-section__rate_info">
          60 ₽ — SMS or push notifications
          <br />
          0 ₽ — card statement, information about transactions in the online bank

        </p>
      </div>
    </div>
  );
};
export default RatesAndConditions;
