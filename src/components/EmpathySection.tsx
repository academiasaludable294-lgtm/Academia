import React from 'react';
import mindfulHeroImg from '../assets/images/clarity_mindful_hero_1791642698893.jpg';

export const EmpathySection: React.FC = () => {
  const procrastinationPhrases = [
    "“Después veo qué quiero.”",
    "“Cuando tenga tiempo me ocupo de mí.”",
    "“Primero tengo que resolver esto.”",
    "“Más adelante voy a ordenar mi vida.”"
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative border-y border-[#E2EFF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section kicker */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
            ✦ Una pausa necesaria ✦
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F2642] mt-2 leading-tight">
            Hay algo que nadie te dice sobre sentirte perdido/a...
          </h2>
        </div>

        {/* Narrative text with thoughtful editorial spacing */}
        <div className="space-y-6 text-[#2E4F73] text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl font-serif text-[#0F2642] italic text-center">
            Tal vez no estás haciendo todo mal.
          </p>

          <p>
            Tal vez simplemente llevás demasiado tiempo haciendo cosas sin detenerte a preguntarte:
          </p>

          <blockquote className="my-6 py-4 px-6 bg-[#F0F7FC] rounded-xl border-l-0 border border-[#D2E7F5] text-center">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-[#0E2744]">
              ¿Esto todavía tiene sentido para mí?
            </span>
          </blockquote>

          <div className="space-y-2 py-2">
            <p className="font-medium text-[#133357]">Porque podés cumplir.</p>
            <p className="font-medium text-[#133357]">Podés trabajar.</p>
            <p className="font-medium text-[#133357]">Podés cuidar a otros.</p>
            <p className="font-medium text-[#133357]">Podés tener responsabilidades.</p>
            <p className="font-medium text-[#133357]">Podés seguir avanzando.</p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-[#EBF5FB] to-[#F5FAFE] border border-[#CFE5F6] text-center my-6">
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#0F2847]">
              Y aun así... sentir que internamente estás completamente desconectado/a.
            </p>
          </div>

          <div className="text-center space-y-1 text-[#416285] text-sm sm:text-base py-2">
            <p>Los días pasan.</p>
            <p>Las semanas pasan.</p>
            <p className="font-semibold text-[#0E253F]">El año avanza.</p>
          </div>

          <p className="text-center font-medium text-[#17385E]">
            Y vos seguís diciendo:
          </p>

          {/* Quotation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {procrastinationPhrases.map((phrase, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-white border border-[#D7E8F6] text-center text-sm font-medium text-[#31567C] italic shadow-2xs"
              >
                {phrase}
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-base sm:text-lg text-[#16385D] font-semibold">
              Pero ese “más adelante” puede convertirse en meses.
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#B89647] mt-1">
              Incluso años.
            </p>
          </div>
        </div>

        {/* Editorial Photo Divider with Quote Scrim */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-[#D5E7F5] relative group">
          <img
            src={mindfulHeroImg}
            alt="Espacio de reflexión y claridad consciente con luz natural"
            className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-101 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2642]/85 via-[#0F2642]/40 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white max-w-xl">
              <span className="text-[#E6CD8C] text-xs font-semibold uppercase tracking-wider block mb-1">
                ✦ Detenerte para ordenar
              </span>
              <p className="font-serif text-lg sm:text-2xl font-light italic leading-snug">
                “La claridad no aparece cuando pensás más, sino cuando ordenás lo que sentís.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
