import React from 'react';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { SectionContainer, SectionHeader, Card, Badge, CTAButton } from './ui';

import lauraImg from '../assets/images/avatar_laura_1792015599515.jpg';
import marianaImg from '../assets/images/avatar_mariana_1792015624341.jpg';
import diegoImg from '../assets/images/avatar_diego_1792015581947.jpg';

interface TestimonialsSectionProps {
  onScrollToOffer: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToOffer }) => {
  const { testimonials, pricing } = SITE_CONFIG;

  const avatarMap: Record<number, string> = {
    1: lauraImg,
    2: marianaImg,
    3: diegoImg,
  };

  return (
    <SectionContainer id="testimonios" variant="watercolor">
      <SectionHeader
        eyebrow="Experiencias Reales"
        title="Lo que dicen quienes ya hicieron su pausa consciente"
        subtitle="Personas reales que decidieron detenerse, ordenar lo que sienten y recuperar dirección propia."
      />

      {/* 3 Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            variant="surface"
            className="flex flex-col justify-between border border-[#CCE2F5] hover:border-[#A6D1F4] transition-all hover:shadow-lg relative group bg-white/95"
          >
            <div>
              {/* Top rating & tag row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#C5A869]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A869]" />
                  ))}
                </div>
                <Badge variant="brand" className="text-[10px] normal-case">
                  {t.tag}
                </Badge>
              </div>

              {/* Quote mark icon decorative */}
              <div className="mb-2 text-[#C5A869]/30">
                <Quote className="w-7 h-7" />
              </div>

              {/* Main quote */}
              <p className="text-sm sm:text-base text-[#24476D] leading-relaxed mb-6 font-normal italic">
                “{t.quote}”
              </p>
            </div>

            {/* Author footnote with Photo */}
            <div className="pt-4 border-t border-[#E4F0F9] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={avatarMap[t.id]}
                  alt={`Foto de ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A869]/60 shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-[#0F2642] text-sm sm:text-base leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-[#2E8B57] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#2E8B57]" /> {t.location}
                  </span>
                </div>
              </div>

              <span className="text-[11px] text-[#6A8DAF] hidden sm:inline">
                Edición {SITE_CONFIG.product.edition}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust metric and quick transition button */}
      <div className="mt-12 text-center max-w-xl mx-auto">
        <p className="text-xs sm:text-sm text-[#4E7298] mb-3">
          Un proceso íntimo y reflexivo que podés comenzar hoy mismo desde cualquier dispositivo.
        </p>
        <CTAButton
          onClick={onScrollToOffer}
          variant="gold"
          size="md"
          showArrow
        >
          Unirme por solo USD {pricing.current}
        </CTAButton>
      </div>
    </SectionContainer>
  );
};
