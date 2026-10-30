import React, { useEffect, useState } from 'react';

/**
 * Barra de progresso de rolagem no topo com identidade visual dourada/champagne
 * e ponta com brilho delicado alinhado à espessura da barra.
 */
export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
            setProgress(currentProgress);
          } else {
            setProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none h-[3px] bg-[#C5A880]/15"
    >
      {/* Barra de Progresso com Gradiente Dourado / Champanhe */}
      <div
        className="relative h-full transition-[width] duration-75 ease-out will-change-[width]"
        style={{
          width: `${progress * 100}%`,
          background:
            'linear-gradient(90deg, #EFE6DD 0%, #DBC8B5 30%, #C5A880 65%, #9E7D53 90%, #F5E5C9 100%)',
        }}
      >
        {/* Ponta Levemente Brilhante na Espessura da Barra */}
        {progress > 0.002 && (
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"
            style={{
              width: '3.5px',
              height: '3.5px',
              backgroundColor: '#FFFDF7',
              boxShadow:
                '0 0 4px 1px rgba(255, 250, 235, 1), 0 0 8px 2px rgba(212, 175, 55, 0.85), 0 0 14px 2.5px rgba(197, 168, 128, 0.55)',
            }}
          />
        )}
      </div>
    </div>
  );
};
