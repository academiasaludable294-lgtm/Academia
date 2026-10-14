import React from 'react';
import heroWorkspaceImg from '../assets/images/hero_workspace_2027_1791757457793.jpg';

interface BookMockup3DProps {
  onOpenSample?: () => void;
}

export const BookMockup3D: React.FC<BookMockup3DProps> = ({ onOpenSample }) => {
  return (
    <div className="relative flex flex-col items-center justify-center group w-full mx-auto">
      {/* Decorative celestial background aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C5E3F6]/50 via-[#E8F4FC]/40 to-[#FCEECB]/30 rounded-3xl blur-2xl -z-10 transform group-hover:scale-102 transition-transform duration-700 pointer-events-none" />

      {/* The Hero workspace image ("Ecosistema Digital en Tu Espacio") */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#CCE2F5] bg-white group/img transition-all duration-300 hover:shadow-3xl">
        <img
          src={heroWorkspaceImg}
          alt="Guía de Claridad y Reinicio Consciente 2027 - Ecosistema Digital en Tu Espacio (Computadora, tablet y celular)"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-[1.01]"
          referrerPolicy="no-referrer"
        />

        {/* Discreet overlay badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#D0E4F5] text-[11px] font-semibold text-[#102A45] shadow-xs flex items-center gap-1.5">
          <span className="text-[#C5A869]">✦</span>
          <span>Acceso digital en computadora, tablet y celular</span>
        </div>
      </div>

      {/* Floating sample explorer trigger */}
      {onOpenSample && (
        <button
          onClick={onOpenSample}
          className="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#143256] bg-white/95 hover:bg-white border border-[#C5A869]/40 rounded-full shadow-xs transition-colors cursor-pointer"
        >
          <span className="text-[#C5A869]">✦</span>
          <span>Explorar muestra del interior y ejercicios</span>
        </button>
      )}
    </div>
  );
};
