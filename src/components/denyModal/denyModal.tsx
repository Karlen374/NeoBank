import { changeConfirmModalStatus, changeModalStatus, useAppDispatch } from '@utils';
import React from 'react';
import './denyModal.scss';

export const DenyModal = () => {
  const dispatch = useAppDispatch();
  const openConfirmModal = () => {
    dispatch(changeModalStatus(false));
    dispatch(changeConfirmModalStatus(true));
  };

  return (
    <div className="deny-modal">
      <div className="deny-modal__header">
        <h5>Deny application</h5>
        <span className="deny-modal__header_close" onClick={() => dispatch(changeModalStatus(false))}>&times;</span>
      </div>
      <p>You exactly sure, you want to cancel this application?</p>
      <div className="deny-modal__buttons">
        <button
          onClick={openConfirmModal}
          className="deny-modal__buttons_error"
          type="button"
        >
          Deny
        </button>
        <button
          className="button"
          onClick={() => dispatch(changeModalStatus(false))}
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
