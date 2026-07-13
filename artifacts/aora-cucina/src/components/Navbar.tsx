import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Premiações', href: '#premiacoes' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Reservas', href: '#reservas' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-background/85 backdrop-blur-lg border-b border-white/5 py-3 shadow-lg' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'body')} 
          className="flex items-center gap-3 group"
        >
          <img src="/logo.png" alt="Aora Cucina Logo" className="w-10 h-10 object-contain rounded-full border border-primary/30 group-hover:border-primary transition-colors duration-300" />
          <span className="font-serif font-semibold text-xl tracking-widest text-primary hidden sm:block uppercase">Aora</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://wa.me/5551991199387"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium uppercase tracking-widest text-sm"
          >
            Reservar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-serif text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5551991199387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground text-center font-medium uppercase tracking-widest text-sm w-full"
              >
                Fazer Reserva
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}