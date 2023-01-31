import React, { useEffect, useState } from 'react';
import { SigningForm, SigningText } from '@components';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@utils';
import ErrorPage from '../errorPage/errorPage';

const SignPage = () => {
  const { applicationId } = useParams();
  const { loader } = useAppSelector((store) => store.cardSlice);
  const [sign, setSign] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('sign')) setSign(true);
  }, [loader]);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem('sign');
    }, 600000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if ((JSON.parse(localStorage.getItem('offers')))[0].applicationId !== Number(applicationId)) {
    return (
      <ErrorPage />
    );
  }
  return (
    <main>
      {sign ? <SigningText /> : <SigningForm applicationId={applicationId} />}
    </main>
  );
};
export default SignPage;
