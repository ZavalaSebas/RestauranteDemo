import { Hero } from '@/components/Hero';
import { MenuSection } from '@/components/MenuSection';
import { Highlights } from '@/components/Highlights';
import { MenuQR } from '@/components/MenuQR';
import { LocationMap } from '@/components/LocationMap';
import { SiteFooter } from '@/components/SiteFooter';
import { SignatureDish } from '@/components/SignatureDish';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-white to-amber-50">
      <Hero />
      <div className="container mx-auto px-6 max-w-6xl -mt-12 relative z-10">
        <div className="flex justify-end">
          <MenuQR />
        </div>
      </div>
  <SignatureDish />
    <MenuSection />
    <Highlights />
      <LocationMap />
      <SiteFooter />
    </div>
  );
}

