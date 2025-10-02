"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { getImageMeta } from '@/data/imageMeta';

export function Hero() {
  return (
    <>
  <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28 bg-rose-50">
      {/* Fondo con imagen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mesa.webp"
          alt="Mesa servida en ambiente cálido"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={getImageMeta('/images/hero-mesa.webp')?.blurDataURL}
          className="object-cover object-center" />
        {/* Capa de oscurecimiento + gradiente para mejorar contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/50 via-rose-800/40 to-amber-800/35 mix-blend-multiply" />
        {/* Textura suave radial encima */}
        <div className="absolute inset-0 pointer-events-none opacity-35" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,170,140,0.35), transparent 60%), radial-gradient(circle at 80% 60%, rgba(255,120,150,0.30), transparent 60%)'}} />
      </div>
      {/* Light glaze para un look ligeramente lavado y elegante */}
      <div className="absolute inset-0 z-0 bg-white/5 backdrop-blur-[1px]" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center md:text-left relative z-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-amber-600 to-rose-500 drop-shadow-sm">
              Sabores locales con alma
            </h1>
            <p className="mt-6 text-lg md:text-xl text-rose-50/95 leading-relaxed max-w-xl drop-shadow">
              Cocina de autor costarricense: ingredientes frescos, identidad local y técnica contemporánea en cada plato.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:justify-start justify-center">
              <a href="https://wa.me/50622223333?text=Hola%20quiero%20reservar" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-6 py-3 font-medium shadow-lg shadow-green-600/30 hover:bg-green-500 transition">
                <FaWhatsapp /> Reservar por WhatsApp
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-rose-100/40 px-6 py-3 font-medium text-rose-50 hover:bg-white/25 transition shadow">
                Ver Menú
              </a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.15}} viewport={{once:true}} className="relative z-10">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden shadow-lg border border-amber-100">
                <Image src="/images/hero-plato.webp" alt="Plato creativo" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" placeholder="blur" blurDataURL={getImageMeta('/images/hero-plato.webp')?.blurDataURL} />
              </div>
              <div className="relative h-40 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-rose-100 col-start-2 row-span-2">
                <Image src="/images/hero-mesa.webp" alt="Mesa elegante" fill sizes="(min-width:768px) 25vw, 60vw" priority className="object-cover" placeholder="blur" blurDataURL={getImageMeta('/images/hero-mesa.webp')?.blurDataURL} />
              </div>
              <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden shadow-lg border border-orange-100">
                <Image src="/images/hero-ingredientes.webp" alt="Ingredientes frescos" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" placeholder="blur" blurDataURL={getImageMeta('/images/hero-ingredientes.webp')?.blurDataURL} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur px-4 py-3 rounded-xl border border-amber-200 shadow text-sm font-medium text-amber-900">
                Calidad & Sabor
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    {/* Transición de color inferior para evitar corte blanco entre Hero y la siguiente sección */}
    <div className="relative -mt-8 h-24 pointer-events-none select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/0 via-rose-50/75 to-amber-50" />
    </div>
    </>
  );
}

