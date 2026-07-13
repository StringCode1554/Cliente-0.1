import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import fachadaImg from '@assets/aora/fachada.jpg';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="reservas" className="py-24 md:py-32 bg-[#0c0a09] relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="glass-card overflow-hidden border border-white/10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-card/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Visite-nos</h2>
                <p className="text-foreground/70 font-light text-lg">Faça sua reserva e viva a experiência Aora Cucina no 4º Distrito.</p>
              </motion.div>

              <div className="space-y-10">
                {/* Horários */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-3">Horário de Funcionamento</h4>
                    <div className="space-y-2 text-foreground/80 font-light">
                      <p className="flex justify-between border-b border-white/5 pb-2">
                        <span>Terça a Sexta</span>
                        <span className="text-white font-medium">19h – 23h</span>
                      </p>
                      <p className="flex justify-between border-b border-white/5 pb-2">
                        <span>Sábado (Almoço)</span>
                        <span className="text-white font-medium">12h – 15h</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sábado (Jantar)</span>
                        <span className="text-white font-medium">19h – 23h</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Endereço */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-2">Endereço</h4>
                    <p className="text-foreground/80 font-light mb-4">
                      Av. Pátria, 272 — São Geraldo<br />
                      4º Distrito, Porto Alegre - RS
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Aora+Cucina+Av+Patria+272+Porto+Alegre" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors text-sm uppercase tracking-widest font-medium underline underline-offset-4 decoration-primary/50"
                    >
                      Abrir no Mapa
                    </a>
                  </div>
                </motion.div>

                {/* Contato */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-2">Reservas</h4>
                    <p className="text-foreground/80 font-light mb-4">Recomendamos fazer reserva antecipada via WhatsApp.</p>
                    <div className="flex gap-4">
                      <a 
                        href="https://wa.me/5551991199387" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-[#128C7E] transition-colors"
                      >
                        (51) 99119-9387
                      </a>
                      <a 
                        href="https://www.instagram.com/aoracucina" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-white/20 text-white hover:border-primary hover:text-primary px-6 py-2 rounded-sm text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <Instagram size={16} /> @aoracucina
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image/Map Placeholder */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img src={fachadaImg} alt="Fachada Aora Cucina" className="w-full h-full object-cover grayscale-[20%]" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo.png" alt="Aora Cucina Logo" className="w-32 h-32 opacity-80 mix-blend-screen" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}