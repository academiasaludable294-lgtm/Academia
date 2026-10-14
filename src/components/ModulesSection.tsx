import React, { useState } from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { SectionContainer, SectionHeader, AccordionItem } from './ui';

export const ModulesSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);
  const { modules } = SITE_CONFIG;

  return (
    <SectionContainer id="modulos" variant="white">
      <SectionHeader
        eyebrow="Contenido Estructurado"
        title="Esto es lo que vas a trabajar"
        subtitle="8 módulos guiados paso a paso para desmantelar el piloto automático y recuperar dirección propia."
      />

      {/* Modules List using reusable AccordionItem */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {modules.map((mod, idx) => {
          const isOpen = activeModule === idx;

          const header = (
            <div className="flex items-start sm:items-center gap-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A869] tracking-tight">
                {mod.number}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#52779C] block">
                  Módulo {mod.number}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F2642] leading-snug">
                  {mod.title}
                </h3>
                {!isOpen && (
                  <p className="text-xs sm:text-sm text-[#4E7196] italic mt-0.5 line-clamp-1">
                    {mod.hook}
                  </p>
                )}
              </div>
            </div>
          );

          return (
            <AccordionItem
              key={mod.number}
              isOpen={isOpen}
              onToggle={() => setActiveModule(isOpen ? null : idx)}
              header={header}
            >
              <blockquote className="font-serif text-base sm:text-lg italic text-[#102A45] mb-3">
                “{mod.hook}”
              </blockquote>
              <p className="text-sm sm:text-base text-[#2E5177] leading-relaxed mb-5">
                {mod.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-[#D5E8F6]">
                  <span className="font-semibold text-[#102A45] block mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#C5A869]" />
                    Ejercicio clave incluido:
                  </span>
                  <span className="text-[#3E6287]">{mod.exercise}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EAF4FB] border border-[#C6E2F6]">
                  <span className="font-semibold text-[#0F2642] block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57]" />
                    Resultado esperado:
                  </span>
                  <span className="text-[#1E456E] font-medium">{mod.outcome}</span>
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </div>
    </SectionContainer>
  );
};
