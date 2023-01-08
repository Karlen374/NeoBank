import React from 'react';
import './AdvertistingSection.scss';
import CardImage from '../../public/assets/cardImage.png';

export const AdvertistingSection = () => {
  return (
    <section className="advertisting-section wrapper">
      <div className="advertisting-section__info">
        <h2 className="advertisting-section__info_header">Platinum digital credit card</h2>
        <p className="advertisting-section__info_subHeader">
          Our best credit card. Suitable for everyday spending and shopping.
          <br />
          Cash withdrawals and transfers without commission and interest.
        </p>
        <div className="advertisting-section__terms">
          <div className="advertisting-section__term">
            <h4 className="advertisting-section__term_header">Up to 160 days</h4>
            <p className="advertisting-section__term_subHeader">No percent</p>
          </div>
          <div className="advertisting-section__term">
            <h4 className="advertisting-section__term_header">Up to 600 000 ₽</h4>
            <p className="advertisting-section__term_subHeader">Credit limit</p>
          </div>
          <div className="advertisting-section__term">
            <h4 className="advertisting-section__term_header">0 ₽</h4>
            <p className="advertisting-_subHeader">Card service is free</p>
          </div>
        </div>
        <button type="button" className="button">Button Text</button>
      </div>
      <div className="advertisting-section__img">
        <img src={CardImage} alt="card img" />
      </div>
    </section>
  );
};
