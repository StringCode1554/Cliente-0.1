import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react';
import fachadaImg from '@assets/aora/fachada.jpg';
import Footer from '@/components/Footer';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const hours = [
  { days: 'Terça a Sexta', time: '19h – 23h' },
  { days: 'Sábado (Almoço)', time: '12h – 15h' },
  { days: 'Sábado (Jantar)', time: '19h – 23h' },
  { days: 'Domingo e Segunda', time: 'Fechado' },
];

export default function Reservas() {
  return (
    <div className="bg-background text-foreground pt-24 min-h-screen">
      {/* Header */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.span {...fade()} className="text-primary font-medium tracking-[0.22em] uppercase text-xs">
          Venha nos visitar
        </motion.span>
        <motion.h1 {...fade(0.1)} className="font-serif text-5xl md:text-7xl text-white mt-3 leading-tight">
          Reserve sua mesa
        </motion.h1>
      </section>

      <section className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Info Cards */}
          <div className="lg:col-span-3 space-y-5">

            {/* WhatsApp CTA */}
            <motion.a
              {...fade(0.1)}
              href="https://wa.me/5551991199387"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-3xl p-8 border border-[#25D366]/20 hover:border-[#25D366]/50 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors duration-300">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#25D366] text-xs font-bold uppercase tracking-widest mb-1">Reserva via WhatsApp</p>
                  <h2 className="font-serif text-2xl text-white group-hover:text-[#25D366] transition-colors duration-300">(51) 99119-9387</h2>
                  <p className="text-foreground/50 text-sm mt-1">Recomendamos fazer reserva antecipada</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/10 transition-colors duration-300">
                  →
                </div>
              </div>
            </motion.a>

            {/* Hours */}
            <motion.div {...fade(0.16)} className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-xl text-white">Horários</h2>
              </div>
              <div className="space-y-3">
                {hours.map(({ days, time }) => (
                  <div key={days} className="flex items-center justify-between py-3 border-b border-white/6 last:border-0">
                    <span className="text-foreground/65 text-sm">{days}</span>
                    <span className={`text-sm font-medium ${time === 'Fechado' ? 'text-foreground/35' : 'text-white'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Address */}
            <motion.div {...fade(0.22)} className="glass-card rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-white mb-2">Endereço</h2>
                  <p className="text-foreground/65 font-light mb-4">
                    Av. Pátria, 272 — São Geraldo<br />
                    4º Distrito, Porto Alegre – RS
                  </p>
                  <a
                    href="https://maps.google.com/?q=Aora+Cucina+Av+Patria+272+Porto+Alegre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium underline underline-offset-4 decoration-primary/40"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div {...fade(0.28)} className="glass-card rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl text-white mb-4">Siga-nos</h2>
                  <a
                    href="https://www.instagram.com/aoracucina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-white/15 hover:border-primary/50 text-foreground/70 hover:text-primary px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300"
                  >
                    <Instagram size={16} /> @aoracucina
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="sticky top-28 rounded-3xl overflow-hidden aspect-[3/4] border border-white/10">
              <img
                src={fachadaImg}
                alt="Fachada Aora Cucina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <img src="/logo.png" alt="Aora" className="w-14 h-14 rounded-full border border-primary/30 mb-4 object-contain" />
                <p className="font-serif text-xl text-white">4º Distrito</p>
                <p className="text-foreground/50 text-sm mt-1">Porto Alegre, RS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
