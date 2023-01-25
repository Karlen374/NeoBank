import React, { useEffect } from 'react';
import { ScoringForm, ScoringText } from '@components';
import { getStatus, useAppDispatch, useAppSelector } from '@utils';
import { useParams } from 'react-router-dom';
import ErrorPage from '../errorPage/errorPage';

const ScoringPage = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.cardSlice);
  const { applicationId } = useParams();

  if ((JSON.parse(localStorage.getItem('offers')))[0].applicationId !== Number(applicationId)) {
    return (
      <ErrorPage />
    );
  }
  return (
    <main style={{ padding: '24px 0 96px' }}>
      {status === 'CC_DENIED' || status === 'CC_APPROVED' ? <ScoringText /> : <ScoringForm />}
    </main>
  );
};
export default ScoringPage;
