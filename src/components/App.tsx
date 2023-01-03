import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanPage from '../views/loanPage/loanPage';
import MainPage from '../views/mainPage/MainPage';
import AppFooter from './shared/appFooter/appFooter';
import AppHeader from './shared/appHeader/appHeader';

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loan" element={<LoanPage />} />
      </Routes>
      <AppFooter />
    </Router>
  );
};
export default App;
