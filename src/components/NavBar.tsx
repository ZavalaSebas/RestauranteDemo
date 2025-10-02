"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const links = [
  { href: '#top', label: 'Inicio' },
  { href: '#experiencia', label: 'Quiénes Somos' },
  { href: '#menu', label: 'Menú' },
  { href: '#contacto', label: 'Contacto' },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
      ? 'backdrop-blur-md bg-white/95 shadow-sm border-b border-rose-100/60'
      : 'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.70)_38%,rgba(255,255,255,0.35)_68%,rgba(255,255,255,0)_100%)]'} `} id="top">
      <nav className="mx-auto px-6 md:px-10 max-w-7xl h-24 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-amber-600 to-rose-500 leading-none">Restaurante Demo</a>
        <div className="hidden md:flex items-center gap-10 text-base md:text-lg font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-rose-800/90 hover:text-rose-700 transition" onClick={close}>{l.label}</a>
          ))}
          <a href="https://wa.me/50622223333?text=Hola%20quiero%20reservar" className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 shadow-lg shadow-rose-600/25 hover:bg-rose-500 transition text-base"><FaWhatsapp className="text-lg" /> Reservar</a>
        </div>
        <button aria-label="Abrir menú" className="md:hidden inline-flex flex-col justify-center gap-1.5 w-12 h-12 rounded-xl border border-rose-200 bg-white/70 backdrop-blur text-rose-700 shadow-sm" onClick={()=>setOpen(o=>!o)}>
          <span className={`h-0.5 w-6 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-current transition ${open ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </nav>
      {/* Overlay móvil */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-40 bg-white/85 backdrop-blur-md">
            <motion.div initial={{y:40, opacity:0}} animate={{y:0, opacity:1}} exit={{y:10, opacity:0}} transition={{type:'spring', stiffness:140, damping:18}} className="absolute top-28 inset-x-0 px-8">
              <div className="rounded-3xl border border-rose-200/70 bg-white/80 backdrop-blur-lg shadow-2xl p-10 flex flex-col gap-8">
                <ul className="flex flex-col gap-5 text-lg font-medium">
                  {links.map(l => (
                    <li key={l.href}><a href={l.href} onClick={close} className="block text-rose-800/90 hover:text-rose-700 transition">{l.label}</a></li>
                  ))}
                </ul>
                <a href="https://wa.me/50622223333?text=Hola%20quiero%20reservar" onClick={close} className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white px-8 py-4 font-semibold shadow-lg shadow-rose-600/30 hover:brightness-110 transition text-lg"><FaWhatsapp className="text-xl" /> Reservar</a>
                <button onClick={close} className="text-sm text-rose-500 hover:text-rose-700 self-center">Cerrar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}