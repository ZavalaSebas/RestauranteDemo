import { Hero } from '@/components/Hero';
import { SignatureDish } from '@/components/SignatureDish';
import { MenuSection } from '@/components/MenuSection';
import { MenuQR } from '@/components/MenuQR';
import { LocationMap } from '@/components/LocationMap';
import { SiteFooter } from '@/components/SiteFooter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-white to-amber-50">
      <Hero />
      {/* QR posicionado a la derecha, ligeramente superpuesto sin crear hueco visual */}
      <div className="container mx-auto px-6 max-w-6xl -mt-10 md:-mt-14 relative z-20">
        <div className="flex justify-end">
          <MenuQR />
        </div>
      </div>
  <SignatureDish />
      <MenuSection />
      <LocationMap />
      <SiteFooter />
    </div>
  );
}

