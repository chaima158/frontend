import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// import hero data
import { heroData } from '../../Data/data';

// import components
import Header from './Header';

const Hero = () => {
  // destructure hero
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className='lg:h-[900px] py-12'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          {/* text */}
          <div className=''>
            {/* title */}
            <h1
              className='h1 xl:max-w-[500px] mb-6 xl:mb-12'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h1>
            {/* subtitle */}
            <h1
              className='lead xl:max-w-[900px] mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </h1>
            <button
              className='btn btn-primary mb-8 xl:mb-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {btnText}
            </button>
          </div>
          {/* image */}
          <div className='lead xl:max-w-[990px] mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
          >
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
