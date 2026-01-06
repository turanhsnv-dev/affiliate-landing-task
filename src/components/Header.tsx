import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LOGO: Qalxan və Yazı (Şəklə uyğun) */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 text-blue-600">
             {/* Inline SVG Logo */}
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-blue-600 fill-white"/>
               <path d="M9 12h6m-3-3v6" strokeLinecap="round" className="stroke-blue-600" />
             </svg>
          </div>
          <div className="flex flex-col leading-none select-none">
            <span className="text-blue-700 font-extrabold text-lg uppercase tracking-tight">Top Home</span>
            <span className="text-green-500 font-bold text-[10px] uppercase tracking-widest">Warranty Services</span>
          </div>
        </div>

        {/* NAV LINKLƏRİ: Sadəcə Reviews və Learn */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-semibold text-sm">
          <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Learn</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;