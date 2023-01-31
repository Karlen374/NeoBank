import { CodeForm, Congratulations } from '@components';
import { getStatus, useAppDispatch, useAppSelector } from '@utils';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../errorPage/errorPage';

const CodePage = () => {
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();
  const { status, loader } = useAppSelector((store) => store.cardSlice);

  useEffect(() => {
    dispatch(getStatus(applicationId));
  }, []);

  if ((JSON.parse(localStorage.getItem('offers')))[0].applicationId !== Number(applicationId)) {
    return (
      <ErrorPage />
    );
  }

  return (
    <main>
      {status === 'CREDIT_ISSUED' ? <Congratulations /> : <CodeForm applicationId={applicationId} />}
    </main>
  );
};
export default CodePage;
