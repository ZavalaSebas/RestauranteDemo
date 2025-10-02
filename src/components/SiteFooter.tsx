import { FaInstagram, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-amber-900 text-amber-50 py-14">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-semibold mb-3">Restaurante Demo</h3>
          <p className="text-sm text-amber-100 leading-relaxed">Cocina de autor que fusiona sabores locales con técnicas internacionales para una experiencia única.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 tracking-wide uppercase text-xs text-amber-200">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-300" />
              <a href="tel:+50622223333" className="hover:underline" aria-label="Llamar al restaurante">+506 2222 3333</a>
            </li>
            <li className="flex items-center gap-2"><FaLocationDot className="text-amber-300" /><span>San José, Costa Rica</span></li>
            <li>
              <a href="mailto:reservas@demo.com?subject=Reserva%20Restaurante&body=Hola%2C%20quiero%20reservar%20para%20(fecha)%20a%20las%20(hora)%20para%20(número%20de%20personas)." className="hover:underline" aria-label="Enviar correo de reservas">reservas@demo.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 tracking-wide uppercase text-xs text-amber-200">Redes</h4>
          <div className="flex gap-5 text-2xl">
            <a aria-label="Instagram" href="https://instagram.com/restaurante.demo" target="_blank" rel="noopener" className="hover:text-rose-200 transition"> <FaInstagram /> </a>
            <a aria-label="Facebook" href="https://facebook.com/restaurantedemo" target="_blank" rel="noopener" className="hover:text-rose-200 transition"> <FaFacebook /> </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 tracking-wide uppercase text-xs text-amber-200">Reservas</h4>
          <p className="text-sm text-amber-100 mb-4">Escríbenos por WhatsApp para confirmar tu mesa al instante.</p>
          <a href="https://wa.me/50622223333?text=Hola%20quiero%20reservar" target="_blank" className="inline-flex rounded-full bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-green-600/30">Reservar</a>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-amber-300">© {new Date().getFullYear()} Restaurante Demo. Todos los derechos reservados.</div>
    </footer>
  );
}
