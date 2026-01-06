'use client';

import React from 'react';
import BrandCard from './BrandCard';

const brands = [
  {
    brandName: 'American Home Shield',
    rating: 4.5,
    reviewCount: '12,500+',
    price: '$49',
    features: [
      'Comprehensive coverage for major systems',
      '24/7 customer service',
      'Flexible plan options',
      'Quick claim processing',
    ],
    affiliateUrl: 'https://brand-offer.com/click123',
    badge: 'Best Overall',
  },
  {
    brandName: 'Choice Home Warranty',
    rating: 4.3,
    reviewCount: '8,900+',
    price: '$39',
    features: [
      'Affordable monthly rates',
      'No service call fees',
      'Coverage for appliances & systems',
      'Easy online claims',
    ],
    affiliateUrl: 'https://brand-offer.com/click456',
  },
  {
    brandName: 'First American Home Warranty',
    rating: 4.2,
    reviewCount: '6,200+',
    price: '$45',
    features: [
      'Trusted by homeowners nationwide',
      'Comprehensive protection plans',
      'Experienced service network',
      'Transparent pricing',
    ],
    affiliateUrl: 'https://brand-offer.com/click789',
  },
  {
    brandName: 'Select Home Warranty',
    rating: 4.1,
    reviewCount: '5,800+',
    price: '$42',
    features: [
      'Budget-friendly options',
      'Coverage for HVAC, plumbing, electrical',
      '30-day money-back guarantee',
      'Fast service response',
    ],
    affiliateUrl: 'https://brand-offer.com/click321',
  },
];

export default function BrandCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare Top Home Warranty Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect home warranty plan that fits your needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <BrandCard key={index} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

