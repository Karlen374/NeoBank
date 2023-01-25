import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@utils';
import TablePage from '../views/tablePage/tablePage';
import ErrorPage from '../views/errorPage/errorPage';
import LoanPage from '../views/loanPage/loanPage';
import MainPage from '../views/mainPage/mainPage';
import ScoringPage from '../views/scoringPage/scoringPage';
import CodePage from '../views/codePage/codePage';
import SignPage from '../views/signPage/signPage';
import AppFooter from './shared/appFooter/appFooter';
import AppHeader from './shared/appHeader/appHeader';

const App = () => {
  const { status } = useAppSelector((store) => store.cardSlice);
  const scoringPage = (status === 'CC_APPROVED' || status === 'APPROVED') ? <ScoringPage /> : <ErrorPage />;
  const tablePage = (status === 'CC_APPROVED' || status === 'DOCUMENT_CREATED') ? <TablePage /> : <ErrorPage />;
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/loan/:applicationId" element={scoringPage} />
        <Route path="/loan/:applicationId/document" element={tablePage} />
        <Route path="/loan/:applicationId/document/sign" element={<SignPage />} />
        <Route path="loan/:applicationId/code" element={<CodePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <AppFooter />
    </Router>
  );
};
export default App;
