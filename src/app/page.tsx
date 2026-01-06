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
        <TopPicks /> 
        <BrandCards />
      </main>
      <Footer />
    </div>
  );
}