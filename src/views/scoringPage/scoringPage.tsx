import React from 'react';
import { ScoringForm, ScoringText } from '@components';
import { useAppSelector, AppStatus } from '@utils';
import ErrorChakingLayout from '../../layouts/errorChakingLayout';

const ScoringPage = () => {
  const { status } = useAppSelector((store) => store.cardSlice);

  const content = status === AppStatus.CC_DENIED || status === AppStatus.CC_APPROVED ? <ScoringText /> : <ScoringForm />;

  return (
    <main style={{ padding: '24px 0 96px' }}>
      <ErrorChakingLayout component={content} />
    </main>
  );
};
export default ScoringPage;
