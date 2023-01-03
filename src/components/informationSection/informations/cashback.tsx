import React from 'react';
import '../informationSection.scss';

const CashBack = () => {
  return (
    <div className="information-section__cashbacks">
      <div className="information-section__cashback">
        <p className="information-section__cashback_info">For food delivery, cafes and restaurants</p>
        <p className="information-section__cashback_percent">5%</p>
      </div>
      <div className="information-section__cashback">
        <p className="information-section__cashback_info">In supermarkets with our subscription</p>
        <p className="information-section__cashback_percent">5%</p>
      </div>
      <div className="information-section__cashback">
        <p className="information-section__cashback_info">In clothing stores and children&apos;s goods</p>
        <p className="information-section__cashback_percent">2%</p>
      </div>
      <div className="information-section__cashback">
        <p className="information-section__cashback_info">Other purchases and payment of services and fines</p>
        <p className="information-section__cashback_percent">1%</p>
      </div>
      <div className="information-section__cashback">
        <p className="information-section__cashback_info">Shopping in online stores</p>
        <p className="information-section__cashback_percent">up to 3%</p>
      </div>
      <div className="information-section__cashback">
        <p className="information-section__cashback_info">Other purchases and payment of services and fines</p>
        <p className="information-section__cashback_percent">30%</p>
      </div>
    </div>
  );
};
export default CashBack;
