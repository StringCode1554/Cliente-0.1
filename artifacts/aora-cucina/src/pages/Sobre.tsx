import { motion } from 'framer-motion';
import interiorImg from '@assets/aora/interior1.jpg';
import salaoImg from '@assets/aora/salao2.jpg';
import Footer from '@/components/Footer';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Sobre() {
  return (
    <div className="bg-background text-foreground pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div {...fade()} className="mb-2">
          <span className="text-primary font-medium tracking-[0.22em] uppercase text-xs">La Nostra Storia</span>
        </motion.div>
        <motion.h1 {...fade(0.08)} className="font-serif text-5xl md:text-7xl text-white leading-tight mt-3">
          Um refúgio italiano<br />no <span className="italic text-primary/90">4º Distrito</span>
        </motion.h1>
      </section>

      {/* Image Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-auto lg:h-[560px]">
          <motion.div
            {...fade(0.1)}
            className="lg:col-span-3 rounded-3xl overflow-hidden relative"
          >
            <img
              src={interiorImg}
              alt="Interior histórico do casarão"
              className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            <div className="absolute bottom-6 left-6">
              <span className="text-xs uppercase tracking-widest text-primary font-medium">Construído em 1940</span>
              <p className="text-white font-serif text-xl mt-1">Interior do casarão</p>
            </div>
          </motion.div>
          <motion.div
            {...fade(0.18)}
            className="lg:col-span-2 rounded-3xl overflow-hidden relative"
          >
            <img
              src={salaoImg}
              alt="Salão principal"
              className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-serif text-xl">Salão principal</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Text */}
      <section className="px-4 sm:px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div {...fade(0.1)} className="space-y-6 text-foreground/75 font-light leading-relaxed text-lg">
            <p>
              Instalada num casarão tombado da década de 1940, a Aora Cucina nasceu do encontro
              entre a vasta experiência gastronômica do chef{' '}
              <strong className="text-white font-medium">Cláudio Mesquita</strong> e
              da restauratrice <strong className="text-white font-medium">Alícia Weiss</strong>.
            </p>
            <p>
              O que inicialmente seria uma marcenaria, transformou-se num dos restaurantes mais acolhedores
              de Porto Alegre. O toque artesanal permaneceu: paredes de tijolo aparente originais, janelas restauradas,
              móveis garimpados e peças em madeira esculpidas pelo próprio chef.
            </p>
          </motion.div>

          <motion.div {...fade(0.18)}>
            <h3 className="font-serif text-2xl text-white mb-7">Três ambientes singulares</h3>
            <ul className="space-y-5">
              {[
                {
                  title: 'Salão Principal',
                  desc: 'Intimista, com vista para a cozinha aberta onde a mágica acontece.',
                },
                {
                  title: 'Mezanino',
                  desc: 'Exclusivo e reservado, perfeito para celebrações menores.',
                },
                {
                  title: 'Jardim Externo',
                  desc: 'Pet friendly, com pelegos nas cadeiras e luzinhas que criam a atmosfera perfeita de uma noite toscana.',
                },
              ].map(({ title, desc }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <span className="text-white font-medium font-serif text-lg">{title}</span>
                    <p className="text-foreground/60 font-light mt-1">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
