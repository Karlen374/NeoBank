import './modal.scss';
import React from 'react';
import { changeModalStatus, useAppDispatch } from '@utils';

interface ModalProps {
  active:boolean;
  children:React.ReactNode;
}
const Modal = ({ active, children }:ModalProps) => {
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(changeModalStatus(false));
  };

  const modalClass = !active ? 'modal' : 'modal active__modal';
  const modalContentClass = !active ? 'modal__content' : 'modal__content active__modal';

  return (
    <div className={modalClass} onClick={close} aria-hidden="true">
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};
export default Modal;
