import { changeConfirmModalStatus, useAppDispatch } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';
import './denyModal.scss';

export const DenyConfirmModal = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="deny-modal">
      <div className="deny-modal__header">
        <h5>Deny application</h5>
        <Link to="/">
          <span
            className="deny-modal__header_close"
            onClick={() => dispatch(changeConfirmModalStatus(false))}
          >
            &times;
          </span>
        </Link>
      </div>
      <p>Your application has been deny!</p>
      <Link to="/" className="deny-modal__buttons">
        <button className="button" type="button">Go home</button>
      </Link>
    </div>
  );
};
