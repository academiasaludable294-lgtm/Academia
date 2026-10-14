import React, { useState } from 'react';
import internalPagesImg from '../assets/images/paginas_internas_espanol_1791757879875.jpg';
import { PenTool, CheckCircle, Sparkles, Eye, FileText, ChevronRight } from 'lucide-react';

interface InternalPreviewProps {
  onScrollToOffer: () => void;
}

export const InternalPreview: React.FC<InternalPreviewProps> = ({ onScrollToOffer }) => {
  const [activeSample, setActiveSample] = useState<'diagnostic' | 'closing' | 'manifesto'>('diagnostic');

  const exercises = [
    {
      title: "Diagnóstico personal de vida en automático",
      desc: "Para observar tus rutinas, niveles de energía, decisiones mecánicas y sensación de sentido vital."
    },
    {
      title: "Cierre consciente de ciclos",
      desc: "Para reconocer lo que funcionó, lo que no, lo que agradecés y lo que estás listo/a para soltar sin culpas."
    },
    {
      title: "Identificación de valores prioritarios",
      desc: "Para descubrir cuáles son los valores cardinales que querés utilizar como tu filtro de decisiones."
    },
    {
      title: "Mapa emocional actual",
      desc: "Para identificar qué emociones predominan y comprender con precisión dónde están afectando tus decisiones."
    },
    {
      title: "Diseño de un día ideal",
      desc: "Para convertir una idea abstracta de “estar mejor” en una visión concreta, sensorial y realizable."
    },
    {
      title: "Definición del foco principal",
      desc: "Para decidir qué merece tu energía incondicional y qué proyectos o demandas quedan fuera."
    },
    {
      title: "Manifiesto personal",
      desc: "Para escribir de puño y letra los límites, estándares y la forma en que elegís vivir conscientemente."
    },
    {
      title: "Revisión mensual de claridad",
      desc: "Un ritual recurrente para recalibrar tu rumbo antes de que la inercia diaria vuelva a confundirte."
    }
  ];

  return (
    <section className="py-16 md:py-24 watercolor-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: No es solo leer */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A869]">
            ✦ Experiencia Práctica e Inmersiva ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2642] mt-2">
            No es solo leer.
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#B89647] font-semibold mt-1 italic">
            Vas a escribir. Vas a observar. Vas a decidir.
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#315377]">
            La guía está diseñada para que no te quedes solamente consumiendo información pasiva.
          </p>
        </div>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {exercises.map((item, idx) => (
            <div
              key={idx}
              className="watercolor-card rounded-xl p-5 border border-[#CFE4F6] shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#EBF5FC] text-[#102A45] flex items-center justify-center mb-3">
                  <PenTool className="w-4 h-4 text-[#C5A869]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#0F2642] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#416487] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mirá lo que vas a recibir */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#D5E8F6]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
              ✦ Transparencia Absoluta ✦
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#0F2642] mt-1">
              Mirá lo que vas a recibir
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#43678D]">
              Páginas reales. Preguntas guiadas. Espacios para volcar tus pensamientos. Fragmentos de los módulos de trabajo.
            </p>
            <blockquote className="mt-3 font-serif text-lg sm:text-xl font-semibold text-[#102A45] italic">
              “Ahora entiendo exactamente qué estoy comprando.”
            </blockquote>
          </div>

          {/* Interactive tabs for the sample */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveSample('diagnostic')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSample === 'diagnostic'
                  ? 'bg-[#102A45] text-white shadow-xs'
                  : 'bg-[#F0F6FA] text-[#3D6185] hover:bg-[#E3EFF7]'
              }`}
            >
              Módulo 01: Evaluación & Diagnóstico
            </button>
            <button
              onClick={() => setActiveSample('closing')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSample === 'closing'
                  ? 'bg-[#102A45] text-white shadow-xs'
                  : 'bg-[#F0F6FA] text-[#3D6185] hover:bg-[#E3EFF7]'
              }`}
            >
              Módulo 04: Mapa Emocional
            </button>
            <button
              onClick={() => setActiveSample('manifesto')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSample === 'manifesto'
                  ? 'bg-[#102A45] text-white shadow-xs'
                  : 'bg-[#F0F6FA] text-[#3D6185] hover:bg-[#E3EFF7]'
              }`}
            >
              Módulo 07: Manifiesto Personal
            </button>
          </div>

          {/* Realistic Graphic Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D5E7F6] shadow-md group">
            <img
              src={internalPagesImg}
              alt="Muestra de páginas internas de la Guía de Claridad y Reinicio Consciente con ejercicios y preguntas guiadas"
              className="w-full h-auto object-cover max-h-[540px]"
              referrerPolicy="no-referrer"
            />
            
            {/* Interactive overlay card highlighting realistic excerpt */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#F4F9FD] to-white border-t border-[#DDECF6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A869] block">
                  {activeSample === 'diagnostic' && 'Página 12 · Módulo 01'}
                  {activeSample === 'closing' && 'Página 28 · Módulo 04'}
                  {activeSample === 'manifesto' && 'Página 44 · Módulo 07'}
                </span>
                <p className="font-serif text-lg font-bold text-[#0F2642]">
                  {activeSample === 'diagnostic' && 'Matriz de Diagnóstico: ¿En qué áreas vivís en piloto automático?'}
                  {activeSample === 'closing' && 'Mapeo de Estados: ¿Qué emoción está tomando tus decisiones?'}
                  {activeSample === 'manifesto' && 'Mis Límites y Acuerdos Innegociables para este ciclo'}
                </p>
                <p className="text-xs text-[#52779D]">
                  Diseño editorial de alto contraste, tipografía cuidada y renglones espaciados para facilitar la introspección.
                </p>
              </div>

              <button
                onClick={onScrollToOffer}
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#0F2642] hover:bg-[#183B5E] transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                <span>Acceder a la guía completa</span>
                <ChevronRight className="w-4 h-4 text-[#E6CD8C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
