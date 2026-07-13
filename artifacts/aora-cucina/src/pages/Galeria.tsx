import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import rg1 from '@assets/aora/rg1.jpg';
import rg2 from '@assets/aora/rg2.jpg';
import rg3 from '@assets/aora/rg3.jpg';
import rg4 from '@assets/aora/rg4.jpg';
import mealsImg from '@assets/aora/meals.jpg';
import interior1 from '@assets/aora/interior1.jpg';
import fachadaImg from '@assets/aora/fachada.jpg';
import salao1 from '@assets/aora/salao1.jpg';
import Footer from '@/components/Footer';

const images = [
  { src: rg2, alt: 'Ambiente Aora Cucina', size: 'col-span-2 row-span-2' },
  { src: rg1, alt: 'Detalhes do espaço', size: 'col-span-1 row-span-1' },
  { src: mealsImg, alt: 'Pratos sendo servidos', size: 'col-span-1 row-span-1' },
  { src: fachadaImg, alt: 'Fachada do casarão', size: 'col-span-1 row-span-1' },
  { src: interior1, alt: 'Interior histórico', size: 'col-span-1 row-span-1' },
  { src: salao1, alt: 'Salão com piano', size: 'col-span-2 row-span-1' },
  { src: rg4, alt: 'Vista do salão', size: 'col-span-1 row-span-1' },
  { src: rg3, alt: 'Mezanino', size: 'col-span-3 row-span-1' },
];

export default function Galeria() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground pt-24 min-h-screen">
      {/* Header */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.22em] uppercase text-xs"
          >
            La Galleria
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-white mt-3"
          >
            Nosso Ambiente
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-foreground/50 font-serif italic max-w-sm md:text-right"
        >
          Paredes de tijolo aparente, janelas restauradas e a alma da Itália em cada detalhe.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.size}`}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-400 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <ZoomIn size={17} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={selected}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
