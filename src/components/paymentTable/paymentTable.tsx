import { useAppSelector } from '@utils';
import React from 'react';
import Loader from '../shared/loader/loader';
import PaymentButtons from './paymentButtons';
import PaymentItem from './paymentItem';
import './paymentTable.scss';
import PaymentTableHeader from './paymentTableHeader';

interface IPaymentTableProps{
  applicationId: string;
}
export const PaymentTable = ({ applicationId }:IPaymentTableProps) => {
  const { monthlyPayments, loader } = useAppSelector((store) => store.cardSlice);
  if (!monthlyPayments || loader) {
    return (
      <Loader />
    );
  }
  return (
    <div className="wrapper payment-schedule">
      <div className="payment-schedule__wrapper">
        <div className="payment-schedule__header">
          <h2>Payment Schedule</h2>
          <p>Step 3 of 5</p>
        </div>
        <div className="payment-schedule__table">
          <table>
            <PaymentTableHeader />
            <tbody>
              {
                monthlyPayments.map((item, id) => <PaymentItem data={item} key={id} />)
              }
            </tbody>
          </table>
        </div>
        <PaymentButtons applicationId={applicationId} />
      </div>
    </div>
  );
};
