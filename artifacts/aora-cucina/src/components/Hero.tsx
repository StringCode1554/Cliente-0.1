import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import fachadaImg from '@assets/aora/fachada.jpg';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={fachadaImg} 
            alt="Aora Cucina Fachada" 
            className="w-full h-full object-cover object-center" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 flex items-center gap-4 justify-center"
        >
          <span className="w-12 sm:w-24 h-[1px] bg-primary/60"></span>
          <span className="uppercase tracking-[0.3em] text-primary/90 text-sm font-medium">Dal 1940</span>
          <span className="w-12 sm:w-24 h-[1px] bg-primary/60"></span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-4 tracking-wider text-glow uppercase leading-tight"
        >
          Aora Cucina
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-2xl text-foreground/90 font-light mb-12 tracking-wide font-serif italic max-w-2xl"
        >
          Culinária clássica italiana no coração do 4º Distrito
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="https://wa.me/5551991199387" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Fazer Reserva
          </a>
          <a 
            href="#cardapio" 
            onClick={(e) => handleScroll(e, '#cardapio')}
            className="px-10 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto glass-card"
          >
            Ver Cardápio
          </a>
        </motion.div>
      </div>

      <motion.a 
        href="#sobre"
        onClick={(e) => handleScroll(e, '#sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-primary transition-colors flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Descubra</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="opacity-70" />
        </motion.div>
      </motion.a>
    </section>
  );
}