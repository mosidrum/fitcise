import { Home } from '@components/Home';
import { Benefit } from '@components/benefit';
import { SelectedPage } from '@customTypes/types';
import { useState } from 'react';

const LandingPage = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div>
      <Home setSelectedPage={setSelectedPage} />
      <Benefit setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default LandingPage;
