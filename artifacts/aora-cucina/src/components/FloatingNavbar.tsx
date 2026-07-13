import { useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Home, BookOpen, UtensilsCrossed, Trophy, Music2, Images, CalendarDays,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Início', href: '/' },
  { icon: BookOpen, label: 'Sobre', href: '/sobre' },
  { icon: UtensilsCrossed, label: 'Cardápio', href: '/cardapio' },
  { icon: Trophy, label: 'Prêmios', href: '/premiacoes' },
  { icon: Music2, label: 'Jazz', href: '/experiencia' },
  { icon: Images, label: 'Galeria', href: '/galeria' },
  { icon: CalendarDays, label: 'Reservas', href: '/reservas' },
];

export default function FloatingNavbar() {
  const [location] = useLocation();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto"
      >
        <div className="flex items-center gap-1 sm:gap-2 bg-background/75 backdrop-blur-2xl border border-white/10 rounded-full px-2 sm:px-3 py-2 shadow-2xl shadow-black/60 ring-1 ring-inset ring-white/5">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-white/10 cursor-pointer shrink-0 group"
          >
            <img
              src="/logo.png"
              alt="Aora Cucina"
              className="w-8 h-8 rounded-full object-contain border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"
            />
            <span className="font-serif text-sm font-semibold text-primary/90 tracking-widest uppercase hidden md:block">Aora</span>
          </Link>

          {/* Nav Icons */}
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map(({ icon: Icon, label, href }) => {
              const isActive = href === '/' ? location === '/' : location.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative flex flex-col items-center gap-[3px] px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 group outline-none ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/40 hover:text-foreground/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-primary/12 border border-primary/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon
                    size={15}
                    strokeWidth={isActive ? 2.5 : 1.8}
                    className="relative z-10 transition-transform duration-200 group-hover:scale-110"
                  />
                  <span
                    className={`relative z-10 text-[8px] sm:text-[9px] uppercase tracking-wider font-medium leading-none transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-foreground/30 group-hover:text-foreground/60'
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="pl-2 sm:pl-3 border-l border-white/10 shrink-0">
            <a
              href="https://wa.me/5551991199387"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Reservar</span>
              <span className="sm:hidden">✦</span>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
