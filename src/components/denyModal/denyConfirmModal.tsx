import { changeConfirmModalStatus, useAppDispatch } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';
import './denyModal.scss';

export const DenyConfirmModal = React.memo(() => {
  const dispatch = useAppDispatch();
  const closeDenyModal = () => {
    dispatch(changeConfirmModalStatus(false));
    localStorage.removeItem('offers');
  };

  return (
    <div className="deny-modal">
      <div className="deny-modal__header">
        <h5>Deny application</h5>
        <Link to="/" onClick={closeDenyModal}>
          <span
            className="deny-modal__header_close"
          >
            &times;
          </span>
        </Link>
      </div>
      <p>Your application has been deny!</p>
      <Link to="/" onClick={closeDenyModal} className="deny-modal__buttons">
        <button className="button" type="button">Go home</button>
      </Link>
    </div>
  );
});
