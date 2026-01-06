'use client';

import React from 'react';
import { appendGclidToUrl } from '@/utils/gclid';
import { topPicks } from '@/data/topPicks';

export default function TopPicks() {
  return (
    <section className="bg-white py-8 border-b border-gray-100 relative z-20 -mt-1">
      <div className="max-w-[1200px] mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPicks.map((pick, index) => {
            const finalUrl = appendGclidToUrl(pick.link);

            return (
              <a 
                key={index} 
                href={finalUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                <div className={` shrink-0 w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg shadow-sm ${pick.color}`}>
                  #{pick.rank}
                </div>

                <div className="ml-4 grow">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                    {pick.title}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {pick.brandName}
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                    <span className="text-yellow-500">★</span> {pick.rating}/10
                  </div>
                </div>

                <div className="text-gray-300 group-hover:text-blue-600 transition-colors">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                   </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

