import { TitleProps } from '@customTypes/types';
import React from 'react';

const Title = ({ children }: TitleProps) => {
  return <h1 className="basics-3/5 font-montserrat text-3xl font-bold">{children}</h1>;
};

export default Title;
