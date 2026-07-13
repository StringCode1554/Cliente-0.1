import { motion } from 'framer-motion';
import { Star, Award, Quote } from 'lucide-react';
import zaffariImg from '@assets/aora/zaffari_aora.jpg';
import Footer from '@/components/Footer';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const reviews = [
  { text: 'A pavlova é dos deuses, o gorgonzola e noci estava espetacular. Ótimo serviço e um ambiente lindo.', author: 'Google Review' },
  { text: 'Lugar incrível, comida maravilhosa e Jazz ao vivo. Fiquei encantada! Ambiente aconchegante e especial.', author: 'Google Review' },
  { text: 'Restaurante simplesmente perfeito. O risoto de funghi é de outro mundo. Voltarei muitas vezes.', author: 'Google Review' },
];

export default function Premiacoes() {
  return (
    <div className="bg-background text-foreground pt-24 min-h-screen">
      {/* Header */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.span {...fade()} className="text-primary font-medium tracking-[0.22em] uppercase text-xs">
          Reconhecimento
        </motion.span>
        <motion.h1 {...fade(0.1)} className="font-serif text-5xl md:text-7xl text-white mt-3 leading-tight">
          Aclamado pela crítica,<br />amado pelos clientes.
        </motion.h1>
      </section>

      {/* Main Award Section */}
      <section className="px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Awards */}
          <div className="space-y-5">
            {/* Sabores do Sul */}
            <motion.div
              {...fade(0.12)}
              className="glass-card rounded-3xl p-8 border border-primary/20"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">2025</span>
                  <h2 className="font-serif text-2xl text-white mt-1 mb-2">Prêmio Sabores do Sul</h2>
                  <p className="text-foreground/65 font-light text-sm mb-5">
                    Vencedor em duas categorias prestigiadas na gastronomia de Porto Alegre:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                      🏆 Melhor Lasanha
                    </span>
                    <span className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                      🏆 Melhor Risoto
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Rating */}
            <motion.div {...fade(0.2)} className="glass-card rounded-3xl p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-2xl text-yellow-400 font-bold">4.8</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-foreground/45 text-xs">467 avaliações</span>
                  </div>
                  <h2 className="font-serif text-2xl text-white mb-1">#707 de 8.989 restaurantes</h2>
                  <p className="text-foreground/55 text-sm font-light">Google Maps · Porto Alegre, RS</p>
                </div>
              </div>
            </motion.div>

            {/* Press */}
            <motion.div {...fade(0.28)} className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-primary/50" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Na Mídia</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Revista Estilo Zaffari', 'Destino POA', 'Sabores do Sul', 'GaúchaZH Destemperados'].map((pub) => (
                  <span key={pub} className="bg-white/5 border border-white/10 text-foreground/70 px-4 py-2 rounded-full text-xs font-medium">
                    {pub}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative">
              <img src={zaffariImg} alt="Aora Cucina na mídia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card rounded-2xl p-5 border border-white/15">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Destaque Editorial</p>
                  <p className="font-serif text-lg text-white">Revista Estilo Zaffari</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Quotes */}
      <section className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto">
        <motion.div {...fade()} className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white">O que dizem nossos clientes</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map(({ text, author }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-7 flex flex-col gap-4"
            >
              <Quote size={20} className="text-primary/50 flex-shrink-0" />
              <p className="text-foreground/70 font-serif italic leading-relaxed flex-1">"{text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={12} className="fill-primary text-primary" />)}
                </div>
                <span className="text-foreground/40 text-xs">{author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
