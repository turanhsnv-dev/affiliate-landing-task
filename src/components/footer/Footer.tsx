import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 relative border-t border-gray-800">
      
      <div className="max-w-[1200px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <div className="w-10 h-10 text-white">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-white fill-transparent"/>
                 <path d="M9 12h6m-3-3v6" strokeLinecap="round" className="stroke-white" />
               </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-xl uppercase tracking-tight">Top Home</span>
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Warranty Services</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 text-sm font-medium text-gray-300">
            <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Reviews</a>
                <a href="#" className="hover:text-white transition-colors">Advertiser Disclosure</a>
            </div>
            <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Learn</a>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
            <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
                New Jersey Residents: The product being offered is a service contract and is separate and distinct from any product or service warranty which may be provided by the home builder or manufacturer.
            </p>
        </div>

        <div className="text-center text-xs text-gray-400">
          <p>&copy; 2026 Tophomewarrantyservices. All Rights Reserved.</p>
        </div>
      </div>

      <a href="#" className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all hidden md:flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>

    </footer>
  );
}

