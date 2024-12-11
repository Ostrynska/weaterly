import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
