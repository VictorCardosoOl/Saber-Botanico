import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SmoothScrolling from './components/SmoothScrolling'; // Novo componente
import { ToastProvider } from './context/ToastContext';
import { CollectionProvider } from './context/CollectionContext';

// Pages
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import Vases from './pages/Vases';
import Soil from './pages/Soil';
import Care from './pages/Care';

/**
 * DOC: ScrollToTop
 * Garante que ao mudar de rota, a visualização volte ao topo imediatamente.
 * Em SPAs, isso não é automático.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // window.scrollTo nativo funciona bem com o Lenis wrapper
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // DOC: Removido mode="wait". Isso permite que a próxima página 
    // comece a carregar IMEDIATAMENTE enquanto a antiga faz fade-out.
    // Isso melhora drasticamente a percepção de velocidade (Fluidity).
    <AnimatePresence>
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

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ToastProvider>
        <CollectionProvider>
          <SmoothScrolling> {/* Wrapper de Performance (Lenis) */}
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
          </SmoothScrolling>
        </CollectionProvider>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;