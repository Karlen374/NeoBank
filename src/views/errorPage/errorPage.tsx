import React, { useEffect } from 'react';
import { Error404 } from '@components';
import { useAppDispatch, getStatus, useAppSelector } from '@utils';
import { useParams } from 'react-router-dom';
import Loader from '../../components/shared/loader/loader';

const ErrorPage = () => {
  const dispatch = useAppDispatch();
  const { loader } = useAppSelector((store) => store.cardSlice);
  const { applicationId } = useParams();

  useEffect(() => {
    const offers = JSON.parse(localStorage.getItem('offers'));
    const id = offers ? offers[0].applicationId : null;
    if (id && Number(applicationId) === id) {
      dispatch(getStatus(applicationId));
    }
  }, []);

  const content = loader ? <Loader /> : <Error404 />;
  return (
    <main>
      {content}
    </main>
  );
};
export default ErrorPage;
