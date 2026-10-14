import React, { useState } from 'react';
import { Check, CheckSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { SectionContainer, SectionHeader, CTAButton, Card } from './ui';

interface DiagnosticQuizProps {
  onScrollToOffer: () => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onScrollToOffer }) => {
  const { diagnosticQuestions } = SITE_CONFIG;
  const [selectedIndices, setSelectedIndices] = useState<number[]>([0, 1, 5]);

  const toggleQuestion = (index: number) => {
    setSelectedIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const selectAll = () => {
    if (selectedIndices.length === diagnosticQuestions.length) {
      setSelectedIndices([]);
    } else {
      setSelectedIndices(diagnosticQuestions.map((_, i) => i));
    }
  };

  const count = selectedIndices.length;

  return (
    <SectionContainer id="diagnostico" variant="watercolor">
      <SectionHeader
        eyebrow="Autodiagnóstico Honesto"
        title="¿Te está pasando esto?"
        subtitle="Tocá cada afirmación con la que te sientas identificado/a hoy:"
      />

      {/* Interactive checklist card */}
      <Card variant="watercolor" className="max-w-3xl mx-auto">
        {/* Header toolbar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8EAF7] text-xs font-medium text-[#46698F]">
          <span className="tabular-nums">
            Señales marcadas: <strong className="text-[#0F2642] text-sm">{count} de {diagnosticQuestions.length}</strong>
          </span>
          <button
            onClick={selectAll}
            className="text-xs text-[#1E4B77] hover:underline cursor-pointer flex items-center gap-1"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>{count === diagnosticQuestions.length ? 'Desmarcar todas' : 'Marcar todas'}</span>
          </button>
        </div>

        {/* Checklist items */}
        <div className="space-y-3">
          {diagnosticQuestions.map((q, idx) => {
            const isChecked = selectedIndices.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleQuestion(idx)}
                className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'bg-[#EBF5FB] border-[#A8D3F0] text-[#0F2642] shadow-2xs'
                    : 'bg-white/70 border-[#E2EFF8] text-[#3E6186] hover:bg-white hover:border-[#CCDFF0]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors border ${
                    isChecked
                      ? 'bg-[#102A45] border-[#102A45] text-white'
                      : 'border-[#A3C6E2] bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-sm sm:text-base leading-snug ${isChecked ? 'font-medium' : ''}`}>
                  {q}
                </span>
              </div>
            );
          })}
        </div>

        {/* Diagnosis dynamic banner */}
        <div className="mt-8 pt-6 border-t border-[#DCEAF5] text-center">
          {count >= 3 ? (
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#0F2642] to-[#183B5E] text-white shadow-md text-balance">
              <span className="text-xs text-[#E6CD8C] font-semibold tracking-wider uppercase block mb-1">
                ✦ Conclusión de tu diagnóstico
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold">
                Si respondiste “sí” a varias... no necesitás otra lista de tareas.
              </p>
              <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E6CD8C] mt-1">
                Necesitás claridad.
              </p>
              <p className="text-xs sm:text-sm text-[#C9E5F8] mt-2 max-w-lg mx-auto leading-relaxed">
                El cansancio no viene de hacer poco; viene de avanzar sin una brújula propia. La Guía de Claridad y Reinicio te da exactamente ese mapa.
              </p>
              <div className="mt-4">
                <CTAButton
                  onClick={onScrollToOffer}
                  variant="gold"
                  size="md"
                  showArrow
                >
                  Iniciar mi proceso por USD {SITE_CONFIG.pricing.current}
                </CTAButton>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E8F6]">
              <p className="font-serif text-lg font-semibold text-[#0F2642]">
                Marcá las afirmaciones que sientas presentes en tu día a día para ver tu diagnóstico.
              </p>
            </div>
          )}
        </div>
      </Card>
    </SectionContainer>
  );
};
