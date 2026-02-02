import React, { useCallback } from 'react';
import { SOIL_IMAGE_MAIN, SOIL_IMAGE_SMALL_1, SOIL_IMAGE_SMALL_2 } from '../constants';

const SoilSection: React.FC = () => {
  const openImage = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, url: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openImage(url);
    }
  }, [openImage]);

  return (
    <section id="soil" className="relative w-full bg-paper text-ink font-sans py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linen opacity-40 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 relative items-center">
          
          {/* Background Decor */}
          <div className="absolute -left-20 -top-20 opacity-[0.02] pointer-events-none select-none">
            <span className="material-symbols-outlined text-[20rem] md:text-[40rem] font-thin text-ink">local_florist</span>
          </div>

          {/* Text Left */}
          <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-gold-dark"></span>
              <span className="font-mono text-[10px] uppercase tracking-widest-xl text-gold-dark">O Guia do Curador</span>
            </div>
            
            <h2 className="font-serif text-fluid-h1 text-ink mb-10 tracking-tighter leading-none">
              A Arte do <br/>
              <span className="text-sage italic font-light ml-2">Solo & Argila</span>
            </h2>
            
            <div className="pl-6 border-l border-gold/30 mb-12">
              <p className="font-serif text-2xl md:text-3xl leading-tight text-ink/90 italic">
                "Plantar um jardim é acreditar no amanhã."
              </p>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-dark mt-4 block">— Provérbio Botânico</span>
            </div>

            <div className="flex flex-col gap-1 opacity-60">
              <p className="font-serif italic text-xl text-gold-dark rotate-1 w-max origin-left">Fig. 1: Preparação</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-ink">Est. 2024 — Vida Botânica</p>
            </div>
          </div>

          {/* Images Right - Grid Layout */}
          <div className="lg:col-span-7 relative mt-16 lg:mt-0">
             <div className="grid grid-cols-12 grid-rows-12 aspect-[4/5] md:aspect-square lg:aspect-[4/3] w-full">
                
                {/* Main Image - Clickable */}
                <div 
                  className="col-start-4 col-span-9 row-start-1 row-span-10 z-10 bg-ink p-1 shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-1000 ease-out group cursor-pointer focus:outline-none focus:ring-4 focus:ring-gold/30" 
                  role="button"
                  tabIndex={0}
                  onClick={() => openImage(SOIL_IMAGE_MAIN)}
                  onKeyDown={(e) => handleKeyDown(e, SOIL_IMAGE_MAIN)}
                  aria-label="Ver imagem do solo em detalhes"
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center sepia-[0.15] contrast-[1.1]" style={{ backgroundImage: `url('${SOIL_IMAGE_MAIN}')` }}></div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">open_in_new</span>
                    </div>
                  </div>
                </div>
                
                {/* Overlay Image 1 */}
                <div 
                  className="col-start-2 col-span-5 row-start-7 row-span-6 z-20 shadow-xl border-[6px] border-paper transform -rotate-2 group transition-transform hover:rotate-0 duration-700 ease-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-gold/30" 
                  role="button"
                  tabIndex={0}
                  onClick={() => openImage(SOIL_IMAGE_SMALL_1)}
                  onKeyDown={(e) => handleKeyDown(e, SOIL_IMAGE_SMALL_1)}
                  aria-label="Ver detalhes em Terracota"
                >
                  <div className="w-full h-full aspect-[4/5] bg-cover bg-center grayscale transition duration-1000 group-hover:grayscale-0" style={{ backgroundImage: `url('${SOIL_IMAGE_SMALL_1}')` }}></div>
                  <div className="hidden md:block absolute -bottom-10 -right-4 font-serif italic text-3xl text-ink whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-700">Detalhes em Terracota</div>
                </div>
                
                {/* Overlay Image 2 (Small) */}
                <div 
                  className="col-start-1 col-span-3 row-start-2 row-span-3 z-30 shadow-lg border border-gold/30 bg-paper p-1 rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer focus:outline-none focus:ring-4 focus:ring-gold/30" 
                  role="button"
                  tabIndex={0}
                  onClick={() => openImage(SOIL_IMAGE_SMALL_2)}
                  onKeyDown={(e) => handleKeyDown(e, SOIL_IMAGE_SMALL_2)}
                  aria-label="Ver textura da argila"
                >
                  <div className="w-full h-full aspect-square bg-cover bg-center" style={{ backgroundImage: `url('${SOIL_IMAGE_SMALL_2}')` }}></div>
                  <div className="absolute -top-3 -right-3 size-6 rounded-full bg-gold-dark text-paper flex items-center justify-center font-serif font-bold text-xs shadow-md">03</div>
                </div>

                {/* Arrow Decor */}
                <div className="hidden md:block absolute bottom-4 right-0 z-30 opacity-40 pointer-events-none">
                   <span className="material-symbols-outlined text-gold-dark text-5xl font-thin -rotate-45">arrow_back</span>
                </div>

             </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-5xl mx-auto mb-32 relative">
          <div className="flex items-center justify-center gap-6 mb-16 opacity-30">
            <span className="h-px w-32 bg-ink"></span>
            <span className="material-symbols-outlined text-gold-dark text-xl">filter_vintage</span>
            <span className="h-px w-32 bg-ink"></span>
          </div>
          
          <div className="columns-1 md:columns-2 gap-16 space-y-12 text-justify">
            <p className="font-serif text-2xl leading-relaxed text-ink/90 first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:font-serif first-letter:text-gold-dark first-letter:leading-[0.8]">
              Dominar a fundação de plantas saudáveis começa não com a folha, mas com a raiz. Descubra a sinergia perfeita entre textura do solo, escolha do vaso e drenagem. É um ritual de aterramento — literal e metaforicamente.
            </p>
            
            <div className="break-inside-avoid p-8 bg-sage/5 border-l-2 border-sage relative">
              <span className="material-symbols-outlined absolute -top-4 -left-4 bg-paper p-1 text-sage text-2xl">format_quote</span>
              <p className="font-serif italic text-xl text-ink/80 text-center mb-4 leading-relaxed">
                "Sempre esterilize vasos antigos antes de reutilizá-los. Um vaso limpo é a tela para uma nova vida."
              </p>
              <p className="text-center font-mono text-[9px] font-bold tracking-widest uppercase text-gold-dark">— Nota do Curador</p>
            </div>
            
            <p className="font-sans text-lg font-light leading-loose text-ink/70">
              O vaso é mais que um recipiente; é o lar onde seu companheiro botânico reside. Escolher terracota não esmaltada permite que as raízes respirem, absorvendo o excesso de umidade, enquanto cerâmicas esmaltadas mantêm a umidade próxima. O curador atento equilibra estética com função, entendendo que o próprio solo é um ecossistema vivo que requer aeração e respeito.
            </p>
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="border-t border-b border-ink/5 py-24 bg-[#FDFBF7] relative overflow-hidden">
            <div className="text-center mb-20 relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark block mb-4">Metodologia</span>
                <h3 className="font-serif text-fluid-h2 text-ink tracking-tight">A Arte da Preparação</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 relative max-w-7xl mx-auto border border-gold/10">
                {['A Fundação de Drenagem', 'A Alquimia do Substrato', 'O Toque Final'].map((step, idx) => (
                    <div key={idx} className="group relative bg-paper p-12 hover:bg-white transition-colors duration-500">
                         <div className="mb-8 text-gold-dark opacity-30 group-hover:opacity-100 transition-opacity">
                            <span className="font-serif text-4xl italic">{(['I', 'II', 'III'])[idx]}.</span>
                        </div>
                        <h4 className="font-serif text-2xl text-ink mb-6 group-hover:text-gold-dark transition-colors">{step}</h4>
                        <p className="font-sans text-sm text-ink/60 leading-relaxed group-hover:text-ink/80 transition-colors">
                            {idx === 0 && "Comece com uma camada deliberada de argila expandida. Este estrato oculto é a garantia contra a estagnação hídrica."}
                            {idx === 1 && "Misture solo para vasos com perlita e casca de pinus. A aeração é o segredo para raízes que respiram livremente."}
                            {idx === 2 && "Regue abundantemente até que o fluxo saia limpo. O assentamento do solo é o primeiro suspiro da planta em seu novo lar."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SoilSection;