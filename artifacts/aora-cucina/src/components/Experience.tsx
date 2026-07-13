import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import salaoImg from '@assets/aora/salao1.jpg';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experiencia" className="py-24 md:py-32 bg-[#1a1512] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img 
              src={salaoImg} 
              alt="Ambiente do salão com piano" 
              className="w-full h-full object-cover grayscale-[30%] mix-blend-luminosity opacity-80" 
            />
            
            <div className="absolute bottom-10 left-10 right-10 z-20">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-primary/60"></span>
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Atmosfera</span>
              </div>
              <h3 className="text-3xl font-serif text-white">Como uma cena de cinema.</h3>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
                Massa fresca, <br />
                <span className="italic text-primary/90">Jazz ao vivo.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg"
            >
              <p>
                A experiência na Aora Cucina vai além do paladar. Posicionado estrategicamente no salão 
                principal, nosso piano não é apenas decoração — ele é o coração da nossa atmosfera.
              </p>
              
              <div className="glass-card p-8 mt-8 border-l-4 border-l-primary/60">
                <h4 className="text-white font-serif text-2xl mb-4">Música ao Vivo</h4>
                <p className="mb-6">O pianista <strong className="text-white font-medium">Vicente Oliveira</strong> comanda as noites, transformando seu jantar num verdadeiro salotto cultural.</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="border border-white/10 py-3 rounded-sm">
                    <span className="block text-primary text-sm uppercase tracking-wider font-bold">Quarta</span>
                    <span className="text-white/60 text-xs mt-1 block">A partir 19h</span>
                  </div>
                  <div className="border border-white/10 py-3 rounded-sm">
                    <span className="block text-primary text-sm uppercase tracking-wider font-bold">Sexta</span>
                    <span className="text-white/60 text-xs mt-1 block">A partir 19h</span>
                  </div>
                  <div className="border border-white/10 py-3 rounded-sm">
                    <span className="block text-primary text-sm uppercase tracking-wider font-bold">Sábado</span>
                    <span className="text-white/60 text-xs mt-1 block">A partir 19h</span>
                  </div>
                </div>
              </div>
              
              <p className="italic text-foreground/60 mt-6 border-t border-white/10 pt-6">
                "As velas acesas, o piano ao fundo, o cheiro de massa no ar. É sofisticação sem pretensão."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}