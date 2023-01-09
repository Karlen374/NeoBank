import React from 'react';
import ClockDuotoneIcon from '../../../public/icons/clockDuotone';
import CreditCardDuotoneIcon from '../../../public/icons/creditCardDuotoneIcon';
import BagDuotoneIcon from '../../../public/icons/bagDuotone';
import CalendarDuotoneIcon from '../../../public/icons/calendarDuotoneIcon';
import MoneyDuotoneIcon from '../../../public/icons/moneyDuotoneIcon';
import '../informationSection.scss';

const AboutCard = () => {
  return (
    <>
      <div className="information-section__firstTerms">
        <div className="information-section__firstTerm">
          <MoneyDuotoneIcon />
          <h2 className="information-section__firstTerm_header">Up to 50 000 ₽</h2>
          <p className="information-section__firstTerm_subHeader">Cash and transfers without commission and percent</p>
        </div>
        <div className="information-section__firstTerm">
          <CalendarDuotoneIcon />
          <h2 className="information-section__firstTerm_header">Up to 160 days</h2>
          <p className="information-section__firstTerm_subHeader">Without percent on the loan</p>
        </div>
        <div className="information-section__firstTerm">
          <ClockDuotoneIcon />
          <h2 className="information-section__firstTerm_header">Free delivery</h2>
          <p className="information-section__firstTerm_subHeader">
            We will deliver your card by courier at a convenient place and time for you
          </p>
        </div>
      </div>
      <div className="information-section__secondTerms">
        <div className="information-section__secondTerm">
          <BagDuotoneIcon />
          <h2 className="information-section__secondTerm_header">Up to 12 months</h2>
          <p className="information-section__secondTerm_subHeader">
            No percent. For equipment, clothes and other purchases in installments
          </p>
        </div>
        <div className="information-section__secondTerm">
          <CreditCardDuotoneIcon />
          <h2 className="information-section__secondTerm_header">Convenient deposit and withdrawal</h2>
          <p className="information-section__secondTerm_subHeader">
            At any ATM. Top up your credit card for free with cash or transfer from other cards
          </p>
        </div>
      </div>

    </>
  );
};
export default AboutCard;
