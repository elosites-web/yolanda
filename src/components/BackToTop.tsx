import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

/**
 * Botão flutuante discreto de "Voltar ao Topo"
 * Aparece apenas quando o usuário rola a página além da primeira dobra,
 * respeitando a paleta e os espaçamentos dos elementos fixos existentes.
 */
export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Aparece quando rolar além de 60% da primeira dobra (altura da tela)
          const threshold = window.innerHeight * 0.6;
          setIsVisible(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Verificação inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      className={`fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-22 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/92 hover:bg-white text-[#7A5E3B] hover:text-[#2A2421] border border-[#C5A880]/60 hover:border-[#9E7D53] shadow-md hover:shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#C5A880]/50 cursor-pointer motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto visible scale-100'
          : 'opacity-0 translate-y-3 pointer-events-none invisible scale-95'
      }`}
    >
      <ChevronUp className="w-5 h-5 transition-transform duration-200 hover:-translate-y-0.5" />
    </button>
  );
};
