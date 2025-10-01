export function LocationMap() {
  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-orange-50 to-rose-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 tracking-tight">Ubicación</h2>
            <p className="mt-2 text-neutral-600 max-w-xl">Nos encontramos en el corazón de la ciudad, fácil acceso y ambiente acogedor.</p>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur px-5 py-3 rounded-xl border border-amber-200 shadow flex flex-col">
              <span className="font-semibold text-amber-800">Horarios</span>
              <span>Lun - Jue: 12:00 - 23:00</span>
              <span>Vie - Sáb: 12:00 - 00:00</span>
              <span>Dom: 13:00 - 22:00</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-100 aspect-[16/9] bg-white">
          <iframe
            title="Mapa"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019819667257!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cffff!2sRestaurant!5e0!3m2!1ses!2ses!4v0000000000000"
          />
        </div>
      </div>
    </section>
  );
}
