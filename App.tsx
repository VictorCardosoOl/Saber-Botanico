import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastProvider } from './context/ToastContext';
import { CollectionProvider } from './context/CollectionContext';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import Vases from './pages/Vases';
import Soil from './pages/Soil';
import Care from './pages/Care';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Lenis handles scrolling, but manual reset is good for route changes.
    // However, with Lenis, we might rely on its own scrollTo, but window.scrollTo
    // is intercepted by Lenis in root mode usually.
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper animado de rotas
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/glosario" element={<Glossary />} />
        <Route path="/vasos" element={<Vases />} />
        <Route path="/solo" element={<Soil />} />
        <Route path="/cuidados" element={<Care />} />
      </Routes>
    </AnimatePresence>
  );
};

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-paper text-forest-dark border border-gold/20 shadow-xl flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300 group"
          aria-label="Voltar ao topo"
        >
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <SmoothScroll>
        <ToastProvider>
          <CollectionProvider>
            <HashRouter>
              <ScrollToTop />
              <Header />
              
              <div className="w-full relative overflow-x-hidden min-h-screen flex flex-col bg-forest-dark">
                <main className="flex-1 w-full">
                  <AnimatedRoutes />
                </main>
                <Footer />
                <BackToTop />
              </div>

            </HashRouter>
          </CollectionProvider>
        </ToastProvider>
      </SmoothScroll>
    </HelmetProvider>
  );
};

export default App;