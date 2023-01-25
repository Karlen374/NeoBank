import React, { useEffect } from 'react';
import {
  AdvertistingSection,
  InformationSection,
  CardCreateInformation,
  CardCustomizeSection,
  CardOffersSection,
} from '@components';
import { useAppDispatch, getStatus } from '@utils';

const LoanPage = () => {
  const dispatch = useAppDispatch();
  const offers = JSON.parse(localStorage.getItem('offers'));

  useEffect(() => {
    if (offers) {
      dispatch(getStatus(String(offers[0].applicationId)));
    }
  }, []);

  return (
    <main>
      <AdvertistingSection />
      <InformationSection />
      <CardCreateInformation />
      {offers ? <CardOffersSection offers={offers} /> : <CardCustomizeSection />}
    </main>
  );
};
export default LoanPage;
