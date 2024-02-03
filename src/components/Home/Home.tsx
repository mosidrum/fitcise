import React, { useState } from 'react';
import { SelectedPage, SelectedProps } from '@customTypes/types';
import HomePageText from '@assets/HomePageText.png';
import HomePageImage from '@assets/HomePageGraphic.png';
import RedBulls from '@assets/SponsorRedBull.png';
import forebs from '@assets/SponsorForbes.png';
import fortune from '@assets/SponsorFortune.png';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { CallToAction } from '..';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = ({ setSelectedPage }: SelectedProps) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className="z-10 mt-32 md:basis-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:-mt-30">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
              Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <CallToAction setSelectedPage={setSelectedPage}>Join Now</CallToAction>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </motion.div>
        <div
          className="flex basis-3/5 justify-center md:z-10
          md:ml-40 md:mt-16 md:justify-items-end "
        >
          <img src={HomePageImage} alt="Home page graphic" />
        </div>
      </motion.div>

      {/* Sponsors*/}

      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={RedBulls} alt="redbulls sponsors" />
              <img src={forebs} alt="forbes sponsors" />
              <img src={fortune} alt="fortune sponsors" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
