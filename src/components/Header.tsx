import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenProposal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProposal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Salão', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out will-change-[background,padding,box-shadow] ${
          scrolled
            ? 'glass-champagne-scrolled py-3 sm:py-3.5'
            : 'glass-champagne-top py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-5 xl:gap-8">
          {/* Zone 1: Brand wordmark / Monogram */}
          <a
            href="#inicio"
            className="whitespace-nowrap shrink-0 group focus:outline-hidden focus:ring-2 focus:ring-[#C5A880]/50 rounded-sm"
          >
            <Logo variant="horizontal" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-sans font-medium text-[#3D332A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#1F1916] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#B6976F] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Commercial Proposal Badge */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 xl:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenProposal}
              className="hidden xl:flex text-xs font-sans text-[#5E4834] hover:text-[#2A2421] px-3 py-1.5 rounded-full border border-[#C5A880]/50 hover:border-[#9E7D53] bg-white/50 hover:bg-white/85 backdrop-blur-xs transition-all items-center gap-1.5 shadow-xs"
              title="Visualizar detalhes do protótipo comercial da ēloSites"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B6976F]" />
              <span className="whitespace-nowrap">Proposta Comercial</span>
            </button>

            <a
              href="#servicos"
              className="px-3.5 py-2 lg:px-4 lg:py-2.5 xl:px-5 text-[11px] lg:text-xs uppercase tracking-wider font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full shadow-xs hover:shadow-md transition-all duration-300 whitespace-nowrap shrink-0 focus:outline-hidden focus:ring-2 focus:ring-[#C5A880]"
            >
              Conheça nossos serviços
            </a>
          </div>

          {/* Mobile & Small Tablet Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3D332A] hover:text-[#7A5E3B] rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer com Efeito Glassmorphism Champagne */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-gradient-to-b from-[#FAF8F5]/95 via-[#F8F5EE]/92 to-[#EFE6DD]/96 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#C5A880]/30 shadow-xs">
            <Logo variant="compact" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#3D332A] hover:text-[#7A5E3B] rounded-full hover:bg-white/50 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-2xl text-[#2A2421] hover:text-[#7A5E3B] py-1 border-b border-[#E3D4C4]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-xs uppercase tracking-wider font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full shadow-sm"
              >
                Conheça nossos serviços
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposal();
                }}
                className="w-full text-center py-2.5 text-xs font-sans text-[#7A5E3B] border border-[#C5A880]/60 rounded-full bg-white/70 backdrop-blur-xs"
              >
                Ver proposta comercial ēloSites
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
