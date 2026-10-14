import React from 'react';
import { X, Sparkles, CheckCircle2, ChevronRight, PenTool } from 'lucide-react';
import internalPagesImg from '../assets/images/paginas_internas_espanol_1791757879875.jpg';
import { SITE_CONFIG } from '../config/content';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToOffer: () => void;
}

export const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose, onScrollToOffer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#CCE2F5] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0F2642] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#E6CD8C]">✦</span>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C9E0F5] block">
                Muestra Editorial Exclusiva
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold">
                Páginas Internas de la Guía
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          <div className="rounded-xl overflow-hidden border border-[#D5E7F6] shadow-sm">
            <img
              src={internalPagesImg}
              alt="Muestra de páginas de ejercicios guiados de la Guía de Claridad"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#F4F9FD] border border-[#D5E8F6]">
              <span className="font-serif font-bold text-[#0F2642] block mb-1 text-sm flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-[#C5A869]" />
                Diseñado para escribir
              </span>
              <p className="text-[#3E6186] leading-relaxed">
                Cada página combina un breve encuadre conceptual con preguntas de indagación directa y renglones espaciados para procesar tus pensamientos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F9FD] border border-[#D5E8F6]">
              <span className="font-serif font-bold text-[#0F2642] block mb-1 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57]" />
                Formatos incluidos
              </span>
              <p className="text-[#3E6186] leading-relaxed">
                PDF interactivo editable (podés escribir directo desde el teclado de tu celular o computadora) y versión lista para imprimir si preferís el lápiz y papel.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E1EFF8]">
            <p className="text-xs text-[#5C81A6] text-center sm:text-left">
              Incluye los 8 módulos completos + 4 bonos por un único pago de {SITE_CONFIG.pricing.currency} {SITE_CONFIG.pricing.current}
            </p>
            <button
              onClick={() => {
                onClose();
                onScrollToOffer();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-white bg-[#0F2642] hover:bg-[#183B5E] text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Acceder a la versión completa</span>
              <ChevronRight className="w-4 h-4 text-[#E6CD8C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
