import { motion } from 'framer-motion';
import dishesImg from '@assets/aora/dishes.jpg';
import meatImg from '@assets/aora/meat.jpg';
import dessertImg from '@assets/aora/dessert.jpg';
import foodImg from '@assets/aora/food.jpg';
import Footer from '@/components/Footer';

const menuData = [
  {
    category: 'Entradas',
    label: 'Perfeitas para compartilhar',
    items: [
      { name: 'Burrata', desc: 'Cremosa, acompanha caponata, tomatinhos confitados e fatias de focaccia artesanal.', image: foodImg, badge: null },
      { name: 'Batuta de Polpo', desc: 'Finas rodelas de polvo temperadas com azeite e especiarias, acompanhadas de torradas de baguete.', image: null, badge: null },
      { name: 'Húmus', desc: 'Com tomates confit e fatias de focaccia artesanal.', image: null, badge: null },
      { name: 'Salada Aora', desc: 'Folhas frescas, tomates cereja confitados, mini mozzarellas de búfala, parmesão e manjericão.', image: null, badge: null },
    ],
  },
  {
    category: 'Massas & Pratos',
    label: 'Massa fresca artesanal e carnes selecionadas',
    items: [
      { name: 'Lasanha à Bolonhesa', desc: 'Massa fresca artesanal, molho bolonhesa clássico, bechamel cremoso e parmesão.', image: dishesImg, badge: 'Melhor Lasanha POA 2025' },
      { name: 'Gnocchi', desc: 'Em diferentes versões de molhos artesanais. O prato mais pedido da casa.', image: null, badge: 'Mais Pedido' },
      { name: 'Massa com Almôndegas', desc: 'Massa fresca envolvida em molho de tomate caseiro com suculentas almôndegas ao sugo.', image: null, badge: null },
      { name: 'Paleta de Cordeiro', desc: 'Lentamente assada, servida com massa longa fresca salteada na manteiga e sálvia.', image: meatImg, badge: null },
    ],
  },
  {
    category: 'Risotos',
    label: 'O clássico arroz arbório no ponto perfeito',
    items: [
      { name: 'Risoto de Funghi', desc: 'Cremoso, com mix de cogumelos selecionados, manteiga e parmesão.', image: null, badge: 'Melhor Risoto POA 2025' },
      { name: 'Risoto de Frutos do Mar', desc: 'Ingredientes frescos selecionados do mar, com toque de vinho branco.', image: null, badge: null },
    ],
  },
  {
    category: 'Sobremesas',
    label: 'O final perfeito para sua noite',
    items: [
      { name: 'Pavlova', desc: 'Leve e crocante por fora, maravilhosamente macia por dentro, com frutas frescas.', image: dessertImg, badge: 'Clássico' },
      { name: 'Torta de Chocolate', desc: 'Intensa e cremosa, servida com délicat Crème Anglaise.', image: null, badge: null },
      { name: 'Panna Cotta', desc: 'A clássica sobremesa italiana, cremosa e delicada, com calda de frutas.', image: null, badge: null },
    ],
  },
];

export default function Cardapio() {
  return (
    <div className="bg-background text-foreground pt-24 min-h-screen">
      {/* Header */}
      <section className="py-14 md:py-18 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium tracking-[0.22em] uppercase text-xs"
        >
          Il Nostro Menù
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-white mt-3 mb-4"
        >
          Cardápio
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-20 h-px bg-primary/50 mx-auto"
        />
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 pb-20 max-w-7xl mx-auto space-y-24">
        {menuData.map((section, si) => (
          <div key={section.category}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-10 gap-3"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-white">{section.category}</h2>
                <p className="text-foreground/50 italic font-serif mt-1 text-sm">{section.label}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: si * 0.05 + ii * 0.09 }}
                  className="group h-full"
                >
                  <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col bg-card/40 hover:bg-card/70 transition-all duration-300">
                    {item.image && (
                      <div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        {item.badge && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                              {item.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-7 flex flex-col flex-grow">
                      {!item.image && item.badge && (
                        <span className="inline-block border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 w-fit">
                          {item.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-foreground/60 font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
