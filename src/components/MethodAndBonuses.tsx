import React from 'react';
import bundleCoverImg from '../assets/images/bundle_cover_2027_1791757435601.jpg';
import { Check, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { SectionContainer, SectionHeader, CTAButton, Card, Badge } from './ui';

interface MethodAndBonusesProps {
  onScrollToOffer: () => void;
}

export const MethodAndBonuses: React.FC<MethodAndBonusesProps> = ({ onScrollToOffer }) => {
  const { methodSteps, bonuses, product, pricing } = SITE_CONFIG;

  return (
    <div className="bg-white">
      {/* El Método es simple */}
      <SectionContainer variant="watercolor">
        <SectionHeader
          eyebrow="Ruta Clara de 8 Pasos"
          title="El método es simple"
          subtitle="Sin abrumarte. Un paso a la vez."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodSteps.map((step, idx) => (
            <div
              key={idx}
              className="watercolor-card rounded-2xl p-5 border border-[#CFE4F6] shadow-2xs hover:border-[#A4D0F2] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl font-bold text-[#C5A869]">
                  {step.num}.
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#577B9F] bg-white px-2 py-0.5 rounded border border-[#D5E7F6]">
                  Paso {step.num}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F2642] uppercase tracking-wide mb-1.5">
                {step.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#3E6186] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#0F2642]">
            No necesitás hacerlo todo en un día.
          </p>
          <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#B89647] mt-0.5 italic">
            Necesitás empezar.
          </p>
        </div>
      </SectionContainer>

      {/* Los 4 Bonos */}
      <section id="bonos" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Oferta Especial Expandida"
            title="Y esperá... porque no te vas a llevar solamente el e-book."
            subtitle="Al acceder hoy también recibís 4 BONOS COMPLEMENTARIOS pensados para llevar la claridad a la práctica."
          />

          {/* Bundle Showcase Banner using user's custom HTML structure */}
          <div className="mb-14 rounded-3xl overflow-hidden border border-[#D5E8F6] shadow-xl bg-[#f0f4f8]">
            <section className="hero-banner">
              <img
                src={bundleCoverImg}
                alt={`${product.title} ${product.edition} - Mockup de productos y bonos`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="hero-content">
                <h3 className="hero-title">{product.motto}</h3>
              </div>
            </section>
            
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0F2642] to-[#183B5E] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E6CD8C] block mb-1">
                  ✦ El Kit Completo de Transformación
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold">
                  La Guía Oficial + Los 4 Bonos Especiales
                </p>
                <p className="text-xs text-[#C9E5F8]">
                  Todo incluido en tu acceso por una única inversión de {pricing.currency} {pricing.current}
                </p>
              </div>
              <CTAButton
                onClick={onScrollToOffer}
                variant="gold"
                size="md"
                showArrow
              >
                Asegurar mis 4 bonos
              </CTAButton>
            </div>
          </div>

          {/* 4 Bonuses Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonuses.map((bonus, idx) => (
              <Card
                key={idx}
                variant="watercolor"
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="brand">{bonus.badge}</Badge>
                    <span className="text-xs font-semibold text-[#87A4C1] line-through">
                      {bonus.value}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2642] leading-tight mb-1">
                    {bonus.title}
                  </h3>
                  <p className="font-serif text-sm sm:text-base text-[#B89647] font-semibold italic mb-3">
                    {bonus.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#385B80] leading-relaxed mb-5">
                    {bonus.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-white/80 border border-[#DCEBF6] space-y-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#102A45] block mb-1">
                      Qué vas a encontrar:
                    </span>
                    {bonus.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#274B70]">
                        <Check className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-right">
                  <span className="text-xs font-semibold text-[#2E8B57]">
                    ✓ Incluido sin costo adicional hoy
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
