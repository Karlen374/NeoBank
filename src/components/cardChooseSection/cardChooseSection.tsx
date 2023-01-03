import React from 'react';
import './cardChooseSection.scss';
import CardFeatures from './cardFeatures';
import cardImage1 from '../../public/assets/cardImage1.png';
import cardImage2 from '../../public/assets/cardImage2.png';
import cardImage3 from '../../public/assets/cardImage3.png';
import cardImage4 from '../../public/assets/cardImage4.png';

const CardChooseSection = () => {
  return (
    <section className="card-section wrapper">
      <div className="card-section__design">
        <div className="card-section__choose">
          <h1 className="card-section__choose_text">Choose the design you like and apply for card right now</h1>
          <button type="button" className="card-section__choose_button button">Choose the Card</button>
        </div>
        <div className="card-section__cards">
          <div className="card">
            <img src={cardImage1} alt="Card Design img" />
          </div>
          <div className="card">
            <img src={cardImage2} alt="Card Design img" />
          </div>
          <div className="card">
            <img src={cardImage3} alt="Card Design img" />
          </div>
          <div className="card">
            <img src={cardImage4} alt="Card Design img" />
          </div>
        </div>
      </div>
      <CardFeatures />
    </section>
  );
};

export default CardChooseSection;
