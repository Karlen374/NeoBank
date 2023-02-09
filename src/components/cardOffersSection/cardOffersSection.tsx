import React from 'react';
import './cardOffersSection.scss';
import { IOffer, useAppSelector } from '@utils';
import { CardOffer } from './cardOffer';
import Loader from '../shared/loader/loader';

interface ICardOffersSectionProps{
  offers:IOffer[];
}
export const CardOffersSection = ({ offers }:ICardOffersSectionProps) => {
  const { selectedOffer, loader } = useAppSelector((store) => store.cardSlice);

  if (loader) {
    return (
      <Loader />
    );
  }
  if (selectedOffer) {
    return (
      <div className="wrapper step-message">
        <div className="step-message__info">
          <h1>The preliminary decision has been sent to your email.</h1>
          <p>In the letter you can get acquainted with the preliminary decision on the credit card.</p>
        </div>
      </div>
    );
  }
  return (
    <section id="customize-form" className="offers-section wrapper">
      <div className="offers-section__offers">
        {offers.map((offer) => <CardOffer key={offer.monthlyPayment} offer={offer} />)}
      </div>
    </section>
  );
};
