import React from 'react';
import { NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="header">
      <nav className="wrapper header__wrapper">
        <NavLink data-testid="main-page" end to="/" className="header__name">
          Neobank
        </NavLink>
        <div className="header__nav">
          <NavLink
            data-testid="loan-page"
            style={({ isActive }) => ({ color: isActive ? '#B2A35F' : 'inherit' })}
            to="/loan"
            className="header__nav_item"
          >
            Credit Card
          </NavLink>
          <NavLink className="header__nav_item" to="#">Product</NavLink>
          <NavLink className="header__nav_item" to="#">Account</NavLink>
          <NavLink className="header__nav_item" to="#">Resources</NavLink>
        </div>
        <button className="button header__button" type="button">Online Bank</button>
      </nav>
    </header>
  );
};
export default React.memo(AppHeader);
