import React from 'react';
import InformationSection from '../../components/informationSection/informationSection';
import AdvertistingSection from '../../components/advertistingSection/advertistingSection';
import CardCustomizeSection from '../../components/cardCustomizeSection/cardCustomizeSection';
import CardCreateInformation from '../../components/cardCreateInformation/cardCreatInformation';

const LoanPage = () => {
  return (
    <main>
      <AdvertistingSection />
      <InformationSection />
      <CardCreateInformation />
      <CardCustomizeSection />
    </main>
  );
};
export default LoanPage;
