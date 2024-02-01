import { SelectedPage } from '@customTypes/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavbarLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const toLowerCasePage = page.toLowerCase().replace(/-/g, '') as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === toLowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
      href={`#${toLowerCasePage}`}
      onClick={() => setSelectedPage(toLowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default NavbarLink;
