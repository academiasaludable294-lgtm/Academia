import React from 'react';
import { Check, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { SectionContainer, SectionHeader, Card } from './ui';

export const AudienceAndPhilosophy: React.FC = () => {
  const { audience } = SITE_CONFIG;

  const reflectionQuestions = [
    "¿Cómo estoy viviendo?",
    "¿Qué quiero conservar?",
    "¿Qué necesito soltar?",
    "¿Qué es realmente importante para mí?",
    "¿Dónde quiero poner mi energía?",
    "¿Cómo quiero vivir este año?",
    "¿Qué voy a elegir hacer con todo esto?"
  ];

  return (
    <div className="bg-white">
      {/* Audience Qualification */}
      <section className="py-16 md:py-24 border-b border-[#E1EFF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Claridad & Honestidad"
            title="¿Para quién es esta guía?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Es para vos si... */}
            <Card variant="watercolor" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#2E8B57]/15 text-[#2E8B57] flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2642]">
                    Es para vos si...
                  </h3>
                </div>

                <div className="space-y-3">
                  {audience.forYou.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#244970]">
                      <Check className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Y para quién NO es... */}
            <div className="rounded-2xl p-6 sm:p-8 border border-[#EADBDB] bg-[#FDF9F9] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                    ✕
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B1E1E]">
                    ¿Y para quién no es?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#704848] mb-4">
                  Esta guía probablemente no sea para vos si:
                </p>

                <div className="space-y-3 mb-6">
                  {audience.notForYou.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#663D3D]">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-[#F0DADA] text-xs text-[#522929] leading-relaxed">
                Porque esta guía no hace el trabajo por vos. Te ayuda a hacerte las preguntas que quizás venís evitando. <strong>Y las respuestas... son tuyas.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pause Philosophy & Questions */}
      <SectionContainer variant="watercolor">
        {/* Por qué empieza con una pausa */}
        <SectionHeader
          eyebrow="El Espacio Seguro"
          title="Hay una razón por la que esta guía empieza con una pausa"
        />

        <Card variant="watercolor" className="text-center space-y-4 max-w-2xl mx-auto shadow-sm">
          <p className="text-base sm:text-lg text-[#25476D] leading-relaxed">
            No fue creada para agregarte otra obligación en tu calendario. Fue creada para darte un espacio.
          </p>

          <div className="py-2 space-y-1.5 text-sm sm:text-base text-[#102A45] font-medium">
            <p>Un espacio donde no tenés que responder mensajes.</p>
            <p>No tenés que cumplir expectativas ajenas.</p>
            <p>No tenés que demostrar nada a nadie.</p>
            <p>No tenés que tener las respuestas correctas de inmediato.</p>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#C5A869] font-bold">
            Solo necesitás ser honesto/a.
          </p>

          <blockquote className="mt-4 p-4 rounded-xl bg-[#EBF5FC] border border-[#CDE5F6] font-serif text-lg sm:text-xl font-bold text-[#0F2642] italic">
            “La claridad no aparece cuando pensás más, sino cuando ordenás lo que sentís.”
          </blockquote>
        </Card>

        {/* No necesitás cambiar toda tu vida hoy */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#0F2642] leading-tight">
            No necesitás cambiar toda tu vida hoy.
          </h3>
          <p className="font-serif text-xl sm:text-2xl text-[#B89647] font-semibold mt-1">
            Necesitás dejar de ignorar lo que ya sabés que necesita tu atención.
          </p>

          <div className="mt-6 text-sm sm:text-base text-[#3A5D82] space-y-3 max-w-xl mx-auto">
            <p>Quizás hace tiempo que sabés que algo tiene que cambiar.</p>
            <p>Quizás todavía no sabés exactamente qué. Y está bien.</p>
            <p className="font-semibold text-[#0F2642]">
              No necesitás empezar con una respuesta. Podés empezar con una pregunta:
            </p>
          </div>

          {/* 7 Questions Cards Progression */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl mx-auto text-left">
            {reflectionQuestions.map((q, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                  idx === reflectionQuestions.length - 1
                    ? 'sm:col-span-2 bg-[#0F2642] text-white border-[#0F2642] font-semibold shadow-sm'
                    : 'bg-white border-[#D9EAF6] text-[#1E4369]'
                }`}
              >
                <span className={`text-xs font-serif italic ${idx === reflectionQuestions.length - 1 ? 'text-[#E6CD8C]' : 'text-[#C5A869]'}`}>
                  {idx + 1}.
                </span>
                <span className="text-sm font-medium">{q}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 font-serif text-lg font-bold text-[#143459] italic">
            Ese es el proceso.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};
