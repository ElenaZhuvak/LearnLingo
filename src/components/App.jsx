import { Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage.jsx';
import TeachersPage from '../pages/TeachersPage/TeachersPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import LoginPage from '../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx';
import Header from './Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import css from './App.module.css';


const App = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div className={css.loader}><BarLoader  /></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/register' element={<RegisterPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
