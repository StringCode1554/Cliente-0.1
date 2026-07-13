import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Awards from '@/components/Awards';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="relative bg-background text-foreground overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Awards />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}