import { useAppSelector } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = () => {
  const { status } = useAppSelector((store) => store.cardSlice);
  const offers = JSON.parse(localStorage.getItem('offers'));

  let navButton = <button type="button" className="button">Button Text</button>;
  if (status === 'APPROVED' && offers) {
    navButton = (
      <Link to={`/loan/${offers[0].applicationId}`}>
        <button type="button" className="button">Continue registration</button>
      </Link>
    );
  }
  if (status === 'CC_APPROVED') {
    const applicationId = JSON.parse(localStorage.getItem('offers'))[0]?.applicationId;
    navButton = (
      <Link to={`/loan/${applicationId}/document`}>
        <button type="button" className="button">Continue registration</button>
      </Link>
    );
  }
  if (status === 'DOCUMENT_CREATED') {
    const applicationId = JSON.parse(localStorage.getItem('offers'))[0]?.applicationId;
    navButton = (
      <Link to={`/loan/${applicationId}/document/sign`}>
        <button type="button" className="button">Continue registration</button>
      </Link>
    );
  }
  if (localStorage.getItem('sign')) {
    const applicationId = JSON.parse(localStorage.getItem('offers'))[0]?.applicationId;
    navButton = (
      <Link to={`/loan/${applicationId}/code`}>
        <button type="button" className="button">Continue registration</button>
      </Link>
    );
  }
  return (
    <>
      {navButton}
    </>
  );
};
export default NavButton;
