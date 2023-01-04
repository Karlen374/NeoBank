import React from 'react';
import './cardCreatInformation.scss';

const CardCreateInformation = () => {
  return (
    <div className="card-creat wrapper">
      <h1>How to get a card</h1>
      <div className="card-creat__block">
        <div className="card-creat__inforamtion">
          <div className="card-creat__information_rectangle">1</div>
          <p className="card-creat__information_subHeader">
            Fill out an online application - you do not need to visit the bank
          </p>
        </div>
        <div className="card-creat__inforamtion">
          <div className="card-creat__information_rectangle">2</div>
          <p className="card-creat__information_subHeader">
            Find out the bank&apos;s decision immediately after filling out the application
          </p>
        </div>
        <div className="card-creat__inforamtion">
          <div className="card-creat__information_rectangle">3</div>
          <p className="card-creat__information_subHeader">
            T
            he bank will deliver the card free of charge, wherever convenient, to your city
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardCreateInformation;
