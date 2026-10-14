import React from 'react';
import { ShieldCheck, Zap, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { BookMockup3D } from './BookMockup3D';
import { SITE_CONFIG } from '../config/content';
import { CTAButton } from './ui';

interface HeroProps {
  onScrollToOffer: () => void;
  onOpenSample: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffer, onOpenSample }) => {
  const { product, pricing, ctas } = SITE_CONFIG;

  return (
    <section id="inicio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden watercolor-bg">
      {/* Decorative celestial background sparkles */}
      <div className="absolute top-10 left-8 text-[#C5A869]/40 text-xl select-none pointer-events-none hidden sm:block">✦</div>
      <div className="absolute top-32 right-12 text-[#C5A869]/50 text-2xl select-none pointer-events-none hidden sm:block">✦</div>
      <div className="absolute bottom-16 left-1/4 text-[#90C8EB]/40 text-lg select-none pointer-events-none">✧</div>
      <div className="absolute top-2/3 right-1/4 text-[#C5A869]/30 text-base select-none pointer-events-none">⋆</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow question */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C5A869] flex items-center justify-center gap-2">
            <span>✦</span>
            <span>{product.eyebrow}</span>
            <span>✦</span>
          </p>
          <p className="mt-1 text-xs tracking-widest uppercase font-medium text-[#486B8E]">
            {product.title}
          </p>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.6rem] font-bold text-[#0F2642] leading-[1.14] tracking-tight text-balance">
            {product.headline}
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#335375] leading-relaxed max-w-2xl mx-auto">
            {product.description}
          </p>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
          {/* Left: Visual Mockup */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <BookMockup3D onOpenSample={onOpenSample} />
          </div>

          {/* Right: Pricing Box */}
          <div className="lg:col-span-5">
            <div className="watercolor-card rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-[#BDDDF1]">
              {/* Gold ribbon top right */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C5A869] to-[#D8BC7D] text-[#0F2642] text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-lg shadow-xs">
                {pricing.badgeText}
              </div>

              <div className="mb-6 pt-2">
                <span className="text-xs font-semibold text-[#52769C] uppercase tracking-wider block">
                  Edición Completa · Acceso De Por Vida
                </span>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#0E253F] tracking-tight">
                    {pricing.currency} {pricing.current}
                  </span>
                  <span className="text-sm sm:text-base text-[#678AA9] line-through">
                    {pricing.currency} {pricing.original}
                  </span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E253F] bg-[#E8F3FA] px-3 py-1 rounded-md border border-[#CDE3F3]">
                  <Sparkles className="w-4 h-4 text-[#C5A869]" />
                  <span>{pricing.includedSummary}</span>
                </div>
              </div>

              {/* Bullet highlights */}
              <ul className="space-y-2.5 mb-7 text-sm text-[#26486D]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                  <span><strong>8 módulos de trabajo guiado</strong> con ejercicios prácticos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                  <span><strong>4 bonos complementarios</strong> (Diario de gratitud, Manifiesto, Ritual mensual y Workbook).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                  <span><strong>Formato digital interactivo e imprimible</strong>, listo para leer y escribir desde cualquier dispositivo.</span>
                </li>
              </ul>

              {/* Primary Call to Action Button -> Scrolls to #oferta */}
              <CTAButton
                onClick={onScrollToOffer}
                size="lg"
                fullWidth
                showSparkle
              >
                {ctas.hero}
              </CTAButton>

              {/* Secondary Sample Button */}
              <button
                onClick={onOpenSample}
                className="w-full mt-2.5 py-2.5 px-4 rounded-lg text-xs font-medium text-[#2C5077] hover:text-[#0F2642] hover:bg-white/60 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>{ctas.sample}</span>
              </button>

              {/* Trust Metadata Footnote */}
              <div className="mt-5 pt-4 border-t border-[#DDECF6] flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 text-xs text-[#5C81A5]">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#C5A869]" />
                  Acceso digital inmediato
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B57]" />
                  Garantía de {pricing.guaranteeDays} días
                </span>
                <span>·</span>
                <span>Empezás en el acto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
