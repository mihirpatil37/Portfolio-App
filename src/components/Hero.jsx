import React, { Fragment } from 'react';
import AnimatedTitles from './utils/AnimatedTitles';
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

const Hero = () => {
  return (
    <Fragment>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 pb-20"
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('./assets/slider_new.jpg')] bg-center bg-cover bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-light capitalize tracking-wide text-teal-500">
              I'm Mihir Patil
            </h3>
            <AnimatedTitles />
            <p className='mt-4 text-gray-300 text-sm md:text-base max-w-xl'>
              Electrical Engineer (M.Sc.) with experience in automation, PLC, Machine Learning(Deep-Learning, Neural Networks), Python Programming (Django, Flask, RestAPIs, Tensorflow, pandas, scikit-learn, OpenCV, OOP, and more), Web-Development(React, HTML, CSS & JS), and Information Technology.
            </p>
            <div className='mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400'>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-md cursor-pointer rounded-full'>Frontend Developer</span>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-md cursor-pointer rounded-full'>Python Full Stack Developer</span>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-md cursor-pointer rounded-full'>Machine Learning Engineer</span>

            </div>

            <div className='flex gap-5 mt-8 justify-center md:justify-start'>
              <button className='p-3 bg-white/10 rounded-full cursor-pointer hover:bg-teal-400 transform-colors'>
                <FaFacebook/>
              </button>
              <button className='p-3 bg-white/10 rounded-full cursor-pointer hover:bg-teal-400 transform-colors'>
                <BsWhatsapp/>
              </button>
              <button className='p-3 bg-white/10 rounded-full cursor-pointer hover:bg-teal-400 transform-colors'>
                <LiaLinkedin />
              </button>

            </div>

            <div className='mt-8 flex-col sm:flex-row gap-4'>
              <button className='px-6 py-1 rounded-full bg-linear-to-r from-teal-400 to-teal-700 cursor-pointer font-light text-white hover: opacity-70 transition-opacity'> View my Works </button>
              <button className='px-6 py-1 rounded-full bg-white/10 backdrop-blur-md font-light cursor-pointer text-white hover:opacity-70 transition-opacity'> Download CV </button>

            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
