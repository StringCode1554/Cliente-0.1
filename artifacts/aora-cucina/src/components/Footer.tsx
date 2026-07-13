import { Link } from 'wouter';
import { Instagram, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Nossa História', href: '/sobre' },
  { label: 'Cardápio', href: '/cardapio' },
  { label: 'Premiações', href: '/premiacoes' },
  { label: 'Jazz & Experiência', href: '/experiencia' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Reservas', href: '/reservas' },
];

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/6 pt-16 pb-10 mt-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Aora Cucina" className="w-11 h-11 rounded-full object-contain border border-primary/20" />
              <span className="font-serif font-semibold text-2xl tracking-widest text-white uppercase">Aora Cucina</span>
            </div>
            <p className="text-foreground/45 font-light max-w-xs mb-7 font-serif italic leading-relaxed text-sm">
              "Refúgio acolhedor onde culinária clássica italiana, arquitetura histórica e Jazz ao vivo se encontram."
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/aoracucina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5551991199387"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-serif text-base mb-5 tracking-wide">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/45 hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-base mb-5 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/45 text-sm">
                <MapPin size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Av. Pátria, 272 — São Geraldo,<br />Porto Alegre, RS</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/45 text-sm">
                <Phone size={15} className="text-primary flex-shrink-0" />
                <span>(51) 99119-9387</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/45 text-sm">
                <Instagram size={15} className="text-primary flex-shrink-0" />
                <span>@aoracucina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-foreground/30 text-xs">
            &copy; {new Date().getFullYear()} Aora Cucina. Todos os direitos reservados.
          </p>
          <p className="text-foreground/30 text-xs">
            4º Distrito · Porto Alegre, RS · Dal 1940
          </p>
        </div>
      </div>
    </footer>
  );
}
