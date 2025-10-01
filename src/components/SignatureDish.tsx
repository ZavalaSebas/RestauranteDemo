"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroMesa from '@/../public/images/hero-mesa.webp';

export function SignatureDish() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply" style={{backgroundImage:'radial-gradient(circle at 25% 35%, #f59e0b 0, transparent 60%), radial-gradient(circle at 75% 65%, #f43f5e 0, transparent 55%)'}} />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="grid md:grid-cols-5 gap-14 items-center">
          <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.8}} className="md:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/15 to-rose-500/15 border border-amber-200/50 px-4 py-1 text-xs uppercase tracking-widest text-amber-700 font-semibold shadow-sm backdrop-blur">
              Exclusivo
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-amber-700 via-orange-700 to-rose-700">
              Nuestra Experiencia <span className="relative whitespace-nowrap">Emblema</span>
            </h2>
            <p className="mt-6 text-neutral-600 text-lg leading-relaxed max-w-md">
              Un menú degustación curado que celebra productos locales, precisión técnica y creatividad estética. Cada pase busca equilibrio entre textura, aroma y emoción.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 mt-1" />Secuencia de 6 tiempos adaptados a temporada</li>
              <li className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 mt-1" />Maridaje opcional de vinos nacionales y biodinámicos</li>
              <li className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 mt-1" />Curva de intensidad progresiva y cierre aromático</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="https://wa.me/50622223333?text=Quiero%20reservar%20el%20degustacion" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/30 hover:shadow-rose-600/40 hover:brightness-110 transition">
                Reservar Degustación
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-6 py-3 font-medium text-amber-700 border border-amber-200 hover:bg-amber-50 transition">
                Ver Menú
              </a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.92}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.9, delay:0.15}} className="md:col-span-3 relative">
            <div className="relative rounded-[2.2rem] overflow-hidden shadow-2xl border border-white/40 bg-white/30 backdrop-blur-xl ring-1 ring-amber-100">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.35), transparent 60%)'}} />
              <Image src={heroMesa} alt="Mesa de degustación" placeholder="blur" className="object-cover" sizes="(min-width:1024px) 55vw, 100vw" priority />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur text-amber-50 text-xs font-medium tracking-wide shadow">
                  6 tiempos • 2 horas • Inmersivo
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/60 backdrop-blur text-amber-900 text-xs font-medium tracking-wide shadow">
                  Reservas Limitadas
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 -z-10 opacity-60 blur-3xl bg-gradient-to-tr from-amber-200 via-rose-200 to-orange-100 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
