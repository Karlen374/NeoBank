import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector, AppStatus } from '@utils';
import AppFooter from './shared/appFooter/appFooter';
import AppHeader from './shared/appHeader/appHeader';
import Loader from './shared/loader/loader';

const App = () => {
  const { status } = useAppSelector((store) => store.cardSlice);
  const MainPage = lazy(() => import('../views/mainPage/mainPage'));
  const TablePage = lazy(() => import('../views/tablePage/tablePage'));
  const ErrorPage = lazy(() => import('../views/errorPage/errorPage'));
  const LoanPage = lazy(() => import('../views/loanPage/loanPage'));
  const ScoringPage = lazy(() => import('../views/scoringPage/scoringPage'));
  const CodePage = lazy(() => import('../views/codePage/codePage'));
  const SignPage = lazy(() => import('../views/signPage/signPage'));

  const scoringPage = (status === AppStatus.CC_APPROVED || status === AppStatus.APPROVED) ? <ScoringPage /> : <ErrorPage />;
  const tablePage = (status === AppStatus.CC_APPROVED || status === AppStatus.DOCUMENT_CREATED) ? <TablePage /> : <ErrorPage />;
  return (
    <Router>
      <AppHeader />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/loan" element={<LoanPage />} />
          <Route path="/loan/:applicationId" element={scoringPage} />
          <Route path="/loan/:applicationId/document" element={tablePage} />
          <Route path="/loan/:applicationId/document/sign" element={<SignPage />} />
          <Route path="loan/:applicationId/code" element={<CodePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <AppFooter />
    </Router>
  );
};
export default App;
