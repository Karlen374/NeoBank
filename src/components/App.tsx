import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector, AppStatus } from '@utils';
// import MainPage from '../views/mainPage/mainPage';
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

  const scoringPage = (status === AppStatus.CC_APPROVED || status === AppStatus.APPROVED)
    ? (
      <Suspense fallback={<Loader />}>
        <ScoringPage />
      </Suspense>
    )
    : (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    );
  const tablePage = (status === AppStatus.CC_APPROVED || status === AppStatus.DOCUMENT_CREATED)
    ? (
      <Suspense fallback={<Loader />}>
        <TablePage />
      </Suspense>
    )
    : (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    );
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={(
            <Suspense fallback={<Loader />}>
              <MainPage />
            </Suspense>
      )}
        />
        <Route
          path="/loan"
          element={(
            <Suspense fallback={<Loader />}>
              <LoanPage />
            </Suspense>
          )}
        />
        <Route path="/loan/:applicationId" element={scoringPage} />
        <Route path="/loan/:applicationId/document" element={tablePage} />
        <Route
          path="/loan/:applicationId/document/sign"
          element={(
            <Suspense fallback={<Loader />}>
              <SignPage />
            </Suspense>
        )}
        />
        <Route
          path="loan/:applicationId/code"
          element={(
            <Suspense fallback={<Loader />}>
              <CodePage />
            </Suspense>
        )}
        />
        <Route
          path="*"
          element={(
            <Suspense fallback={<Loader />}>
              <ErrorPage />
            </Suspense>
      )}
        />
      </Routes>
      <AppFooter />
    </Router>
  );
};
export default App;
