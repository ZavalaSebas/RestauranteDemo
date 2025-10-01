"use client";
import { motion } from 'framer-motion';
import { categories, menuItems, formatPrice, MenuCategoryKey } from '@/data/menu';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { generateMenuPdf } from '@/utils/generateMenuPdf';

export function MenuSection() {
  const [active, setActive] = useState<MenuCategoryKey>('entradas');

  const filtered = useMemo(() => menuItems.filter(i => i.category === active), [active]);

  const [pdfLoading, setPdfLoading] = useState(false);

  async function downloadPDF() {
    try {
      setPdfLoading(true);
      await generateMenuPdf(menuItems);
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-100/60 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 tracking-tight">Nuestro Menú</h2>
            <p className="mt-2 text-neutral-600 max-w-xl">Ingredientes frescos, técnicas contemporáneas y el equilibrio perfecto entre tradición e innovación.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {categories.map(c => (
              <button key={c.key} onClick={()=>setActive(c.key)} className={`px-4 py-2 rounded-full text-sm font-medium transition border ${active===c.key ? 'bg-amber-600 text-white border-amber-600 shadow' : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-50'}`}>{c.label}</button>
            ))}
            <button onClick={downloadPDF} disabled={pdfLoading} className="px-4 py-2 rounded-full text-sm font-medium bg-rose-600 text-white hover:bg-rose-500 disabled:opacity-60 disabled:cursor-not-allowed transition shadow flex items-center gap-2">
              {pdfLoading && <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />}
              {pdfLoading ? 'Generando...' : 'Descargar PDF'}
            </button>
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filtered.map(item => (
            <motion.div key={item.id} layout initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="group rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-sm hover:shadow-lg transition">
              <div className="relative h-44 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  priority={item.id==='bruschetta'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3 text-white/90 font-semibold drop-shadow">{formatPrice(item.price)}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-amber-800 text-lg">{item.name}</h3>
                <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
