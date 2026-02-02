import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import LazyImage from '../components/LazyImage';
import PlantCard from '../components/PlantCard';
import { PLANTS } from '../constants';

// --- SEÇÃO 1: MANIFESTO (Refatorada para Visual Grid) ---
const ManifestoSection = () => (
  <section className="py-24 md:py-32 bg-paper relative overflow-hidden">
    <div className="container relative z-10">
      <div className="flex flex-col items-center text-center mb-20">
        <span className="font-mono text-[10px] uppercase tracking-widest-xl text-gold-dark mb-4">Nossa Filosofia</span>
        <h2 className="text-fluid-h2 font-serif text-ink mb-6">A Botânica como <span className="italic text-sage">Alta Cultura</span></h2>
        <div className="w-16 h-px bg-gold/50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-ink/5 py-12">
        {[
          { icon: 'temp_preferences_custom', title: 'Curadoria', text: 'Cada espécime é selecionado não apenas pela raridade, mas pela sua arquitetura genética e história.' },
          { icon: 'science', title: 'Ciência', text: 'Protocolos de cultivo baseados em botânica avançada, longe dos mitos populares de jardinagem.' },
          { icon: 'palette', title: 'Estética', text: 'O encontro sublime entre o design de interiores e a natureza selvagem domesticada.' }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="size-16 mb-6 rounded-full bg-white border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
              <span className="material-symbols-outlined text-3xl text-gold-dark font-light">{item.icon}</span>
            </div>
            <h3 className="font-serif text-2xl text-ink mb-4">{item.title}</h3>
            <p className="font-sans text-sm text-ink/60 leading-relaxed max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- SEÇÃO 2: DESTAQUES DO ACERVO (Nova) ---
const FeaturedCollection = () => {
  // Seleciona as 3 primeiras plantas ou destaques
  const featuredPlants = PLANTS.slice(0, 3);

  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-ink/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-2 block">Acervo Disponível</span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink">Espécimes <span className="italic text-gold-dark">Raros</span></h2>
          </div>
          <Link to="/glosario" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/50 hover:text-gold-dark transition-colors border-b border-transparent hover:border-gold pb-1">
            Ver Glossário Completo
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlants.map(plant => (
             <div key={plant.id} className="h-full">
                <PlantCard plant={plant} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SEÇÃO 3: DIÁRIO DE CAMPO / EDITORIAL (Nova) ---
const JournalSection = () => {
  const articles = [
    {
      id: 1,
      category: 'Técnica',
      title: 'A Dormência das Alocasias',
      excerpt: 'Por que perder folhas no inverno é um sinal de saúde, não de morte.',
      image: 'https://images.unsplash.com/photo-1599423423927-951390d79549?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Design',
      title: 'Monocromatismo Verde',
      excerpt: 'Criando camadas de textura usando apenas variações de folhagem.',
      image: 'https://images.unsplash.com/photo-1598555849843-980646098056?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-ink overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-center gap-4 mb-16">
           <span className="h-px w-12 bg-gold"></span>
           <span className="font-serif italic text-2xl text-gold-dark">Diário de Campo</span>
           <span className="h-px w-12 bg-gold"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Article 1 - Big Feature */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1615479261276-857e49eb72dc?q=80&w=1200&auto=format&fit=crop" 
                alt="Solo Texture"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-dark">Essencial</span>
              <span className="w-px h-3 bg-ink/20"></span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40">5 Min Leitura</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-3 group-hover:text-gold-dark transition-colors">O Mito da "Rega Uma Vez por Semana"</h3>
            <p className="font-sans text-ink/60 font-light leading-relaxed mb-4">
              Desconstruindo a regra mais perigosa da jardinagem amadora e aprendendo a ler a linguagem tátil do substrato.
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-ink border-b border-ink/20 pb-1 group-hover:border-gold transition-colors">Ler Artigo</span>
          </div>

          {/* Side List */}
          <div className="flex flex-col justify-between gap-12">
             {articles.map(article => (
               <div key={article.id} className="flex gap-6 group cursor-pointer">
                  <div className="w-1/3 aspect-square overflow-hidden rounded-sm relative">
                    <LazyImage 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold-dark mb-2">{article.category}</span>
                    <h4 className="font-serif text-2xl mb-2 leading-tight group-hover:text-gold-dark transition-colors">{article.title}</h4>
                    <p className="font-sans text-xs text-ink/60 leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 group-hover:text-ink transition-colors">Ler</span>
                  </div>
               </div>
             ))}
             
             <div className="bg-sage/5 p-8 border border-sage/10 text-center mt-auto">
                <p className="font-serif italic text-lg text-ink/80 mb-4">"A observação é a melhor ferramenta do jardineiro."</p>
                <Link to="/cuidados" className="inline-block px-6 py-3 border border-ink/10 bg-white hover:border-gold hover:text-gold-dark transition-all text-xs font-mono uppercase tracking-widest">
                  Acessar Guias de Cuidado
                </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SEÇÃO 4: O CURADOR (Refatorada) ---
const AboutMeSection = () => (
  <section className="py-24 md:py-32 bg-forest-dark text-white relative overflow-hidden">
    {/* Background Texture */}
    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Image Column - Editorial Layout */}
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 pointer-events-none"></div>
              {/* Imagem Otimizada */}
              <LazyImage 
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop" 
                  alt="Jardineiro trabalhando com plantas" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
              />
          </div>
          
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-forest/90 backdrop-blur-md border border-white/10 p-6 shadow-2xl max-w-[180px]">
               <div className="flex flex-col items-center text-center">
                   <span className="text-4xl font-serif text-gold leading-none mb-1">15+</span>
                   <div className="w-8 h-px bg-white/20 my-2"></div>
                   <span className="text-[10px] uppercase tracking-widest text-white/60">Anos de<br/>Cultivo</span>
               </div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-gold text-xs font-mono uppercase tracking-[0.25em]">Carta do Editor</span>
          </div>
          
          <h2 className="text-fluid-h2 font-serif mb-8 leading-[1.1]">
            Cultivando mais do que <br/> 
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sage via-white to-sage">apenas plantas.</span>
          </h2>
          
          <p className="font-alt text-2xl text-white/90 mb-8 border-l-2 border-gold/30 pl-6 leading-relaxed">
            "Olá, sou um desenvolvedor júnior e jardineiro sênior. Minha missão é traduzir a complexidade da natureza em interfaces serenas."
          </p>
          
          <div className="space-y-6 text-gray-400 font-light leading-loose text-sm md:text-base max-w-xl">
            <p>
              Minha jornada começou com uma pequena suculenta e floresceu em uma paixão por criar ecossistemas sustentáveis dentro de casa. 
              Criei este espaço para documentar rituais de cuidado e compartilhar as nuances que transformam um "dedo verde" em um botânico amador.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
               {['Design Biofílico', 'React & Natureza', 'Slow Living'].map(tag => (
                   <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/60 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all cursor-default">
                       {tag}
                   </span>
               ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

// --- SEÇÃO 5: NEWSLETTER (Nova) ---
const NewsletterSection = () => (
  <section className="py-24 bg-gold-dark text-paper relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
    <div className="container relative z-10 text-center max-w-2xl mx-auto">
      <span className="material-symbols-outlined text-4xl mb-4 opacity-80">mark_email_unread</span>
      <h2 className="text-3xl md:text-4xl font-serif mb-4">Junte-se ao Círculo Obsidiana</h2>
      <p className="text-white/80 font-light mb-8 leading-relaxed">
        Receba mensalmente nossa curadoria de espécimes raros, guias de rituais sazonais e convites para eventos digitais.
      </p>
      
      <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Seu endereço de e-mail" 
          className="flex-1 bg-white/10 border border-white/20 px-6 py-4 placeholder-white/50 text-white focus:outline-none focus:bg-white/20 transition-all font-sans"
        />
        <button className="bg-white text-gold-dark font-mono text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-paper transition-colors">
          Inscrever-se
        </button>
      </form>
      <p className="mt-4 text-[10px] opacity-50 uppercase tracking-widest">Respeitamos seu tempo e seu cultivo. Zero spam.</p>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <FeaturedCollection />
      <JournalSection />
      <AboutMeSection />
      <NewsletterSection />
    </>
  );
};

export default Home;