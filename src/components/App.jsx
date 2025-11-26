import { Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage.jsx';
import TeacherPage from '../pages/TeacherPage/TeacherPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import Header from './Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeacherPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
