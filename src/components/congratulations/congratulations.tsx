import React from 'react';
import { Link } from 'react-router-dom';
import surpriseBox from '../../public/assets/SurpriseImage.png';
import './congratulations.scss';

export const Congratulations = () => {
  const clearStorage = () => {
    localStorage.removeItem('offers');
    localStorage.removeItem('sign');
  };

  return (
    <div className="wrapper step-congratulations">
      <img src={surpriseBox} alt="suprise" />
      <h2>Congratulations! You have completed your new credit card.</h2>
      <p>Your credit card will arrive soon. Thank you for choosing us!</p>
      <Link to="/loan">
        <button onClick={clearStorage} type="button" className="button">View other offers of our bank</button>
      </Link>
    </div>
  );
};
