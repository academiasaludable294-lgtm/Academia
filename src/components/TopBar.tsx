import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';

interface TopBarProps {
  onScrollToOffer: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onScrollToOffer }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#D8E9F6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#inicio" 
          className="text-xl sm:text-2xl font-serif font-bold text-[#102A45] tracking-tight whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="text-[#C5A869] text-base group-hover:rotate-12 transition-transform duration-300">✦</span>
          <span>Claridad & Reinicio</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#385A7E]">
          <a href="#diagnostico" className="hover:text-[#102A45] transition-colors whitespace-nowrap shrink-0">
            Diagnóstico
          </a>
          <a href="#modulos" className="hover:text-[#102A45] transition-colors whitespace-nowrap shrink-0">
            Los 8 Módulos
          </a>
          <a href="#bonos" className="hover:text-[#102A45] transition-colors whitespace-nowrap shrink-0">
            4 Bonos Incluidos
          </a>
          <a href="#testimonios" className="hover:text-[#102A45] transition-colors whitespace-nowrap shrink-0">
            Testimonios
          </a>
          <a href="#preguntas" className="hover:text-[#102A45] transition-colors whitespace-nowrap shrink-0">
            Preguntas Frecuentes
          </a>
        </nav>

        {/* Zone 3: Primary Action -> Scrolls to #oferta */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onScrollToOffer}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#102A45] hover:bg-[#183B5E] active:scale-95 transition-all rounded-md shadow-sm border border-[#C5A869]/40 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{SITE_CONFIG.ctas.topBar}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6CD8C]" />
          </button>
        </div>
      </div>
    </header>
  );
};
