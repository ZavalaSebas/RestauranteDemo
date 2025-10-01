"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,140,0,0.25), transparent 60%), radial-gradient(circle at 80% 60%, rgba(255,99,71,0.25), transparent 60%)'}} />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 drop-shadow-sm">
            Restaurante Demo Gourmet
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Experiencia culinaria contemporánea con ingredientes de temporada, técnicas modernas y pasión por el detalle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/34600000000?text=Hola%20quiero%20reservar" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-6 py-3 font-medium shadow-lg shadow-green-600/30 hover:bg-green-500 transition">
              <FaWhatsapp /> Reservar por WhatsApp
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-amber-200 px-6 py-3 font-medium text-amber-700 hover:bg-amber-50 transition shadow">
              Ver Menú
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
