export function LocationMap() {
  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-orange-50 to-rose-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 tracking-tight">Ubicación</h2>
            <p className="mt-2 text-neutral-600 max-w-xl">Nos encontramos en el corazón de San José, Costa Rica, fácil acceso y ambiente acogedor.</p>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="bg-amber-900/90 text-amber-50 backdrop-blur px-5 py-4 rounded-xl border border-amber-800/60 shadow flex flex-col leading-relaxed min-w-[220px]">
              <span className="font-semibold text-white tracking-wide uppercase text-xs mb-2">Horarios</span>
              <span className="text-amber-100">Lun - Jue: <strong className="text-amber-50">12:00 - 23:00</strong></span>
              <span className="text-amber-100">Vie - Sáb: <strong className="text-amber-50">12:00 - 00:00</strong></span>
              <span className="text-amber-100">Dom: <strong className="text-amber-50">13:00 - 22:00</strong></span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.064729611656!2d-84.09089758022461!3d9.934006288708745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50e6e0b%3A0x8b4c0e35f5e8e7a9!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1696400000000"
          />
        </div>
      </div>
    </section>
  );
}
