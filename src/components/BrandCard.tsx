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
  // GCLID Injection Logic
  // Extract gclid from URL and append directly to affiliate URL (no separators)
  const finalUrl = useMemo(() => {
    return appendGclidToUrl(affiliateUrl);
  }, [affiliateUrl]);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {badge && (
        <div className="bg-yellow-400 text-gray-900 text-center py-2 font-bold text-sm">
          {badge}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{brandName}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">({reviewCount})</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{price}</div>
            <div className="text-sm text-gray-500">per month</div>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}

