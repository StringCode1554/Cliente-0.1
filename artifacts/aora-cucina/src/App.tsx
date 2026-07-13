import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '@/pages/Home';
import Sobre from '@/pages/Sobre';
import Cardapio from '@/pages/Cardapio';
import Premiacoes from '@/pages/Premiacoes';
import Experiencia from '@/pages/Experiencia';
import Galeria from '@/pages/Galeria';
import Reservas from '@/pages/Reservas';
import NotFound from '@/pages/not-found';
import FloatingNavbar from '@/components/FloatingNavbar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/cardapio" component={Cardapio} />
          <Route path="/premiacoes" component={Premiacoes} />
          <Route path="/experiencia" component={Experiencia} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/reservas" component={Reservas} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="relative bg-background text-foreground overflow-x-hidden font-sans">
            <FloatingNavbar />
            <AnimatedRoutes />
            <FloatingWhatsApp />
          </div>
          <Toaster />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
