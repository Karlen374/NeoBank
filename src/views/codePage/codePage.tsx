import { CodeForm, Congratulations } from '@components';
import { getStatus, useAppDispatch, useAppSelector } from '@utils';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorChakingLayout from '../../layouts/errorChakingLayout';

const CodePage = () => {
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((store) => store.cardSlice);

  useEffect(() => {
    dispatch(getStatus(applicationId));
  }, []);

  const content = status === 'CREDIT_ISSUED' ? <Congratulations /> : <CodeForm applicationId={applicationId} />;
  return (
    <main>
      <ErrorChakingLayout component={content} />
    </main>
  );
};
export default CodePage;
