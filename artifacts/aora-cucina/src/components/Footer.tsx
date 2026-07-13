import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Aora Cucina Logo" className="w-12 h-12 object-contain" />
              <span className="font-serif font-semibold text-2xl tracking-widest text-white uppercase">Aora</span>
            </div>
            <p className="text-foreground/50 font-light max-w-sm mb-8 italic font-serif">
              "Refúgio acolhedor onde culinária clássica italiana, arquitetura histórica e Jazz ao vivo se encontram."
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/aoracucina" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/5551991199387" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-foreground/50 hover:text-primary transition-colors text-sm">Nossa História</a></li>
              <li><a href="#cardapio" className="text-foreground/50 hover:text-primary transition-colors text-sm">Cardápio</a></li>
              <li><a href="#premiacoes" className="text-foreground/50 hover:text-primary transition-colors text-sm">Premiações</a></li>
              <li><a href="#experiencia" className="text-foreground/50 hover:text-primary transition-colors text-sm">Jazz & Atmosfera</a></li>
              <li><a href="#galeria" className="text-foreground/50 hover:text-primary transition-colors text-sm">Galeria</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/50 text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Av. Pátria, 272 — São Geraldo, Porto Alegre, RS</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/50 text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>(51) 99119-9387</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-xs">
            &copy; {currentYear} Aora Cucina. Todos os direitos reservados.
          </p>
          <p className="text-foreground/40 text-xs flex items-center gap-1">
            Feito com dedicação
          </p>
        </div>
      </div>
    </footer>
  );
}