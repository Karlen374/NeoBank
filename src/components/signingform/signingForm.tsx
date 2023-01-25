import { postSign, useAppDispatch, useAppSelector } from '@utils';
import React, { useState } from 'react';
import FileIcon from '../../public/icons/fileIcon';
import Loader from '../shared/loader/loader';
import './signingForm.scss';

interface ISigningFormProps{
  applicationId: string;
}
export const SigningForm = ({ applicationId }:ISigningFormProps) => {
  const [agree, setAgree] = useState(false);
  const { loader } = useAppSelector((store) => store.cardSlice);
  const dispatch = useAppDispatch();
  const sendButton = agree
    ? <button type="button" onClick={() => dispatch(postSign(applicationId))} className="button">Send</button>
    : <button type="button" className="payment-schedule__buttons_disabled">Send</button>;

  if (loader) {
    return (
      <Loader />
    );
  }
  return (
    <div className="wrapper sign-documents">
      <div className="sign-documents__header">
        <h2>Signing of documents</h2>
        <p>Step 4 of 5</p>
      </div>
      <div className="sign-documents__body">
        <p>
          Information on interest rates under bank deposit agreements with individuals.
          Center for Corporate Information Disclosure.
          Information of a professional participant in the securities market.
          Information about persons under whose control or significant influence the Partner Banks are.
          By leaving an application, you agree to the processing of personal data, obtaining information,
          obtaining access to a credit history, using an analogue of a handwritten signature, an offer,
          a policy regarding the processing of personal data, a form of consent to the processing of personal data.
        </p>
      </div>
      <div className="sign-documents__file">
        <FileIcon />
        <a
          href="https://neowiki.neoflex.ru/download/attachments/102963612/
          credit-card-offer.pdf?version=1&modificationDate=1660918330000&api=v2"
        >
          Information on your card
        </a>
      </div>
      <div className="sign-documents__buttons">
        <input type="checkbox" id="agree" name="agree" checked={agree} onChange={() => setAgree(!agree)} />
        <label htmlFor="agree">I agree</label>
        {sendButton}
      </div>
    </div>
  );
};
