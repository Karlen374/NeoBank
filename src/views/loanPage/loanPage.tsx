import React from 'react';
import InformationSection from '../../components/informationSection/informationSection';
import AdvertistingSection from '../../components/advertistingSection/advertistingSection';
import CardCustomizeSection from '../../components/cardCustomizeSection/cardCustomizeSection';

const LoanPage = () => {
  return (
    <main>
      <AdvertistingSection />
      <InformationSection />
      <CardCustomizeSection />
    </main>
  );
};
export default LoanPage;
