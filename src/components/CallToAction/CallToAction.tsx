import { CallToActionProps, SelectedPage } from '@customTypes/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const CallToAction = ({ children, setSelectedPage }: CallToActionProps) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
