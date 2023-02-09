import { changeModalStatus, postPermission, useAppDispatch } from '@utils';
import React, { useState } from 'react';
import './paymentTable.scss';

interface IPaymentButtonProps{
  applicationId: string;
}
const PaymentButtons = ({ applicationId }: IPaymentButtonProps) => {
  const dispatch = useAppDispatch();
  const [agree, setAgree] = useState(false);

  const sendButton = agree
    ? <button type="button" onClick={() => dispatch(postPermission(applicationId))} className="button">Send</button>
    : <button type="button" className="payment-schedule__buttons_disabled">Send</button>;

  return (
    <div className="payment-schedule__buttons">
      <button
        className="payment-schedule__buttons_error"
        type="button"
        onClick={() => dispatch(changeModalStatus(true))}
      >
        Deny
      </button>
      <div className="payment-schedule__agree">
        <input type="checkbox" id="agree" name="agree" checked={agree} onChange={() => setAgree(!agree)} />
        <label htmlFor="agree"> I agree with the payment schedule</label>
        {sendButton}
      </div>
    </div>
  );
};
export default React.memo(PaymentButtons);
