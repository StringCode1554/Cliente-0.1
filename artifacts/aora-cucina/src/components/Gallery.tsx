import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

import rg1 from '@assets/aora/rg1.jpg';
import rg2 from '@assets/aora/rg2.jpg';
import rg3 from '@assets/aora/rg3.jpg';
import rg4 from '@assets/aora/rg4.jpg';
import mealsImg from '@assets/aora/meals.jpg';
import interior1 from '@assets/aora/interior1.jpg';

const galleryImages = [
  { id: 1, src: rg2, alt: "Ambiente do restaurante", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
  { id: 2, src: rg1, alt: "Detalhes Aora Cucina", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 3, src: mealsImg, alt: "Pratos sendo servidos", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 4, src: rg4, alt: "Salão", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
  { id: 5, src: interior1, alt: "Detalhe da decoração", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { id: 6, src: rg3, alt: "Mezanino", colSpan: "col-span-1 md:col-span-3", rowSpan: "row-span-1" },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">La Galleria</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Nosso Ambiente</h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 italic font-serif max-w-md md:text-right"
          >
            Paredes de tijolo aparente originais, janelas restauradas e a alma da Itália em cada detalhe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${img.colSpan} ${img.rowSpan}`}
              onClick={() => setSelectedImg(img.src)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={32} />
          </button>
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImg} 
            alt="Gallery Lightbox" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm border border-white/10" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}