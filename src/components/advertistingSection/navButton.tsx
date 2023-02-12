import { useAppSelector, getNavLink } from '@utils';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const NavButton = () => {
  const { status } = useAppSelector((store) => store.cardSlice);
  const offers = JSON.parse(localStorage.getItem('offers'));
  const id = offers[0].applicationId;
  const navLink = offers ? useMemo(() => getNavLink(id, status), [status, id]) : null;

  let navButton = <a href="#customize-form" type="button" className="button">Button Text</a>;

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
