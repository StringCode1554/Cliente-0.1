import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, UtensilsCrossed, Music2, Trophy } from 'lucide-react';
import fachadaImg from '@assets/aora/fachada.jpg';
import Footer from '@/components/Footer';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Cucina Italiana',
    desc: 'Massa fresca artesanal, risotos e pratos clássicos italianos preparados com ingredientes selecionados.',
    href: '/cardapio',
  },
  {
    icon: Music2,
    title: 'Jazz ao Vivo',
    desc: 'O pianista Vicente Oliveira transforma seu jantar num salotto cultural. Quarta, sexta e sábado, a partir das 19h.',
    href: '/experiencia',
  },
  {
    icon: Trophy,
    title: 'Premiado 2025',
    desc: 'Vencedor do Prêmio Sabores do Sul 2025 nas categorias Melhor Lasanha e Melhor Risoto de Porto Alegre.',
    href: '/premiacoes',
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <img
              src={fachadaImg}
              alt="Aora Cucina — Fachada do casarão histórico"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mb-6 flex items-center gap-4 justify-center"
          >
            <span className="w-10 sm:w-20 h-px bg-primary/60" />
            <span className="uppercase tracking-[0.3em] text-primary/90 text-xs font-medium">Dal 1940 · 4º Distrito · Porto Alegre</span>
            <span className="w-10 sm:w-20 h-px bg-primary/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-6xl md:text-8xl lg:text-[110px] font-medium text-white mb-5 tracking-wider uppercase leading-none text-glow"
          >
            Aora Cucina
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-lg md:text-2xl text-foreground/85 font-light mb-12 tracking-wide font-serif italic max-w-xl"
          >
            Culinária clássica italiana no coração do 4º Distrito
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://wa.me/5551991199387"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-full w-full sm:w-auto text-center"
            >
              Fazer Reserva
            </a>
            <Link
              href="/cardapio"
              className="px-8 py-3.5 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-all duration-300 rounded-full w-full sm:w-auto text-center flex items-center justify-center gap-2 backdrop-blur-sm bg-white/5"
            >
              Ver Cardápio <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-medium tracking-[0.25em] uppercase">Uma experiência completa</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl text-white">O que nos define</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Link href={href} className="block h-full group">
                  <div className="h-full glass-card rounded-3xl p-8 flex flex-col gap-5 group-hover:-translate-y-1.5 transition-transform duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
                      <p className="text-foreground/60 font-light leading-relaxed text-sm">{desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary/60 text-xs uppercase tracking-widest font-medium group-hover:text-primary transition-colors duration-300">
                      Saiba mais <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
