import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import zaffariImg from '@assets/aora/zaffari_aora.jpg';

export default function Awards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="premiacoes" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 blur-3xl transform skew-x-12"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Awards Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Reconhecimento</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">
                Aclamado pela crítica,<br />amado pelos clientes.
              </h2>
            </motion.div>

            <div className="space-y-10">
              {/* Award 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 bg-primary/10">
                  <span className="font-serif text-2xl text-primary">1º</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Prêmio Sabores do Sul 2025</h3>
                  <p className="text-foreground/70 mb-2 font-light">Vencedor em duas categorias prestigiadas na gastronomia de Porto Alegre:</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white tracking-wide uppercase">Melhor Lasanha</span>
                    <span className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white tracking-wide uppercase">Melhor Risoto</span>
                  </div>
                </div>
              </motion.div>

              {/* Award 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0 bg-primary/10">
                  <span className="font-serif text-xl text-primary font-bold">4.8</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="fill-primary text-primary" />
                    ))}
                    <span className="ml-2 text-sm text-foreground/50">(467 avaliações no Google)</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">#707 de 8.989 restaurantes</h3>
                  <p className="text-foreground/70 font-light italic mb-4">"A pavlova é dos deuses, o gorgonzola e noci estava espetacular. Ótimo serviço e um ambiente lindo."</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay hover:bg-transparent transition-colors duration-500"></div>
              <img src={zaffariImg} alt="Aora Cucina na mídia" className="w-full h-full object-cover" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 right-8 z-20 glass-card px-6 py-4 border border-white/20">
                <p className="text-xs uppercase tracking-widest text-white/80 mb-1">Destaque</p>
                <p className="font-serif text-xl text-white">Revista Estilo Zaffari</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}