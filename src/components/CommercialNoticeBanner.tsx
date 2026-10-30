import React, { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';

interface CommercialNoticeBannerProps {
  onOpenProposal: () => void;
}

export const CommercialNoticeBanner: React.FC<CommercialNoticeBannerProps> = ({ onOpenProposal }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <button
        type="button"
        onClick={onOpenProposal}
        className="fixed bottom-6 left-6 z-40 bg-white/95 backdrop-blur-md text-[#7A5E3B] hover:text-[#2A2421] border border-[#C5A880] px-3.5 py-2 rounded-full shadow-md text-xs font-sans font-medium flex items-center gap-2 hover:shadow-lg transition-all"
        title="Abrir apresentação da proposta ēloSites"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#9E7D53]" />
        <span>Proposta ēloSites</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 max-w-xs sm:max-w-sm z-40 bg-[#FAF8F5]/98 backdrop-blur-md border border-[#C5A880] p-3 sm:p-3.5 rounded-2xl shadow-xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#F3EDE2] text-[#7A5E3B] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-[#9E7D53]" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-sans uppercase tracking-wider text-[#9E7D53] font-semibold leading-none">
            Protótipo Comercial
          </p>
          <p className="text-xs font-sans text-[#2A2421] font-medium leading-tight mt-1">
            ēloSites para Salão da Yolanda
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={onOpenProposal}
          className="px-2.5 py-1.5 rounded-full bg-[#7A5E3B] text-white hover:bg-[#634b2e] text-[11px] font-sans font-medium flex items-center gap-0.5 transition-colors"
        >
          <span>Ver</span>
          <ChevronRight className="w-3 h-3" />
        </button>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="p-1 text-[#5E534D] hover:text-[#2A2421] rounded-full hover:bg-[#EFE6DD]"
          aria-label="Minimizar aviso"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
