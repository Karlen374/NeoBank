import { useAppDispatch, monthlyPaymentsDescSort, monthlyPaymentsIncSort } from '@utils';
import React from 'react';

const PaymentTableHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <thead>
      <tr>
        <th>
          NUMBER
          <button onClick={() => dispatch(monthlyPaymentsIncSort('number'))} type="button">
            ↑
          </button>
          <button onClick={() => dispatch(monthlyPaymentsDescSort('number'))} type="button">
            ↓
          </button>
        </th>
        <th>
          DATE
          <button onClick={() => dispatch(monthlyPaymentsIncSort('date'))} type="button">
            ↑
          </button>
          <button onClick={() => dispatch(monthlyPaymentsDescSort('date'))} type="button">
            ↓
          </button>
        </th>
        <th>
          TOTAL PAYMENT
          <button onClick={() => dispatch(monthlyPaymentsIncSort('totalPayment'))} type="button">
            ↑
          </button>
          <button onClick={() => dispatch(monthlyPaymentsDescSort('totalPayment'))} type="button">
            ↓
          </button>
        </th>
        <th>
          INTEREST PAYMENT
          <button onClick={() => dispatch(monthlyPaymentsIncSort('interestPayment'))} type="button">
            ↑
          </button>
          <button onClick={() => dispatch(monthlyPaymentsDescSort('interestPayment'))} type="button">
            ↓
          </button>
        </th>
        <th>
          DEBT PAYMENT
          <button onClick={() => dispatch(monthlyPaymentsIncSort('debtPayment'))} type="button">
            ↑
          </button>
          <button onClick={() => dispatch(monthlyPaymentsDescSort('debtPayment'))} type="button">
            ↓
          </button>
        </th>
        <th>
          REMAINING DEBT
          <button onClick={() => dispatch(monthlyPaymentsIncSort('remainingDebt'))} type="button">
            ↑
          </button>
          <button onClick={() => dispatch(monthlyPaymentsDescSort('remainingDebt'))} type="button">
            ↓
          </button>
        </th>
      </tr>
    </thead>
  );
};
export default PaymentTableHeader;
