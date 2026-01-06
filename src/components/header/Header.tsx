'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 md:w-8 md:h-8 text-blue-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-blue-600 fill-white"/>
                <path d="M9 12h6m-3-3v6" strokeLinecap="round" className="stroke-blue-600" />
              </svg>
            </div>
            <div className="flex flex-col leading-none select-none">
              <span className="text-blue-700 font-extrabold text-base md:text-lg uppercase tracking-tight">Top Home</span>
              <span className="text-green-500 font-bold text-[9px] md:text-[10px] uppercase tracking-widest">Warranty Services</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-600 font-semibold text-sm">
            <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Learn</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Sidebar - Right Side */}
        <>
          {/* Overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in duration-300"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col p-4 gap-2">
                <a 
                  href="#" 
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <a 
                  href="#" 
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 transition-all px-4 py-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learn
                </a>
              </nav>
            </div>
          </div>
        </>
      </div>
    </header>
  );
};

export default Header;

