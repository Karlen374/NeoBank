import {
  DenyConfirmModal,
  DenyModal,
  PaymentTable,
  PaymentTableText,
} from '@components';
import { useAppSelector } from '@utils';
import React from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/shared/modal/modal';
import ErrorPage from '../errorPage/errorPage';

const TablePage = () => {
  const {
    modal,
    confirmModal,
    status,
  } = useAppSelector((store) => store.cardSlice);
  const { applicationId } = useParams();

  if (status === 'DOCUMENT_CREATED') {
    return (
      <main>
        <PaymentTableText />
      </main>
    );
  }

  const offers = JSON.parse(localStorage.getItem('offers'));
  const id = offers ? offers[0].applicationId : null;
  if ((id && id !== Number(applicationId)) || !id) {
    return (
      <ErrorPage />
    );
  }
  return (
    <main>
      <Modal active={modal}>
        <DenyModal />
      </Modal>
      <Modal active={confirmModal}>
        <DenyConfirmModal />
      </Modal>
      <PaymentTable applicationId={applicationId} />
    </main>
  );
};
export default TablePage;
