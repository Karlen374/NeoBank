import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../views/errorPage/errorPage';

interface MainLayoutProps {
  component: React.ReactNode
}
const ErrorChakingLayout = ({ component }:MainLayoutProps) => {
  const { applicationId } = useParams();

  const offers = JSON.parse(localStorage.getItem('offers'));
  const id = offers ? offers[0].applicationId : null;
  if ((id && id !== Number(applicationId)) || !id) {
    return (
      <ErrorPage />
    );
  }

  return (
    <>
      { component }
    </>
  );
};
export default ErrorChakingLayout;
