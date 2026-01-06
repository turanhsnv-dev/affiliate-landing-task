import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[300px] flex items-center text-white overflow-hidden">
      
      {/* 1. ARXA FON ŞƏKLİ (Ev və Ailə) */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          src="/hero.avif" 
          alt="Family home background" 
          className="w-full h-full object-contain object-center"
        />
        {/* 2. OVERLAY (Tünd Göy rəngli lay - yazını oxunaqlı etmək üçün) */}
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
      </div>

      {/* 3. MƏZMUN (Content) */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Top Home Warranty Companies 2026
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Be prepared for the unexpected and avoid unnecessary expenses. 
            Compare 2026's top home warranty companies and keep your systems running as it should.
          </p>

          {/* Last Updated Badge */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium bg-white/10 px-3 py-1.5 rounded text-gray-100 border border-white/20">
            <span className="bg-white text-blue-900 rounded-full p-0.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Last Updated: January 2026</span>
          </div>
        </div>
        
        {/* Advertising Disclosure (Sağ küncdə) */}
        <div className="absolute bottom-4 right-4 text-[10px] md:text-xs text-gray-400 opacity-70 hover:opacity-100 cursor-pointer">
          Advertising Disclosure
        </div>
      </div>
    </section>
  );
};

export default Hero;