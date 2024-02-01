import { Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import { LandingPage } from '@pages/LandingPage';
import { Navbar } from '@components/navbar';
import { Footer } from '@components/footer';
import { useState } from 'react';
import { SelectedPage } from '@customTypes/types';

export const AppRoutes = () => {
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);

  return (
    <div>
      <div className="app bg-gray-20">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <Routes>
        <Route path={paths.index} element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
