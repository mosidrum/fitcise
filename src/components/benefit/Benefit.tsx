import { BenefitType, SelectedPage, SelectedProps } from '@customTypes/types';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import React from 'react';
import { Title } from '@components/title';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'Lorem, ipsum dolor.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minima corporis amet ipsum, eius recusandae vitae mollitia ipsam eos consequuntur ex necessitatibus aperiam magnam, voluptatum iste voluptatibus itaque deleniti id.'
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'Lorem, ipsum dolor.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minima corporis amet ipsum, eius recusandae vitae mollitia ipsam eos consequuntur ex necessitatibus aperiam magnam, voluptatum iste voluptatibus itaque deleniti id.'
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Lorem, ipsum dolor.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minima corporis amet ipsum, eius recusandae vitae mollitia ipsam eos consequuntur ex necessitatibus aperiam magnam, voluptatum iste voluptatibus itaque deleniti id.'
  }
];

export const Benefit = ({ setSelectedPage }: SelectedProps) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <div className="md:my-5 md:w-3/5">
          <Title>More than just excercise</Title>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia perspiciatis
            cupiditate sunt! Eaque sint veniam perferendis mollitia quod hic.
          </p>
        </div>

        <div className="md:flex  items-center justify-between gap-8 mt-5 sm:flex-col ">
          {benefits.map((benefit: BenefitType, index: number) => (
            <Card
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
