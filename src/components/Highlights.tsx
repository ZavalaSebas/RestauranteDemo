"use client";
import { motion } from 'framer-motion';
import { FaLeaf, FaStar, FaFireAlt, FaHandsHelping } from 'react-icons/fa';

const items = [
  {
    icon: <FaLeaf className="text-2xl text-emerald-500" />,
    title: 'Ingredientes de Origen',
    text: 'Seleccionamos productores locales y sostenibles para garantizar frescura y trazabilidad.'
  },
    {
    icon: <FaFireAlt className="text-2xl text-amber-500" />,
    title: 'Técnica Contemporánea',
    text: 'Ejecución culinaria moderna con respeto por la esencia tradicional costarricense.'
  },
  {
    icon: <FaStar className="text-2xl text-rose-500" />,
    title: 'Experiencia Cuidada',
    text: 'Ambiente íntimo, ritmo de servicio equilibrado y narrativa gastronómica.'
  },
  {
    icon: <FaHandsHelping className="text-2xl text-amber-600" />,
    title: 'Servicio Humano',
    text: 'Calidez auténtica: acompañamos al comensal sin invadir su momento.'
  }
];

export function Highlights() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="valores-heading">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_25%_30%,rgba(255,200,200,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,230,190,0.3),transparent_55%)]" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7}} className="text-center mb-14 md:mb-20">
          <h2 id="valores-heading" className="font-serif text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-amber-600 to-rose-500">Por Qué Nuestra Propuesta Destaca</h2>
          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-neutral-600">Más que un menú: una curaduría sensorial que conecta territorio, historia y técnica para crear memorias y no solo platos.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{opacity:0, y:25}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, margin:'-80px'}}
              transition={{duration:0.55, delay: idx * 0.07}}
              className="group relative rounded-3xl p-6 bg-white/70 backdrop-blur border border-rose-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-rose-50 via-amber-50 to-transparent" />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-inner ring-1 ring-rose-100/60">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-rose-800 tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-tr from-rose-200/30 to-amber-200/30 blur-2xl group-hover:scale-125 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
