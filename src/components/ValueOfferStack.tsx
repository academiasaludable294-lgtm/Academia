import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Lock } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { CTAButton, SectionContainer, SectionHeader } from './ui';

interface ValueOfferStackProps {
  onOpenCheckout: () => void;
}

export const ValueOfferStack: React.FC<ValueOfferStackProps> = ({ onOpenCheckout }) => {
  const { pricing, bonuses, product, ctas } = SITE_CONFIG;
  const [selectedCurrency, setSelectedCurrency] = useState<keyof typeof pricing.rates>('USD');

  const current = pricing.rates[selectedCurrency];

  const mainPillars = [
    "Conciencia & Salida del Piloto Automático",
    "Cierre de Ciclos que Todavía Pesan",
    "Valores Cardinales vs Expectativas Ajenas",
    "Mundo Emocional & Filtro de Decisiones",
    "Visualización Concreta de tu Día Ideal",
    "Enfoque Principal & Renuncias Conscientes",
    "Manifiesto de Vida & Compromiso Personal",
    "Integración y Recalibración Mensual"
  ];

  return (
    <SectionContainer id="oferta" variant="watercolor">
      <SectionHeader
        eyebrow="El Paquete Completo"
        title="Ahora mirá todo lo que te llevás"
        subtitle="Un solo acceso. Todo reunido sin suscripciones ni costos ocultos."
      />

      {/* Big Stack Card */}
      <div className="watercolor-card rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#C5A869]/50 shadow-2xl relative overflow-hidden bg-white/95 max-w-4xl mx-auto">
        {/* Gold ribbon */}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C5A869] to-[#D8BC7D] text-[#0F2642] text-xs font-bold uppercase tracking-wider py-1.5 px-6 rounded-bl-xl shadow-xs">
          Oferta Especial Única
        </div>

        {/* Product 1: Main Guide */}
        <div className="pb-8 border-b border-[#D8EAF7]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A869]">
                PRODUCTO PRINCIPAL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2642]">
                {product.title}
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#5A7C9F] bg-[#EEF6FC] px-3 py-1 rounded-md border border-[#D5E8F6] self-start sm:self-auto">
              Edición {product.edition}
            </span>
          </div>

          <p className="text-sm font-medium text-[#294B70] mb-4">
            8 módulos completos con ejercicios estructurados:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#20446A]">
            {mainPillars.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2E8B57] shrink-0" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Bonuses Stack List */}
        <div className="py-8 border-b border-[#D8EAF7] space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A869] block">
            + 4 BONOS COMPLEMENTARIOS INCLUIDOS HOY
          </span>

          <div className="space-y-3">
            {bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F4F9FD] border border-[#DCEBF6] flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-xs text-[#0E253F] bg-white px-2 py-0.5 rounded border border-[#CDE3F3] shrink-0 mt-0.5">
                    {bonus.badge.toUpperCase()}
                  </span>
                  <div>
                    <p className="font-serif text-base font-bold text-[#0F2642]">
                      {bonus.title}
                    </p>
                    <p className="text-xs text-[#4A6E94]">{bonus.tagline}</p>
                  </div>
                </div>
                <span className="text-xs text-[#2E8B57] font-semibold shrink-0">
                  GRATIS
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Value Summary */}
        <div className="pt-8 text-center">
          <div className="space-y-1 mb-6 text-sm text-[#44688E]">
            <p>No necesitás comprar cinco productos diferentes.</p>
            <p>No necesitás buscar durante horas qué herramienta usar.</p>
            <p className="font-semibold text-[#0F2642]">No necesitás esperar al “momento perfecto”.</p>
            <p className="text-xs text-[#6285A9] pt-1">
              Tenés el proceso principal y los recursos complementarios reunidos en una sola oferta.
            </p>
          </div>

          {/* Currency selector tabs */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {(Object.keys(pricing.rates) as Array<keyof typeof pricing.rates>).map(curr => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  selectedCurrency === curr
                    ? 'bg-[#0F2642] text-white font-bold'
                    : 'bg-[#EDF5FA] text-[#426487] hover:bg-[#E0EFF8]'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <p className="text-xs font-semibold tracking-wider text-[#5C81A6] uppercase">
            Todo esto hoy por solo:
          </p>

          <div className="my-2">
            <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#0F2642] tracking-tight">
              {current.symbol} {current.amount}
            </span>
            <p className="text-xs text-[#7093B8] mt-1">
              {current.note} · Acceso de por vida
            </p>
          </div>

          {/* Main Big CTA */}
          <div className="mt-4">
            <CTAButton
              href={pricing.checkoutUrl}
              onClick={onOpenCheckout}
              size="lg"
              showSparkle
              className="min-w-[320px]"
            >
              {ctas.stack}
            </CTAButton>
          </div>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-[#5C80A5]">
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
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#5C80A5]" />
              Checkout encriptado SSL
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
