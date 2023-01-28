import { ISortValue } from '@utils';

export const checkSortValue = (sortValue: ISortValue) => {
  if (sortValue === ISortValue.NUMBER
    || sortValue === ISortValue.TOTAL_PAYMENT
    || sortValue === ISortValue.DEBT_PAYMENY
    || sortValue === ISortValue.INTEREST_PAYMENT
    || sortValue === ISortValue.REMAINING_DEBT) {
    return true;
  } else {
    return false;
  }
};
