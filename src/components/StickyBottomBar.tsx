import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { product, pricing, ctas } = SITE_CONFIG;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      const rect = offerElement.getBoundingClientRect();
      if (rect.top > 150) {
        offerElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onOpenCheckout();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#CCE2F5] shadow-lg py-2.5 px-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 h-11">
        {/* Left: Single-line offer reminder */}
        <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm text-[#0F2642] whitespace-nowrap truncate">
          <span className="text-[#C5A869]">✦</span>
          <span className="font-serif font-bold">{product.title}</span>
          <span className="text-[#6487AC]">·</span>
          <span className="text-[#3C5E82]">8 módulos + 4 bonos</span>
          <span className="text-[#6487AC]">·</span>
          <span className="font-bold text-[#0F2642]">{pricing.currency} {pricing.current}</span>
        </div>

        {/* Mobile short indicator */}
        <div className="sm:hidden text-xs text-[#0F2642] font-semibold whitespace-nowrap">
          <span className="text-[#C5A869]">✦</span> {pricing.currency} {pricing.current} <span className="text-[#678AA9] font-normal">(Guía + 4 Bonos)</span>
        </div>

        {/* Right: Action Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleClick}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#0F2642] hover:bg-[#183B5E] active:scale-95 transition-all rounded-lg shadow-sm border border-[#C5A869]/50 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{ctas.sticky}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6CD8C]" />
          </button>
        </div>
      </div>
    </div>
  );
};
