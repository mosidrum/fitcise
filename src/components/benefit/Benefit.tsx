import { BenefitType, SelectedPage, SelectedProps } from '@customTypes/types';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import BenefitGraphics from '@assets/BenefitsPageGraphic.png';
import { Title } from '@components/title';
import { Card } from '@components/card';
import { CallToAction } from '@components/callToAction';

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

        <div className="mt-5 items-center justify-between gap-8 md:flex ">
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

        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          <img src={BenefitGraphics} className="mx-auto" alt="benefits-graphics" />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <Title>
                    MIllions of Happy members getting{' '}
                    <span className="text-primary-500">FEAT AND FIT</span>
                  </Title>
                </div>
              </div>
            </div>
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta, commodi
                voluptatibus ducimus et reprehenderit! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Assumenda hic libero quidem. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Id cupiditate earum hic esse quae perspiciatis saepe
                nostrum cumque ab, atque repellat quaerat alias at animi ad consequatur distinctio
                veritatis itaque!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab explicabo eaque in.
                Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Dolor, in!
              </p>
            </div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <CallToAction setSelectedPage={setSelectedPage}>Join now</CallToAction>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
