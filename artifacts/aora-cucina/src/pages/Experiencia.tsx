import { motion } from 'framer-motion';
import { Music2, Clock } from 'lucide-react';
import salaoImg from '@assets/aora/salao1.jpg';
import Footer from '@/components/Footer';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const schedule = [
  { day: 'Quarta', time: 'A partir das 19h' },
  { day: 'Sexta', time: 'A partir das 19h' },
  { day: 'Sábado', time: 'A partir das 19h' },
];

export default function Experiencia() {
  return (
    <div className="bg-background text-foreground pt-24 min-h-screen">
      {/* Hero image */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-72 md:h-[480px] rounded-3xl overflow-hidden"
        >
          <img
            src={salaoImg}
            alt="Salão com piano — Jazz ao vivo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-primary text-xs uppercase tracking-widest font-bold">Atmosfera</span>
            <p className="font-serif text-3xl md:text-5xl text-white mt-2 leading-tight">
              Como uma cena<br />de cinema.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Text */}
          <div>
            <motion.span {...fade()} className="text-primary font-medium tracking-[0.22em] uppercase text-xs">
              A experiência
            </motion.span>
            <motion.h1 {...fade(0.1)} className="font-serif text-4xl md:text-6xl text-white mt-3 mb-6 leading-tight">
              Massa fresca,<br /><span className="italic text-primary/90">Jazz ao vivo.</span>
            </motion.h1>
            <motion.div {...fade(0.18)} className="space-y-5 text-foreground/70 font-light leading-relaxed">
              <p>
                A experiência na Aora Cucina vai além do paladar. Posicionado estrategicamente no salão
                principal, nosso piano não é apenas decoração — ele é o coração da nossa atmosfera.
              </p>
              <p className="italic text-foreground/50 border-l-2 border-primary/40 pl-5 font-serif">
                "As velas acesas, o piano ao fundo, o cheiro de massa no ar. É sofisticação sem pretensão."
              </p>
            </motion.div>
          </div>

          {/* Jazz Card */}
          <motion.div {...fade(0.14)}>
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                  <Music2 size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-white">Música ao Vivo</h2>
                  <p className="text-foreground/50 text-sm">com Vicente Oliveira ao piano</p>
                </div>
              </div>

              <p className="text-foreground/70 font-light mb-8 leading-relaxed">
                O pianista <strong className="text-white font-medium">Vicente Oliveira</strong> comanda as noites,
                transformando seu jantar num verdadeiro salotto cultural de Jazz e bossa nova.
              </p>

              <div className="space-y-3">
                {schedule.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between bg-white/4 border border-white/8 rounded-2xl px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-white font-medium">{day}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/50 text-sm">
                      <Clock size={13} />
                      {time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-primary/8 border border-primary/20 rounded-2xl">
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-1">Dica</p>
                <p className="text-foreground/65 text-sm font-light">Reserve com antecedência para garantir mesa nas noites de Jazz — são as mais concorridas.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
