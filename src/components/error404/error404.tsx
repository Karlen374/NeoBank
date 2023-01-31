import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../public/assets/errorImg.png';
import './error404.scss';

export const Error404 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found wrapper">
      <div className="not-found__message">
        <h1>Oops....</h1>
        <h1>Page not found</h1>
        <p>This Page doesn`t exist or was removed! We suggest you go back.</p>
        <button type="button" className="button" onClick={goBack}>Go back</button>
      </div>
      <div className="not-found__img">
        <img src={errorImg} alt="'error img" />
      </div>
    </div>
  );
};
