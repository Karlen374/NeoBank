import {
  useAppDispatch,
  monthlyPaymentsDescSort,
  monthlyPaymentsIncSort,
  tableHeader,
} from '@utils';
import React from 'react';

const PaymentTableHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <thead>
      <tr>
        {tableHeader.map((item) => {
          return (
            <th>
              {item.name}
              <button onClick={() => dispatch(monthlyPaymentsIncSort(item.sort))} type="button">
                ↑
              </button>
              <button onClick={() => dispatch(monthlyPaymentsDescSort(item.sort))} type="button">
                ↓
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default PaymentTableHeader;
