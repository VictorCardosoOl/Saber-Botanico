import React, { useRef, useLayoutEffect } from 'react';
import { SOIL_IMAGE_MAIN, SOIL_IMAGE_SMALL_1, SOIL_IMAGE_SMALL_2 } from '../constants';
import LazyImage from './LazyImage';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, LUXURY_EASE } from './Animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoilSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalTriggerRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      // Só ativa em telas maiores que mobile
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const content = horizontalContentRef.current;
        const trigger = horizontalTriggerRef.current;

        if (content && trigger) {
          // Calcula a largura total do conteúdo - largura da viewport
          const scrollWidth = content.scrollWidth - window.innerWidth;
          
          gsap.to(content, {
            x: -scrollWidth,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              start: "top top", // Começa quando o topo do trigger bate no topo da tela
              end: `+=${scrollWidth + 500}`, // Duração do scroll baseada na largura do conteúdo
              pin: true, // "Pina" a seção
              scrub: 1, // Smoothness
              anticipatePin: 1
            }
          });
        }
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const minerals = [
      { title: 'Perlita / Pumice', desc: 'Rocha vulcânica expandida. Retém água microscopicamente enquanto drena macroscopicamente.', img: SOIL_IMAGE_SMALL_2, code: 'MIN-01' },
      { title: 'Casca de Pinus', desc: 'Matéria orgânica estrutural. Simula os detritos do chão da floresta tropical e acidifica levemente o pH.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800', code: 'MIN-02' },
      { title: 'Carvão Ativado', desc: 'O purificador. Absorve toxinas acumuladas, previne odores e atua como bactericida natural no sistema.', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800', code: 'MIN-03' },
      { title: 'Fibra de Coco', desc: 'Substituto sustentável do Xaxim. Alta retenção hídrica com excelente porosidade para raízes finas.', img: 'https://images.unsplash.com/photo-1622383563227-0440114a8472?auto=format&fit=crop&q=80&w=800', code: 'MIN-04' }
  ];

  return (
    <section ref={sectionRef} id="soil" className="relative w-full bg-paper text-forest-dark font-sans overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>
      
      {/* Intro Section - Vertical */}
      <div className="container relative z-10 px-6 py-24 md:py-40">
        
        {/* Header Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8 relative">
            <Reveal>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-dark/80 block mb-6">Geologia Aplicada</span>
                <h2 className="font-serif text-fluid-h1 text-forest-dark tracking-tighter leading-[0.85]">
                  Alquimia do <br/>
                  <span className="italic text-gold-dark opacity-90 ml-12">Substrato</span>
                </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 border-l border-gold/30 pl-8 pb-2">
            <Reveal delay={0.2}>
                <p className="font-alt text-2xl leading-tight text-forest-dark/80 italic mb-4">
                  "Raízes saudáveis exigem oxigênio tanto quanto exigem água. O segredo reside nos espaços vazios entre as partículas."
                </p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark">— Princípio do Chunky Mix</span>
            </Reveal>
          </div>
        </div>

        {/* Asymmetrical Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 relative">
             <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh]">
                <Reveal className="w-full h-full">
                    <div className="relative w-full h-full overflow-hidden bg-forest-dark group">
                        <LazyImage 
                          src={SOIL_IMAGE_MAIN} 
                          alt="Preparo do Solo com Perlite e Casca de Pinus"
                          className="w-full h-full object-cover sepia-[0.2] opacity-90 transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute top-8 left-8 border border-white/20 px-4 py-2 bg-white/5 backdrop-blur-md">
                            <span className="text-white font-mono text-[10px] uppercase tracking-widest">Fig 1.1 — Granulometria Grossa</span>
                        </div>
                    </div>
                </Reveal>
                
                {/* Floating Element */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-12 -right-12 w-64 h-64 hidden lg:block z-20 p-2 bg-paper shadow-2xl rotate-3"
                >
                    <LazyImage 
                        src={SOIL_IMAGE_SMALL_1} 
                        alt="Textura de solo vulcânico"
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                </motion.div>
             </div>

             <div className="lg:col-span-5 flex flex-col justify-center lg:pl-16 pt-16 lg:pt-0">
                <StaggerContainer className="space-y-12">
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                        <span className="text-6xl text-gold-dark/20 font-serif block mb-4">01.</span>
                        <h3 className="text-3xl font-serif text-forest-dark mb-4">A Fundação de Drenagem</h3>
                        <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light">
                            O erro primário é o uso de terra vegetal compacta. Para <i>Araceas</i> (Monsteras, Philodendrons), o solo deve desmoronar na mão. Utilizamos uma base de casca de pinus compostada para estrutura e acidez leve.
                        </p>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                        <span className="text-6xl text-gold-dark/20 font-serif block mb-4">02.</span>
                        <h3 className="text-3xl font-serif text-forest-dark mb-4">Macroporosidade</h3>
                        <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light">
                            Adicionamos agregados minerais inertes como Perlita Expandida ou Pedra-Pomes (Pumice). Estes componentes criam bolsas de ar permanentes, prevenindo a hipóxia radicular e apodrecimento.
                        </p>
                    </motion.div>
                </StaggerContainer>
             </div>
        </div>
      </div>

      {/* GSAP Horizontal Scroll Section */}
      <div ref={horizontalTriggerRef} className="relative w-full h-[100vh] bg-forest-dark text-paper overflow-hidden flex flex-col justify-center">
            
            <div className="absolute top-12 left-6 md:left-12 z-20">
                 <h3 className="text-fluid-h2 font-serif text-paper">A Tríade Mineral</h3>
                 <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Deslize para Explorar -></span>
            </div>

            {/* Content Wrapper */}
            <div ref={horizontalContentRef} className="flex gap-px h-[70vh] pl-6 md:pl-12 w-max">
                {minerals.map((item, idx) => (
                    <div key={idx} className="group relative w-[85vw] md:w-[40vw] lg:w-[30vw] h-full flex flex-col justify-end p-8 overflow-hidden bg-forest-light border-r border-white/5 transition-colors duration-500 hover:bg-forest-light/80 shrink-0">
                        
                        {/* Imagem de Fundo (Revela no Hover) */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                             <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale mix-blend-overlay" />
                        </div>

                        {/* Liquid Filter Effect no Hover */}
                        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px] liquid-filter"></div>

                        <div className="relative z-10">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-gold mb-4 block border border-gold/30 w-fit px-2 py-1 rounded-sm">{item.code}</span>
                            <h4 className="font-serif text-4xl md:text-5xl text-paper mb-6">{item.title}</h4>
                            <div className="w-12 h-px bg-gold mb-6 group-hover:w-full transition-all duration-700 ease-out"></div>
                            <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
                
                {/* Spacer Final */}
                <div className="w-[20vw] shrink-0 flex items-center justify-center text-white/20">
                    <span className="font-serif italic text-2xl">Fim da Seção</span>
                </div>
            </div>
      </div>

      {/* NOVO CONTEÚDO TÉCNICO - Deep Science */}
      <div className="container relative z-10 px-6 py-24">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="font-serif text-4xl text-forest-dark mb-6">
                  O Mito da Terra Vegetal
                </h3>
                <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light mb-6">
                  Existe um equívoco fundamental no cultivo <i>indoor</i>: tratar vasos como extensões do solo florestal. 
                  A terra vegetal comum, densa e argilosa, comporta-se como um bloco de concreto quando confinada. 
                  Em um vaso, a física muda. Sem a macrofauna do solo para criar túneis, a terra compacta, asfixiando 
                  o sistema radicular. 
                </p>
                <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light">
                  Nossa engenharia de substrato foca na <strong>aeração mecânica</strong>. Ao substituir a terra por 
                  materiais de granulometria controlada, garantimos que a água flua, mas que a umidade permaneça 
                  apenas nos microporos, mimetizando a serrapilheira da mata nativa.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-forest-dark mb-6">
                  A Química do "Efeito Tampão"
                </h3>
                <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light mb-6">
                  Plantas não consomem matéria orgânica sólida; elas absorvem soluções iônicas. O papel da adubação orgânica 
                  (Húmus, Bocashi) não é apenas nutrir, mas criar o que chamamos na agronomia de <strong>CTC (Capacidade de Troca Catiônica)</strong>.
                </p>
                <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light">
                  A matéria orgânica atua como uma "esponja magnética" molecular. Ela retém os sais minerais e a água, 
                  evitando que o adubo seja lixiviado (lavado) nas regas ou que queime as raízes por excesso de salinidade. 
                  É o sistema imunológico do solo, amortecendo erros humanos e liberando nutrientes em ritmo biológico.
                </p>
              </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SoilSection;