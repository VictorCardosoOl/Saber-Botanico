import React from 'react';
import RitualsSection from '../components/RitualsSection';
import DiagnosticsGuide from '../components/DiagnosticsGuide';
import SEO from '../components/SEO';
import { PageTransition } from '../components/Animation';

const Care: React.FC = () => {
  return (
    <PageTransition className="pt-20 bg-forest-dark">
      <SEO title="Rituais de Cuidado" description="Guias de luz, rega e umidade. Aprenda a ler os sinais de suas plantas e estabelecer rituais de manutenção." />
      <RitualsSection />
      <DiagnosticsGuide />
    </PageTransition>
  );
};

export default Care;