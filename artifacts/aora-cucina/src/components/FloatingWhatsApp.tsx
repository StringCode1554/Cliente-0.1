import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5551991199387"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contatar por WhatsApp"
    >
      <MessageCircle size={28} className="drop-shadow-sm" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10 font-medium">
        Faça sua reserva
      </span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
    </motion.a>
  );
}