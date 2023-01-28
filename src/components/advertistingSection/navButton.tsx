import { useAppSelector, getNavLink } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = () => {
  const { status } = useAppSelector((store) => store.cardSlice);
  const offers = JSON.parse(localStorage.getItem('offers'));
  const navLink = offers ? getNavLink(offers[0].applicationId, status) : null;

  let navButton = <button type="button" className="button">Button Text</button>;

  if (navLink) {
    navButton = (
      <Link to={navLink}>
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
