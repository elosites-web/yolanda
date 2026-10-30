/**
 * Salão Yolanda Lima — Protótipo Comercial
 * Desenvolvido por ēloSites | Estúdio de Desenvolvimento Web
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { CommercialNoticeBanner } from './components/CommercialNoticeBanner';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2A2421] selection:bg-[#EFE6DD] selection:text-[#5E4834]">
      {/* Barra de Progresso de Rolagem no Topo */}
      <ScrollProgressBar />

      {/* Top Header */}
      <Header onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero com Scrollytelling e Abertura Cinematográfica */}
        <Hero />

        {/* 2. Sobre o Salão (Conceito de Acolhimento e Cuidado Pessoal) */}
        <About />

        {/* 3. Nossos Serviços (Cabelos, Manicure & Pedicure, Beleza) */}
        <Services />

        {/* 4. Galeria Visual (Fotografias Editoriais e Lightbox) */}
        <Gallery />

        {/* 5. A Experiência (Sensorialidade e Atenção aos Detalhes) */}
        <Experience />

        {/* 6. Localização Oficial (Vila Hortolândia, Jundiaí - SP) */}
        <Location />

        {/* 7. FAQ / Dúvidas Frequentes */}
        <FAQ />
      </main>

      {/* Rodapé com Assinatura ēloSites e Políticas LGPD */}
      <Footer onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Aviso Flutuante e Modal de Apresentação Comercial para Yolanda */}
      <CommercialNoticeBanner onOpenProposal={() => setIsProposalOpen(true)} />
      <ProposalModal isOpen={isProposalOpen} onClose={() => setIsProposalOpen(false)} />

      {/* Botão Flutuante Discreto de Voltar ao Topo */}
      <BackToTop />

      {/* Botão Flutuante Oficial de Contato via WhatsApp */}
      <WhatsAppButton isProposalOpen={isProposalOpen} />
    </div>
  );
}
