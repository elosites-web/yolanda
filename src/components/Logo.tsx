import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'compact' | 'monogram';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = '' }) => {
  if (variant === 'monogram' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 shrink-0"
          aria-label="Monograma SY - Salão da Yolanda"
        >
          {/* Círculo externo fino em tom dourado suave */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="#FDFBF7"
            stroke="#C5A880"
            strokeWidth="1.2"
          />
          {/* Círculo interno pontilhado delicado */}
          <circle
            cx="50"
            cy="50"
            r="41"
            fill="none"
            stroke="#E3D4C4"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          {/* Folha / pétala decorativa superior */}
          <path
            d="M50 14 C52 17 52 21 50 23 C48 21 48 17 50 14 Z"
            fill="#C5A880"
          />
          {/* Monograma entrelaçado SY */}
          <text
            x="49"
            y="57"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="36"
            fontWeight="500"
            fontStyle="italic"
            letterSpacing="-1"
            fill="#7A5E3B"
            textAnchor="middle"
          >
            SY
          </text>
        </svg>

        {variant === 'compact' && (
          <div className="flex flex-col">
            <span className="font-editorial text-lg tracking-tight text-[#2A2421] font-semibold leading-none">
              Salão da Yolanda
            </span>
            <span className="text-[10px] tracking-widest text-[#9E7D53] uppercase font-sans mt-0.5">
              Jundiaí · SP
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Monograma Vetorial Exclusivo SY */}
      <svg
        viewBox="0 0 100 100"
        className="w-11 h-11 shrink-0 drop-shadow-xs"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="#FAF8F5"
          stroke="#C5A880"
          strokeWidth="1.2"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#DBC8B5"
          strokeWidth="0.75"
          strokeDasharray="2.5 2.5"
        />
        {/* Detalhe botânico sutil no topo e base */}
        <path
          d="M50 12 C52.5 16 52.5 19 50 22 C47.5 19 47.5 16 50 12 Z"
          fill="#B6976F"
        />
        <path
          d="M50 88 C47.5 84 47.5 81 50 78 C52.5 81 52.5 84 50 88 Z"
          fill="#B6976F"
        />
        {/* Letras S e Y entrelaçadas */}
        <text
          x="50"
          y="57"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="38"
          fontWeight="500"
          fontStyle="italic"
          fill="#7A5E3B"
          textAnchor="middle"
        >
          SY
        </text>
      </svg>

      {/* Tipografia sofisticada horizontal */}
      <div className="flex flex-col justify-center">
        <span className="font-editorial text-xl sm:text-2xl text-[#2A2421] tracking-tight leading-none font-medium">
          Salão da Yolanda
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#9E7D53] font-sans font-medium">
            Cuidado & Estética
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C5A880] opacity-60" />
          <span className="text-[9px] sm:text-[10px] tracking-wider text-[#A89582] font-sans">
            Jundiaí
          </span>
        </div>
      </div>
    </div>
  );
};
