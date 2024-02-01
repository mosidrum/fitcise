import { Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import { LandingPage } from '@pages/LandingPage';
import { Navbar } from '@components/navbar';
import { Footer } from '@components/footer';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@customTypes/types';

export const AppRoutes = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [topOfScreen, setTopOfScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfScreen(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfScreen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="app bg-gray-20">
        <Navbar topOfScreen={topOfScreen}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <Routes>
        <Route path={paths.index} element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
