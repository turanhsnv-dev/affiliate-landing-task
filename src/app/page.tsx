import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandCards from '@/components/BrandCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <BrandCards />
      </main>
      <Footer />
    </div>
  );
}
