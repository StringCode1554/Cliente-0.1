import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import interiorImg from '@assets/aora/interior1.jpg';
import salaoImg from '@assets/aora/salao2.jpg';

export default function About() {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Merge refs
  const setRefs = (node: any) => {
    ref.current = node;
    inViewRef(node);
  };

  return (
    <section id="sobre" className="py-24 md:py-32 relative bg-background" ref={setRefs}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Images */}
          <div className="relative order-2 lg:order-1 h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 left-0 w-3/4 h-[450px] rounded-sm overflow-hidden border border-white/10"
            >
              <img src={interiorImg} alt="Interior do casarão histórico" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-2/3 h-[350px] rounded-sm overflow-hidden border border-primary/20 shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay"></div>
              <img src={salaoImg} alt="Detalhes do salão" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              animate={inView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -45 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -top-10 -left-10 w-40 h-40 border border-primary/30 rounded-full flex items-center justify-center -z-10"
            >
              <div className="w-36 h-36 border border-primary/10 rounded-full"></div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">La Nostra Storia</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
                Um refúgio italiano<br/>no <span className="italic text-primary/90">4º Distrito</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg"
            >
              <p>
                Instalada num casarão tombado da década de 1940, a Aora Cucina nasceu do encontro 
                entre a vasta experiência gastronômica do chef <strong className="text-white font-medium">Cláudio Mesquita</strong> e 
                da restauratrice <strong className="text-white font-medium">Alícia Weiss</strong>.
              </p>
              <p>
                O que inicialmente seria uma marcenaria, transformou-se num dos restaurantes mais acolhedores 
                de Porto Alegre. O toque artesanal permaneceu: paredes de tijolo aparente originais, janelas restauradas, 
                móveis garimpados e peças em madeira esculpidas pelo próprio chef.
              </p>
              
              <div className="pt-6 border-t border-white/10 mt-8">
                <h3 className="font-serif text-2xl text-white mb-4">Três ambientes singulares</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 flex-shrink-0">✦</span>
                    <span><strong className="text-white font-medium">Salão Principal:</strong> Intimista, com vista para a cozinha aberta onde a mágica acontece.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 flex-shrink-0">✦</span>
                    <span><strong className="text-white font-medium">Mezanino:</strong> Exclusivo e reservado, perfeito para celebrações menores.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 flex-shrink-0">✦</span>
                    <span><strong className="text-white font-medium">Jardim Externo:</strong> Pet friendly, com pelegos nas cadeiras e luzinhas que criam a atmosfera perfeita de uma noite toscana.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}