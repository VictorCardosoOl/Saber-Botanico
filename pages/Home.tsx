import React from 'react';
import HeroSection from '../components/HeroSection';
import LazyImage from '../components/LazyImage';

const IdeaSection = () => (
  <section className="py-24 px-6 bg-paper text-ink relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <span className="material-symbols-outlined text-4xl text-gold mb-6">psychology_alt</span>
      <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-ink">O Santuário Digital</h2>
      <div className="w-24 h-px bg-gold/50 mx-auto mb-10"></div>
      <p className="font-alt text-xl md:text-2xl leading-relaxed text-ink/80 mb-8">
        "O Saber Botânico não é uma loja, mas um templo de conhecimento."
      </p>
      <p className="font-sans text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Este projeto nasceu da necessidade de desconectar o ato de jardinagem do consumismo desenfreado. Aqui, celebramos a botânica como ciência e arte. Um fórum dedicado ao estudo, à troca de saberes e à preservação de espécies, onde o valor de uma planta não é medido em moeda, mas em sua história biológica e no bem-estar que proporciona.
      </p>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
  </section>
);

const AboutMeSection = () => (
  <section className="py-24 px-6 bg-forest-dark text-white relative">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 pointer-events-none"></div>
            {/* Imagem Otimizada com Lazy Loading */}
            <LazyImage 
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop" 
                alt="Jardineiro trabalhando com plantas" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest border border-gold/30 p-4 flex flex-col justify-center items-center text-center z-20 shadow-xl">
             <span className="text-3xl font-serif text-gold">15+</span>
             <span className="text-[10px] uppercase tracking-widest text-sage">Anos de Cultivo</span>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold text-xs font-mono uppercase tracking-widest">Sobre o Autor</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Cultivando mais do que <br/> <span className="italic text-sage">apenas plantas.</span></h2>
        <p className="font-alt text-xl text-white/80 mb-6">
          Olá, sou um desenvolvedor júnior e jardineiro sênior.
        </p>
        <p className="text-gray-400 leading-relaxed mb-8 font-sans font-light">
          Minha jornada começou com uma pequena suculenta e floresceu em uma paixão por criar ecossistemas sustentáveis dentro de casa. Criei este espaço para documentar rituais de cuidado e compartilhar as nuances que transformam um polegar verde em um botânico amador. Acredito que a tecnologia e a natureza podem coexistir para criar interfaces que trazem paz e sabedoria.
        </p>
        <div className="flex gap-4">
             <span className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60 hover:border-gold hover:text-gold transition-colors cursor-default">Design Biofílico</span>
             <span className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60 hover:border-gold hover:text-gold transition-colors cursor-default">React & Natureza</span>
        </div>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <IdeaSection />
      <AboutMeSection />
    </>
  );
};

export default Home;