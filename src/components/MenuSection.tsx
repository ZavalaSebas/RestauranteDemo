"use client";
import { motion } from 'framer-motion';
import { categories, menuItems, formatPrice, MenuCategoryKey } from '@/data/menu';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import jsPDF from 'jspdf';

export function MenuSection() {
  const [active, setActive] = useState<MenuCategoryKey>('entradas');

  const filtered = useMemo(() => menuItems.filter(i => i.category === active), [active]);

  function downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Menú Restaurante Demo', 14, 20);
    doc.setFontSize(12);
    let y = 32;
    categories.forEach(cat => {
      doc.setFontSize(14);
      doc.text(cat.label, 14, y); y += 6;
      doc.setFontSize(11);
      menuItems.filter(m=>m.category===cat.key).forEach(item => {
        const line = `${item.name} - ${formatPrice(item.price)}`;
        doc.text(line, 16, y); y += 5;
        const split = doc.splitTextToSize(item.description, 170);
        doc.text(split, 18, y); y += (split.length * 5) + 2;
        if (y > 270) { doc.addPage(); y = 20; }
      });
      y += 4;
    });
    doc.save('menu.pdf');
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
            <button onClick={downloadPDF} className="px-4 py-2 rounded-full text-sm font-medium bg-rose-600 text-white hover:bg-rose-500 transition shadow">Descargar PDF</button>
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filtered.map(item => (
            <motion.div key={item.id} layout initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="group rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-sm hover:shadow-lg transition">
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
