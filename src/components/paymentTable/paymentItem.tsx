import { IPayment } from '@utils';
import React from 'react';

interface IPaymentItemProps{
  data: IPayment;
}
const PaymentItem = ({ data }:IPaymentItemProps) => {
  return (
    <tr>
      <td>{data.number}</td>
      <td>{data.date}</td>
      <td>{data.totalPayment}</td>
      <td>{data.interestPayment}</td>
      <td>{data.debtPayment}</td>
      <td>{data.remainingDebt}</td>
    </tr>
  );
};
export default PaymentItem;
