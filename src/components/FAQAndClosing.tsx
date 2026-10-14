import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';
import { CTAButton, SectionContainer, SectionHeader } from './ui';

interface FAQAndClosingProps {
  onOpenCheckout: () => void;
}

export const FAQAndClosing: React.FC<FAQAndClosingProps> = ({ onOpenCheckout }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { steps, faqs, product, pricing, ctas } = SITE_CONFIG;

  return (
    <div className="bg-white">
      {/* 4 Next Steps */}
      <section className="py-16 md:py-20 border-b border-[#E1EFF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Simplicidad Total"
            title="Tu próximo paso es muy simple"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F6FAFD] border border-[#DEEDF7] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#102A45] text-white flex items-center justify-center font-serif text-sm font-bold mb-3">
                    {st.num}
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0F2642] mb-1">
                    {st.title}
                  </h4>
                  <p className="text-xs text-[#43678E] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <SectionContainer id="preguntas" variant="watercolor">
        <SectionHeader
          eyebrow="Respuestas Claras"
          title="Preguntas Frecuentes"
        />

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#D8EAF7] overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#0F2642] hover:text-[#183B5E] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A9EB8] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#3E6186] leading-relaxed border-t border-[#EDF4FA] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Una última cosa... */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E1EFF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Para Reflexionar"
            title="Una última cosa..."
          />

          <div className="space-y-4 text-base sm:text-lg text-[#325477] leading-relaxed max-w-xl mx-auto">
            <p>No esperes a sentirte completamente perdido/a para empezar a escucharte.</p>
            <p>No esperes a tener más tiempo.</p>
            <p>No esperes a que todo se calme.</p>
            <p className="font-medium text-[#112C4B]">
              Porque siempre va a aparecer algo. Otra responsabilidad. Otro problema. Otra urgencia.
            </p>
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#0F2642]">
              Y si siempre esperás el momento perfecto... <br />
              <span className="text-[#C5A869]">podés pasar otro año entero en automático.</span>
            </p>
            <p className="pt-2 text-sm text-[#4E7196]">
              La guía no puede elegir por vos. Pero puede darte el espacio para empezar a elegir conscientemente.
            </p>
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F0F7FC] border border-[#CFE5F6] max-w-md mx-auto">
            <p className="font-serif text-xl font-bold text-[#0F2642] mb-1">
              {product.title}
            </p>
            <p className="text-xs text-[#52779D] mb-4">
              8 módulos · Ejercicios prácticos · 4 bonos complementarios · Un proceso para volver a vos
            </p>
            <div className="font-serif text-4xl font-extrabold text-[#0F2642] mb-3">
              {pricing.currency} {pricing.current}
            </div>
            <CTAButton
              href={pricing.checkoutUrl}
              onClick={onOpenCheckout}
              size="md"
              fullWidth
              showArrow
            >
              QUIERO EMPEZAR AHORA
            </CTAButton>
            <p className="text-[11px] text-[#698CAE] mt-3 italic">
              No necesitás tener todas las respuestas. Solo necesitás estar dispuesto/a a hacerte las preguntas correctas.
            </p>
          </div>
        </div>
      </section>

      {/* Climax Final Banner */}
      <section className="py-20 md:py-28 watercolor-deep-card text-white text-center relative overflow-hidden">
        <span className="absolute top-8 left-12 text-[#C5A869]/40 text-2xl select-none pointer-events-none">✦</span>
        <span className="absolute bottom-8 right-12 text-[#C5A869]/40 text-2xl select-none pointer-events-none">✦</span>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E6CD8C] block mb-2">
            ✦ Tu Punto de Partida ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-2">
            La claridad no es el destino.
          </h2>
          <p className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#E6CD8C] italic mb-8">
            Es el comienzo.
          </p>

          <div className="space-y-3 text-sm sm:text-base text-[#D0E4F5] max-w-xl mx-auto leading-relaxed mb-8">
            <p>No necesitás convertirte en alguien diferente. Necesitás dejar de ignorarte.</p>
            <p>Podés seguir corriendo. Seguir resolviendo. Seguir reaccionando. Seguir diciendo “después”.</p>
            <p className="font-serif text-xl sm:text-2xl text-white font-semibold pt-2">
              O podés detenerte. Mirar. Ordenar. Elegir.
            </p>
            <p className="text-xs sm:text-sm text-[#C2DEFA]">
              Y empezar a vivir con un poco más de presencia, enfoque y verdad.
            </p>
          </div>

          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E6CD8C] mb-8 italic">
            La decisión empieza con vos.
          </p>

          {/* Grand CTA */}
          <CTAButton
            href={pricing.checkoutUrl}
            onClick={onOpenCheckout}
            variant="gold"
            size="lg"
            showSparkle
          >
            {ctas.final}
          </CTAButton>

          <p className="mt-4 text-xs text-[#99C5EA]">
            Acceso digital inmediato · Garantía de {pricing.guaranteeDays} días · Comienzo en el acto
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#091728] text-center text-xs text-[#7B9CBF] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A869]">✦</span>
            <span className="font-serif font-bold text-white text-sm">{product.title}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Acceso Digital Inmediato</span>
            <span>·</span>
            <span>Garantía de {pricing.guaranteeDays} Días</span>
            <span>·</span>
            <span>Soporte: {product.supportEmail}</span>
          </div>
          <p className="text-[11px] text-[#557597]">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
