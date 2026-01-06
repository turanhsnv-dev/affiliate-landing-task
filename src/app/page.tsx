import { Suspense } from 'react';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import TopPicks from '@/components/topPicks/TopPicks'; 
import BrandCards from '@/components/brandCards/BrandCards';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow bg-gray-50">
        <Hero />
        <Suspense fallback={<div className="py-8 bg-white border-b border-gray-100"><div className="max-w-[1200px] mx-auto px-8">Loading...</div></div>}>
          <TopPicks /> 
        </Suspense>
        <Suspense fallback={<div className="py-16 bg-gray-50"><div className="max-w-[1200px] mx-auto px-8">Loading...</div></div>}>
          <BrandCards />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}