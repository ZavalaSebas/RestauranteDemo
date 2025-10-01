"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export function SignatureDish() {
	return (
		<section id="experiencia" className="relative py-24 md:py-32">
			<div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_70%_30%,rgba(255,200,180,0.35),transparent_60%),radial-gradient(circle_at_20%_70%,rgba(255,160,170,0.35),transparent_55%)]" />
			<div className="container mx-auto px-6 max-w-6xl relative">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className="space-y-6">
						<h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-amber-600 to-rose-500">Nuestra Esencia</h2>
						<p className="text-lg leading-relaxed text-neutral-700 max-w-xl">
							Celebramos los sabores costarricenses con un toque contemporáneo. Ingredientes frescos de productores locales, técnicas cuidadas y creatividad para despertar los sentidos.
						</p>
						<p className="text-neutral-700">
							El resultado es una experiencia cercana, cálida y auténtica que honra la tierra y el mar de Costa Rica.
						</p>
					</motion.div>
					<motion.div initial={{opacity:0, scale:0.96}} whileInView={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.1}} viewport={{once:true}} className="relative">
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-rose-200">
							<Image src="/images/hero-plato.svg" alt="Plato insignia" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent" />
							<div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-xl px-4 py-3 text-sm font-medium text-rose-800 flex items-center justify-between">
								<span>Degustación de la Casa</span>
								<span className="text-rose-500">Edición Limitada</span>
							</div>
						</div>
						<div className="absolute -bottom-8 -right-6 bg-white/80 backdrop-blur rounded-2xl border border-amber-200 shadow-lg p-4 max-w-[240px] text-xs text-amber-900">
							Ingredientes trazables | Productores locales | Innovación respetuosa
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
