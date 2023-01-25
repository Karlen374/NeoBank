import React from 'react';
import './cardOffersSection.scss';
import { IOffer, useAppDispatch, postSelectedOffer } from '@utils';
import SuccesIcon from '../../public/icons/successIcon';
import ErrorIcon from '../../public/icons/errorIcon';
import supriseBox from '../../public/assets/SurpriseImage.png';

interface ICardOfferProps{
  offer:IOffer;
}
export const CardOffer = ({ offer }: ICardOfferProps) => {
  const dispatch = useAppDispatch();
  const getSelectedOffer = () => {
    dispatch(postSelectedOffer(offer));
  };

  return (
    <div className="offers-section__offer">
      <img src={supriseBox} alt="suprise box" />
      <p>{`Requested amount: ${offer.requestedAmount} ₽`}</p>
      <p>{`Total amount: ${offer.totalAmount} ₽`}</p>
      <p>{`For ${offer.term} months`}</p>
      <p>{`Monthly payment: ${offer.monthlyPayment} ₽`}</p>
      <p>{`Your rate: ${offer.rate}%`}</p>
      <div>
        <p>Insurance included</p>
        <span>
          {offer.isInsuranceEnabled ? <SuccesIcon /> : <ErrorIcon />}
        </span>
      </div>
      <div>
        <p>Salary client</p>
        <span>
          {offer.isSalaryClient ? <SuccesIcon /> : <ErrorIcon />}
        </span>
      </div>
      <button type="button" onClick={getSelectedOffer} className="button">Select</button>
    </div>
  );
};
