import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Logo from '@assets/Logo.png';
import NavbarLink from './NavbarLink';
import { SelectedPage } from '@customTypes/types';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { CallToAction } from '@components/CallToAction';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexbetween = 'flex items-center justify-between';
  const checkIfMobileScreen = useMediaQuery('(min-width: 1060px)');
  console.log(isMenuToggled);
  
  return (
    <nav>
      <div className={`${flexbetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexbetween} mx-auto w-5/6`}>
          <div className={`${flexbetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {checkIfMobileScreen ? (
              <div className={`${flexbetween} w-full`}>
                <div className={`${flexbetween} gap-8 text-sm`}>
                  <NavbarLink
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <NavbarLink
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavbarLink
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavbarLink
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexbetween} gap-8`}>
                  <p>Sign In</p>
                  <CallToAction setSelectedPage={setSelectedPage}>Become a Member</CallToAction>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        {isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[330px] bg-primary-100 drop-shadow-xl">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="ml-[33%] flex flex-col gap-10 text-2x">
              <NavbarLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <NavbarLink
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarLink
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarLink
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
