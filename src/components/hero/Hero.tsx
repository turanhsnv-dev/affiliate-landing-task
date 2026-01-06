import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='relative w-full h-[220px] flex items-center text-white overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero.avif'
          alt='Family home background'
          fill
          priority
          className='object-cover object-center'
        />
      </div>

      <div className='max-w-[1200px] mx-auto px-8 relative z-10 h-full flex flex-col justify-center w-full'>
        <div className='max-w-3xl'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
            Top Home Warranty Companies 2026
          </h1>

          <p className='text-sm md:text-base text-white mb-4 leading-relaxed max-w-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
            Be prepared for the unexpected and avoid unnecessary expenses.
            Compare 2026's top home warranty companies.
          </p>

          <div className='inline-flex items-center gap-2 text-[10px] md:text-xs font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-white border border-white/30 shadow-sm'>
            <span className='bg-white text-blue-900 rounded-full p-0.5'>
              <svg
                className='w-2.5 h-2.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='3'
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </span>
            <span>Last Updated: January 2026</span>
          </div>
        </div>

        <div className='absolute bottom-2 right-8 text-[10px] text-white/90 font-medium drop-shadow-md cursor-pointer hover:text-white'>
          Advertising Disclosure
        </div>
      </div>
    </section>
  );
};

export default Hero;

