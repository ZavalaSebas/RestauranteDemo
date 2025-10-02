"use client";
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import { generateMenuPdf } from '@/utils/generateMenuPdf';
import { menuItems } from '@/data/menu';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden={!visible} className={`fixed z-50 right-4 md:right-8 bottom-6 md:bottom-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
      <div className="flex flex-col gap-3 items-end">
        <button
          onClick={() => generateMenuPdf(menuItems)}
          className="group relative inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-5 py-2.5 text-sm font-medium text-rose-700 border border-rose-200 shadow hover:bg-white hover:shadow-lg transition"
        >
          <FaFileDownload className="text-rose-500 group-hover:scale-110 transition" /> Menú PDF
        </button>
        <a
          href="https://wa.me/50622223333?text=Hola%20quiero%20reservar"
          target="_blank"
          rel="noopener"
          className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white px-6 py-3 font-semibold shadow-lg shadow-rose-600/30 hover:brightness-110 active:scale-[0.98] transition"
          aria-label="Reservar por WhatsApp"
        >
          <FaWhatsapp className="text-lg" /> Reservar
          <span className="absolute inset-0 rounded-full ring-2 ring-rose-400/40 animate-pulse pointer-events-none" />
        </a>
      </div>
    </div>
  );
}
