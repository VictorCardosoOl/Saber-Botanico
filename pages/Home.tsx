
import React from 'react';
import HeroSection from '../components/HeroSection';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import { PageTransition, Reveal } from '../components/Animation';

// --- Sub-components (Ideally these would be in their own files) ---

const IdeaSection: React.FC = () => (
  <section className="py-32 px-6 bg-paper text-ink relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-forest-dark/5 to-transparent pointer-events-none" aria-hidden="true" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none" aria-hidden="true" />
    
    <div className="container relative z-10">
      <Reveal className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <div className="size-16 border border-gold/30 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl text-gold-dark">psychology_alt</span>
            </div>
        </div>
        
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-dark mb-4 block">Manifesto</span>
        
        <h2 className="text-fluid-h2 font-serif font-light mb-10 text-ink leading-tight">
          O Santuário <span className="italic text-sage">Digital</span>
        </h2>
        
        <div className="relative py-12 mb-10">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-gold/20 font-serif" aria-hidden="true">"</span>
            <p className="font-alt text-2xl md:text-5xl leading-relaxed text-ink/90 relative z-10">
              O Saber Botânico não é apenas um arquivo,<br className="hidden md:block"/> é um ato de preservação estética.
            </p>
            <div className="w-16 h-px bg-gold/50 mx-auto mt-12" aria-hidden="true"></div>
        </div>

        <p className="font-sans text-charcoal/70 leading-loose max-w-3xl mx-auto text-sm md:text-lg">
          Nascemos da interseção entre a ciência biológica e o design contemplativo. 
          Aqui, celebramos a botânica como uma disciplina de <strong className="text-ink font-serif italic text-lg">paciência e observação</strong>. 
          Um espaço dedicado ao estudo profundo de espécies que desafiam a botânica convencional, curado para aqueles que entendem que cuidar de uma planta é, em última análise, cuidar do próprio tempo.
        </p>
      </Reveal>
    </div>
  </section>
);

const AboutMeSection: React.FC = () => (
  <section className="py-24 md:py-32 bg-forest-dark text-white relative overflow-hidden">
    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true"></div>

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <Reveal className="lg:col-span-5 relative group" delay={0.2}>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none"></div>
              <LazyImage 
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735" 
                  alt="Estúdio de Design Biofílico" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
              />
          </div>
          
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-forest/90 backdrop-blur-md border border-white/10 p-6 shadow-2xl max-w-[180px]">
               <div className="flex flex-col items-center text-center">
                   <span className="text-4xl font-serif text-gold leading-none mb-1">IV</span>
                   <div className="w-8 h-px bg-white/20 my-2"></div>
                   <span className="text-[10px] uppercase tracking-widest text-white/60">Gerações de<br/>Botânica</span>
               </div>
          </div>

          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 -z-10 hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" aria-hidden="true"></div>
        </Reveal>
        
        <div className="lg:col-span-7 lg:pl-16">
          <Reveal delay={0.4}>
            <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-gold" aria-hidden="true"></span>
                <span className="text-gold text-xs font-mono uppercase tracking-[0.25em]">O Estúdio</span>
            </div>
            
            <h2 className="text-fluid-h2 font-serif mb-8 leading-[1.1]">
              Traduzindo a complexidade <br/> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sage via-white to-sage">da natureza em código.</span>
            </h2>
            
            <p className="font-alt text-2xl text-white/90 mb-8 border-l-2 border-gold/30 pl-6 leading-relaxed">
              "Somos um coletivo de desenvolvedores e paisagistas. Nossa missão é digitalizar a experiência tátil do cultivo raro."
            </p>
            
            <div className="space-y-6 text-gray-400 font-light leading-loose text-sm md:text-lg max-w-2xl">
              <p>
                O Saber Botânico começou como um caderno de campo para catalogar variações genéticas de Araceas e evoluiu para uma plataforma de referência.
                Acreditamos no **Slow Web**: interfaces que respiram, interações que mimetizam o crescimento orgânico e conteúdo que exige leitura atenta.
              </p>
              <p>
                Cada planta listada em nosso arquivo foi cultivada, estudada e fotografada em nosso estúdio. Não vendemos produtos; curamos experiências biológicas para ambientes internos.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
                 {['Curadoria Genética', 'Engenharia de Solo', 'Arquitetura Verde'].map(tag => (
                     <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/60 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all cursor-default">
                         {tag}
                     </span>
                 ))}
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <PageTransition>
      <SEO title="Saber Botânico" description="Onde o luxo encontra a botânica. Explore guias de cultivo, galeria de espécies raras e design biofílico." />
      <HeroSection />
      <IdeaSection />
      <AboutMeSection />
    </PageTransition>
  );
};

export default Home;
    