import React from 'react';

export interface LogoProps {
  variant?: 'header' | 'footer' | 'drawer' | 'monogram' | 'full' | 'horizontal' | 'compact';
  scrolled?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  scrolled = false,
  className = '',
}) => {
  // 1. Símbolo isolado (monograma YL oficial)
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/logo-yolanda.png"
          alt="Monograma Oficial YL — Salão Yolanda Lima"
          className="h-10 w-auto object-contain select-none"
          loading="eager"
        />
      </div>
    );
  }

  // 2. Rodapé institucional
  if (variant === 'footer') {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <div className="inline-flex items-center gap-3 sm:gap-4">
          <img
            src="/logo-yolanda.png"
            alt="Salão Yolanda Lima"
            className="h-16 sm:h-20 w-auto object-contain select-none shrink-0"
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <span className="font-editorial text-2xl sm:text-3xl text-[#2A2421] tracking-tight leading-none font-semibold">
              Salão Yolanda Lima
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#9E7D53] font-sans font-medium mt-1.5">
              Cuidado, Beleza & Autoestima
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Menu Drawer no Mobile
  if (variant === 'drawer' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src="/logo-yolanda.png"
          alt="Salão Yolanda Lima"
          className="h-10 w-auto object-contain select-none shrink-0"
          loading="eager"
        />
        <div className="flex flex-col justify-center">
          <span className="font-editorial text-xl text-[#2A2421] font-semibold tracking-tight leading-none">
            Salão Yolanda Lima
          </span>
          <span className="text-[9px] tracking-widest uppercase text-[#9E7D53] font-sans mt-0.5">
            Jundiaí · SP
          </span>
        </div>
      </div>
    );
  }

  // 4. Cabeçalho / Navbar (header / horizontal / full):
  // Exibe o símbolo oficial do monograma YL à esquerda e o nome "Salão Yolanda Lima" à frente (lado direito do logo)
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Símbolo Oficial do Logo */}
      <img
        src="/logo-yolanda.png"
        alt="Salão Yolanda Lima"
        className={`w-auto object-contain select-none shrink-0 transition-all duration-300 ${
          scrolled ? 'h-9 sm:h-11 md:h-12' : 'h-10 sm:h-12 md:h-14'
        }`}
        loading="eager"
      />

      {/* Nome "Salão Yolanda Lima" à frente (lado direito) do logo */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-editorial text-[#2A2421] font-semibold tracking-tight leading-none transition-all duration-300 ${
            scrolled ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-[1.65rem]'
          }`}
        >
          Salão Yolanda Lima
        </span>
        <span className="text-[8px] sm:text-[9.5px] tracking-[0.2em] uppercase text-[#9E7D53] font-sans font-medium mt-0.5 sm:mt-1">
          Cuidado & Beleza · Jundiaí
        </span>
      </div>
    </div>
  );
};
