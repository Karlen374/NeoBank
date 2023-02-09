import React, { useEffect, useState } from 'react';
import { SigningForm, SigningText } from '@components';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@utils';
import ErrorChakingLayout from '../../layouts/errorChakingLayout';

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
  }, [sign]);

  const content = sign ? <SigningText /> : <SigningForm applicationId={applicationId} />;
  return (
    <main>
      <ErrorChakingLayout component={content} />
    </main>
  );
};
export default SignPage;
