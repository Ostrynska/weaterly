import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout';
import React from 'react';

const MainPage = lazy(() => import('./pages/Home/Home'));
const DetailsPage = lazy(() => import('./pages/Details/Details'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":id" element={<DetailsPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
