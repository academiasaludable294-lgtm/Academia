import React from 'react';
import { Compass, Eye, XCircle, Layers, CheckCircle } from 'lucide-react';

export const CostAndMap: React.FC = () => {
  const habits = [
    "Acostumbrarte a estar cansado/a.",
    "Acostumbrarte a postergar.",
    "Acostumbrarte a decir “estoy bien” cuando sabés que algo no está bien.",
    "Acostumbrarte a vivir reaccionando.",
    "Acostumbrarte a elegir lo urgente mientras lo importante queda siempre para después."
  ];

  const progression = [
    "Un día.",
    "Una decisión.",
    "Un hábito.",
    "Una oportunidad postergada.",
    "Otra vez decir que sí cuando querías decir que no."
  ];

  const mapSteps = [
    { title: "Primero", action: "Te ayuda a mirar", desc: "Observar tu realidad sin maquillarla ni juzgarla.", icon: Eye },
    { title: "Después", action: "A cerrar", desc: "Soltar compromisos caducos y cargas del pasado.", icon: XCircle },
    { title: "Después", action: "A ordenar", desc: "Alinear emociones, energía y valores genuinos.", icon: Layers },
    { title: "Después", action: "A elegir", desc: "Definir un foco claro para saber dónde poner tu energía.", icon: Compass }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E0EDF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: El Costo Oculto */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A869]">
              ✦ La trampa silenciosa ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2642] mt-2">
              Porque seguir igual también tiene un costo
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#3E6186] font-serif italic">
              Y quizás este sea el costo que menos se nota.
            </p>
          </div>

          <div className="watercolor-card rounded-2xl p-6 sm:p-10 border border-[#D5E8F6] shadow-sm max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl font-serif text-[#0F2642] font-semibold text-center mb-6">
              No es solamente perder tiempo. <span className="text-[#C5A869]">Es acostumbrarte.</span>
            </p>

            <div className="space-y-3 mb-8">
              {habits.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F9FD] border border-[#DCEBF6] text-sm sm:text-base text-[#1E4369]"
                >
                  <span className="text-[#C5A869] text-xs">✦</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E0EDF7] pt-6 text-center space-y-4">
              <p className="text-base sm:text-lg text-[#2A4C70]">
                Y lo más peligroso es que <strong>no ocurre de golpe</strong>. Ocurre lentamente:
              </p>

              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#486B8E] font-medium">
                {progression.map((p, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1 bg-white rounded-md border border-[#D5E8F6]">
                      {p}
                    </span>
                    {idx < progression.length - 1 && <span className="text-[#C5A869]">→</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="pt-4">
                <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2642] italic">
                  “¿Cómo llegué hasta acá?”
                </blockquote>
                <p className="mt-4 text-base sm:text-lg font-semibold text-[#183B5E]">
                  No necesitás esperar a llegar a ese punto.
                </p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#C5A869]">
                  Podés parar ahora.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: No te falta fuerza de voluntad. Quizás te falta un mapa. */}
        <div className="watercolor-deep-card rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Subtle celestial stars in corners */}
          <span className="absolute top-6 left-6 text-[#C5A869]/40 text-xl pointer-events-none">✦</span>
          <span className="absolute bottom-6 right-6 text-[#C5A869]/40 text-xl pointer-events-none">✦</span>
          <span className="absolute top-8 right-12 text-[#99C5E8]/30 text-sm pointer-events-none">✧</span>

          <span className="text-xs font-semibold tracking-widest uppercase text-[#E6CD8C] block mb-2">
            ✦ Cambio de Paradigma ✦
          </span>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            No te falta fuerza de voluntad.
          </h3>
          <p className="font-serif text-2xl sm:text-4xl font-normal text-[#E6CD8C] italic mb-6">
            Quizás te falta un mapa.
          </p>

          <p className="text-sm sm:text-base text-[#D0E5F5] max-w-2xl mx-auto leading-relaxed mb-6">
            Cuando no sabés hacia dónde querés ir, cualquier camino parece válido. Y cuando todo parece importante... <strong className="text-white">nada recibe realmente tu atención.</strong>
          </p>

          <div className="p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 max-w-xl mx-auto text-xs sm:text-sm text-[#E2F0FB] mb-8">
            <p className="italic">
              Por eso esta guía no empieza diciéndote: “Levantate más temprano”, “Trabajá más”, “Sé más productivo/a” o “Ponete 20 metas”.
            </p>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#E6CD8C] font-semibold mb-6">
            Hace algo diferente:
          </p>

          {/* The 4 Progressive Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {mapSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E6CD8C]">
                        {step.title}
                      </span>
                      <Icon className="w-4 h-4 text-[#E6CD8C]" />
                    </div>
                    <p className="font-serif text-lg font-bold text-white mb-1.5">
                      {step.action}
                    </p>
                    <p className="text-xs text-[#C9E0F2] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 text-center">
            <p className="text-xs sm:text-sm text-[#D5E7F6] max-w-md mx-auto">
              Porque antes de construir una nueva dirección... <br />
              <strong className="text-white text-sm sm:text-base">necesitás saber desde dónde estás partiendo.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
