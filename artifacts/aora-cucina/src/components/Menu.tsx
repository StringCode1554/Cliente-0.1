import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dishesImg from '@assets/aora/dishes.jpg';
import meatImg from '@assets/aora/meat.jpg';
import dessertImg from '@assets/aora/dessert.jpg';
import foodImg from '@assets/aora/food.jpg';

const menuData = [
  {
    category: "Entradas",
    description: "Perfeitas para compartilhar",
    items: [
      {
        name: "Burrata",
        description: "Cremosa, acompanha caponata, tomatinhos confitados e fatias de focaccia artesanal.",
        price: null,
        image: foodImg,
        featured: false
      },
      {
        name: "Batuta de Polpo",
        description: "Finas rodelas de polvo temperadas com azeite e especiarias, acompanhadas de torradas de baguete.",
        price: null,
        featured: false
      },
      {
        name: "Húmus",
        description: "Com tomates confit e fatias de focaccia artesanal.",
        price: null,
        featured: false
      },
      {
        name: "Salada Aora",
        description: "Folhas frescas, tomates cereja confitados, mini mozzarellas de búfala, parmesão e manjericão.",
        price: null,
        featured: false
      }
    ]
  },
  {
    category: "Massas & Pratos",
    description: "Massa fresca artesanal e carnes selecionadas",
    items: [
      {
        name: "Lasanha à Bolonhesa",
        description: "Massa fresca artesanal, molho bolonhesa clássico, bechamel cremoso e parmesão.",
        price: null,
        image: dishesImg,
        featured: true,
        badge: "Melhor Lasanha POA 2025"
      },
      {
        name: "Gnocchi",
        description: "Em diferentes versões de molhos artesanais. O prato mais pedido da casa.",
        price: null,
        featured: true,
        badge: "Mais Pedido"
      },
      {
        name: "Massa com Almôndegas",
        description: "Massa fresca envolvida em molho de tomate caseiro com suculentas almôndegas ao sugo.",
        price: null,
        featured: false
      },
      {
        name: "Paleta de Cordeiro",
        description: "Lentamente assada, servida com massa longa fresca salteada na manteiga e sálvia.",
        price: null,
        image: meatImg,
        featured: false
      }
    ]
  },
  {
    category: "Risotos",
    description: "O clássico arroz arbório no ponto perfeito",
    items: [
      {
        name: "Risoto de Funghi",
        description: "Cremoso, com mix de cogumelos selecionados, manteiga e parmesão.",
        price: null,
        featured: true,
        badge: "Melhor Risoto POA 2025"
      },
      {
        name: "Risoto de Frutos do Mar",
        description: "Ingredientes frescos selecionados do mar, com toque de vinho branco.",
        price: null,
        featured: false
      }
    ]
  },
  {
    category: "Sobremesas",
    description: "O final perfeito para sua noite",
    items: [
      {
        name: "Pavlova",
        description: "Leve e crocante por fora, maravilhosamente macia por dentro, com frutas frescas.",
        price: null,
        image: dessertImg,
        featured: true,
        badge: "Clássico"
      },
      {
        name: "Torta de Chocolate",
        description: "Intensa e cremosa, servida com délicat Crème Anglaise.",
        price: null,
        featured: false
      },
      {
        name: "Panna Cotta",
        description: "A clássica sobremesa italiana, cremosa e delicada, com calda de frutas.",
        price: null,
        featured: false
      }
    ]
  }
];

export default function Menu() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="cardapio" className="py-24 md:py-32 bg-[#0c0a09] relative" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Il Nostro Menù</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Cardápio</h2>
            <div className="w-24 h-[1px] bg-primary/50 mx-auto"></div>
          </motion.div>
        </div>

        <div className="space-y-32">
          {menuData.map((section, sectionIdx) => (
            <div key={section.category} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
                className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white">{section.category}</h3>
                  <p className="text-foreground/60 italic font-serif mt-2">{section.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: (sectionIdx * 0.1) + (itemIdx * 0.1) }}
                    className="group h-full"
                  >
                    <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col bg-card/40 hover:bg-card/60 transition-colors">
                      {item.image && (
                        <div className="relative h-56 w-full overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                          />
                          {item.badge && (
                            <div className="absolute top-4 right-4 z-20">
                              <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                                {item.badge}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="p-8 flex flex-col flex-grow relative">
                        {!item.image && item.badge && (
                          <div className="mb-4">
                            <span className="inline-block border border-primary/50 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                              {item.badge}
                            </span>
                          </div>
                        )}
                        <h4 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-foreground/70 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}