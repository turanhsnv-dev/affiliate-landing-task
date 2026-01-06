import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TopPicks from '@/components/TopPicks'; 
import BrandCards from '@/components/BrandCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow bg-gray-50">
        <Hero />
        <TopPicks /> 
        <BrandCards />
      </main>
      <Footer />
    </div>
  );
}