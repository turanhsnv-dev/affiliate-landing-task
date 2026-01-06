export interface Brand {
  brandName: string;
  rating: number;
  reviewCount: string;
  price: string;
  features: string[];
  affiliateUrl: string;
  badge?: string;
}

export const brands: Brand[] = [
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

