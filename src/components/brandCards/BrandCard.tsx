'use client';

import React, { useMemo } from 'react';
import { appendGclidToUrl } from '@/utils/gclid';

interface BrandCardProps {
  brandName: string;
  rating: number;
  reviewCount: string;
  price: string;
  features: string[];
  affiliateUrl: string;
  badge?: string;
}

export default function BrandCard({
  brandName,
  rating,
  reviewCount,
  price,
  features,
  affiliateUrl,
  badge,
}: BrandCardProps) {
  
  const finalUrl = useMemo(() => {
    return appendGclidToUrl(affiliateUrl);
  }, [affiliateUrl]);

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden">
      
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-5 pb-5 border-b border-gray-100">
          <div className="flex-1">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {brandName}
              </h3>
              {badge && (
                <span className="inline-block mt-1.5 md:mt-0 md:ml-2 bg-blue-600 text-white text-[9px] font-semibold uppercase tracking-wide py-0.5 px-2 rounded z-10">
                  {badge}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold text-gray-900">{rating}</span>
                <span className="text-gray-400 text-sm">/5</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-200'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">({reviewCount})</span>
            </div>
          </div>
          
          {/* Price Section */}
          <div className="text-right ml-4">
            <div className="text-xs text-gray-500 mb-1 font-medium">Starting from</div>
            <div className="text-2xl font-bold text-gray-900">
              {price}
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Features</h4>
            <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-200">
              Available
            </span>
          </div>
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <svg 
                  className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-100">
          <a
            href={finalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-4 rounded-md transition-colors duration-200 text-sm"
          >
            Visit Site
          </a>
          
          <div className="flex items-center justify-center gap-1.5 mt-3 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer group/phone">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs font-medium">Call: (888) 555-0123</span>
          </div>
        </div>
      </div>
    </div>
  );
}

