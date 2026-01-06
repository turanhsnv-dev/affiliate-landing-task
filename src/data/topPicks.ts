export interface TopPick {
  rank: number;
  title: string;
  brandName: string;
  rating: number;
  img: string;
  link: string;
  color: string;
}

export const topPicks: TopPick[] = [
  {
    rank: 1,
    title: 'Best Overall',
    brandName: 'American Home Shield',
    rating: 9.9,
    img: '/ahs-logo.png',
    link: 'https://brand-offer.com/click123',
    color: 'bg-blue-600',
  },
  {
    rank: 2,
    title: 'Best Value',
    brandName: 'Choice Home Warranty',
    rating: 9.8,
    img: '/choice-logo.png',
    link: 'https://brand-offer.com/click456',
    color: 'bg-green-600',
  },
  {
    rank: 3,
    title: 'Most Popular',
    brandName: 'Select Home Warranty',
    rating: 9.5,
    img: '/select-logo.png',
    link: 'https://brand-offer.com/click789',
    color: 'bg-orange-500',
  },
];

