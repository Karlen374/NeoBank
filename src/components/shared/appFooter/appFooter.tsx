import React from 'react';
import './appFooter.scss';
import AppLogo from '../../../public/assets/logo.png';

const AppFooter = () => {
  return (
    <footer>
      <div className="footer wrapper">
        <div className="footer__header">
          <img src={AppLogo} alt="logo" />
          <div>
            <h3 className="footer__header_phone">+7 (495) 984 25 13</h3>
            <p className="footer__header_info">info@neoflex.ru</p>
          </div>
        </div>
        <div className="footer__info">
          <p className="footer__info_item">About bank</p>
          <p className="footer__info_item">Ask a Question</p>
          <p className="footer__info_item">Quality of service</p>
          <p className="footer__info_item">Requisites</p>
          <p className="footer__info_item">Press center</p>
          <p className="footer__info_item">Bank career</p>
          <p className="footer__info_item">Investors</p>
          <p className="footer__info_item">Analytics</p>
          <p className="footer__info_item">Business and processes</p>
          <p className="footer__info_item">Compliance and business ethics</p>
        </div>
        <hr />
        <p className="footer__info_cookie">
          We use cookies to personalize our services and improve the user experience of our website.
          Cookies are small files containing information about previous visits to a website.
          If you do not want to use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
};
export default AppFooter;
