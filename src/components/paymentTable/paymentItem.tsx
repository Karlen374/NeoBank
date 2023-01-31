import { IPayment } from '@utils';
import React from 'react';

interface IPaymentItemProps{
  data: IPayment;
}
const PaymentItem = ({ data }:IPaymentItemProps) => {
  return (
    <tr>
      {Object.values(data).map((item, id) => <td key={id}>{item}</td>)}
    </tr>
  );
};
export default PaymentItem;
