import React, { useState, useEffect } from 'react';
import { SALON_INFO, SALON_IMAGES } from '../data/salonData';
import { ArrowDown, MapPin, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito suave de escala e translação cinematográfica
  const scale = Math.min(1.12, 1 + scrollY * 0.0002);
  const opacity = Math.max(0.65, 1 - scrollY * 0.0008);
  const translateY = Math.min(80, scrollY * 0.15);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF8F5] pt-20"
    >
      {/* Imagem de Fundo Cinematográfica com Parallax Suave */}
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
        }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src={SALON_IMAGES.hero}
          alt="Ambiente elegante e acolhedor do Salão da Yolanda"
          className="w-full h-full object-cover object-center brightness-[0.92]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Scrim Gradiente Editorial em Champagne & Nude para Máxima Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/65 to-[#FAF8F5]/30 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/85 via-[#FAF8F5]/40 to-transparent" />
      </div>

      {/* Conteúdo Centralizado & Editorial */}
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center"
      >
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* Metadata limpa sem formato de pílula rígida */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#7A5E3B] mb-6 font-medium">
            <span>Salão da Yolanda</span>
            <span aria-hidden="true">·</span>
            <span>Jundiaí - SP</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-[#9E7D53]">
              <MapPin className="w-3.5 h-3.5 inline" /> Vila Hortolândia
            </span>
          </div>

          {/* Título Cinematográfico com Equilíbrio Tipográfico */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#2A2421] font-light tracking-tight leading-[1.08] max-w-4xl text-balance">
            Sua beleza merece um <span className="italic font-normal text-[#7A5E3B]">cuidado especial</span>.
          </h1>

          {/* Subtítulo Delicado */}
          <p className="mt-6 sm:mt-8 font-sans text-base sm:text-lg lg:text-xl text-[#5E534D] max-w-2xl font-light leading-relaxed text-balance">
            {SALON_INFO.heroSubtitle}
          </p>

          {/* Ações Primária e Secundária */}
          <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#servicos"
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Descubra nossos serviços</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#localizacao"
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-sans font-medium text-[#7A5E3B] hover:text-[#2A2421] border border-[#C5A880]/70 hover:border-[#7A5E3B] bg-[#FAF8F5]/80 hover:bg-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Ver localização</span>
            </a>
          </div>

          {/* Nota discreta de conceito visual */}
          <div className="mt-12 text-[11px] font-sans text-[#A89582] tracking-wide">
            <span>Proposta visual para o Salão da Yolanda</span>
            <span className="mx-2">·</span>
            <span>ēloSites</span>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem suave */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#9E7D53] animate-pulse">
        <span className="text-[10px] tracking-widest uppercase font-sans font-medium">
          Conhecer
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
