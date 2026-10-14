import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { SectionContainer, SectionHeader, Card } from './ui';

export const Transformations: React.FC = () => {
  const { transformations, clarityShifts } = SITE_CONFIG;

  return (
    <SectionContainer variant="watercolor">
      {/* Solution Intro */}
      <SectionHeader
        eyebrow="El Proceso Guiado"
        title="Conocé la Guía de Claridad y Reinicio Consciente"
        subtitle="Un proceso de 8 módulos para volver a escucharte y recuperar dirección."
      />

      <div className="text-center max-w-xl mx-auto -mt-6 mb-12">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#4E7196]">
          <span>No es una agenda</span>
          <span>·</span>
          <span>No es una colección de frases motivacionales</span>
          <span>·</span>
          <span>No es una fórmula mágica</span>
        </div>
        <p className="mt-3 text-sm sm:text-base text-[#1E3F63] font-medium">
          Es un proceso de reflexión guiada con ejercicios prácticos para trabajar sobre tu realidad actual.
        </p>
      </div>

      {/* 8 Transformation Badges */}
      <Card variant="watercolor" className="mb-16">
        <div className="text-center mb-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2642]">
            Tu transición en este viaje:
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {transformations.map((pair, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[#DCEAF6] flex items-center justify-between shadow-2xs hover:border-[#B8D7EF] transition-colors"
            >
              <span className="text-xs sm:text-sm text-[#5B7998] line-through font-medium">
                {pair.from}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mx-1" />
              <span className="text-xs sm:text-sm text-[#0F2642] font-semibold text-right">
                {pair.to}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* ¿Qué puede cambiar cuando recuperás claridad? */}
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Impacto en tu vida real"
          title="¿Qué puede cambiar cuando recuperás claridad?"
        />

        <div className="space-y-4">
          {clarityShifts.map((shift, idx) => (
            <div
              key={idx}
              className="watercolor-card rounded-xl p-5 border border-[#CFE4F6] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3 hover:shadow-sm transition-shadow"
            >
              <div className="text-xs sm:text-sm text-[#5A799B] font-medium flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>{shift.leave}</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#0F2642] flex items-center gap-2 bg-[#EBF5FC] px-4 py-2 rounded-lg border border-[#CCE2F5]">
                <Sparkles className="w-4 h-4 text-[#C5A869] shrink-0" />
                <span>{shift.embrace}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy Banner */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#D2E7F5] shadow-sm max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A869] mb-1">
            ✦ El Verdadero Sentido ✦
          </p>
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#0F2642]">
            No se trata de tener la vida resuelta.
          </p>
          <p className="text-base sm:text-lg text-[#284C72] mt-1 font-medium">
            Se trata de tener más claridad para decidir cómo querés vivirla.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
