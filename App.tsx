import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Lenis from 'lenis';

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
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Configuração do Lenis Scroll para inércia sutil ("Luxury Feel")
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Duração maior cria sensação de peso/luxo
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing exponencial suave
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Mantém scroll nativo no mobile para melhor UX
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <ScrollToTop />
          <Header />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/glosario" element={<Glossary />} />
              <Route path="/vasos" element={<Vases />} />
              <Route path="/solo" element={<Soil />} />
              <Route path="/cuidados" element={<Care />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;