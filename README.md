# Home Warranty Affiliate Landing Page

A professional affiliate landing page for home warranty services, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Header, Hero & Footer** - Professional layout matching reference site structure
- ✅ **Top Picks** - Quick access to top-rated brands
- ✅ **Brand Cards** - Interactive cards with ratings, pricing, and features
- ✅ **Section-based Structure** - Professional component organization
- ✅ **GCLID Injection** - Automatic Google Click ID tracking parameter injection
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Modern Stack** - Next.js 16 with App Router, React 19

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GCLID Injection Testing

The page implements GCLID (Google Click ID) injection functionality. To test:

1. Navigate to: `http://localhost:3000/?gclid=TEST_VALUE`
2. Check any "Visit Site" button - the gclid value will be appended to the affiliate URL
3. Example: `https://brand-offer.com/click123` becomes `https://brand-offer.com/click123TEST_VALUE`

For detailed testing instructions, see [GCLID_TESTING.md](./GCLID_TESTING.md).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/
│   ├── header/
│   │   └── Header.tsx     # Site header with navigation & mobile sidebar
│   ├── hero/
│   │   └── Hero.tsx       # Hero section with background image
│   ├── topPicks/
│   │   └── TopPicks.tsx  # Top picks section
│   ├── brandCards/
│   │   ├── BrandCards.tsx # Brand cards container
│   │   └── BrandCard.tsx # Individual brand card component
│   └── footer/
│       └── Footer.tsx     # Site footer
├── data/
│   ├── brands.ts          # Brands data
│   └── topPicks.ts        # Top picks data
└── utils/
    └── gclid.ts           # GCLID injection utility functions
```

## Technical Details

### GCLID Injection Logic

The GCLID injection works as follows:
- Extracts `gclid` parameter value from the current page URL
- Appends the value directly to all Brand Card affiliate links
- **No separators** are used (no `?`, `&`, or `=`)
- Implementation: `src/utils/gclid.ts` and `src/components/brandCards/BrandCard.tsx`

### Technologies Used

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

## Build for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
