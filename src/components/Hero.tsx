"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import heroPlato from '@/../public/images/hero-plato.webp';
import heroMesa from '@/../public/images/hero-mesa.webp';
import heroIngredientes from '@/../public/images/hero-ingredientes.webp';

export function Hero() {
  return (
  <section className="relative overflow-hidden pt-24 pb-6 md:pt-32 md:pb-14 min-h-[600px]">
      {/* Fondo fotográfico grande con capa de atenuación y blur sutil */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroPlato}
          alt=""
          fill
          priority
          placeholder="blur"
          className="object-cover object-center brightness-[0.95] contrast-[1.05] saturate-[1.06]"
          sizes="100vw"
        />
        {/* Overlays simplificados para no cubrir la imagen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-amber-50/25 to-rose-50/20" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.12))]" />
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 drop-shadow-sm">
              Restaurante Demo Gourmet
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">
              Experiencia culinaria contemporánea con ingredientes de temporada, técnicas modernas y pasión por el detalle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:justify-start justify-center">
              <a href="https://wa.me/34600000000?text=Hola%20quiero%20reservar" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-6 py-3 font-medium shadow-lg shadow-green-600/30 hover:bg-green-500 transition">
                <FaWhatsapp /> Reservar por WhatsApp
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-amber-200 px-6 py-3 font-medium text-amber-700 hover:bg-amber-50 transition shadow">
                Ver Menú
              </a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.15}} viewport={{once:true}} className="relative z-10">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden shadow-lg border border-amber-100">
                <Image src={heroPlato} alt="Plato creativo" fill sizes="(min-width:1280px) 25vw, (min-width:768px) 35vw, 60vw" className="object-cover" priority placeholder="blur" />
              </div>
              <div className="relative h-40 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-rose-100 col-start-2 row-span-2">
                <Image src={heroMesa} alt="Mesa elegante" fill sizes="(min-width:1280px) 25vw, (min-width:768px) 35vw, 70vw" priority className="object-cover" placeholder="blur" />
              </div>
              <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden shadow-lg border border-orange-100">
                <Image src={heroIngredientes} alt="Ingredientes frescos" fill sizes="(min-width:1280px) 25vw, (min-width:768px) 35vw, 60vw" className="object-cover" placeholder="blur" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur px-4 py-3 rounded-xl border border-amber-200 shadow text-sm font-medium text-amber-900">
                Calidad & Sabor
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

