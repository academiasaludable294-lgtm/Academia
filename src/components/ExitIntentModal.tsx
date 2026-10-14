import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, ShieldAlert, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';

interface ExitIntentModalProps {
  onOpenCheckout?: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onOpenCheckout }) => {
  const { exitIntent, pricing } = SITE_CONFIG;
  const [isOpen, setIsOpen] = useState(false);
  const [hasEligibleDwellTime, setHasEligibleDwellTime] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this browser session
    const alreadyShown = sessionStorage.getItem('exit_intent_modal_shown');
    if (alreadyShown) return;

    // Minimum dwell time timer (15 seconds)
    const dwellTimer = setTimeout(() => {
      setHasEligibleDwellTime(true);
    }, exitIntent.minDwellTimeSec * 1000);

    return () => clearTimeout(dwellTimer);
  }, [exitIntent.minDwellTimeSec]);

  useEffect(() => {
    if (!hasEligibleDwellTime) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor leaves through the top of the viewport
      if (e.clientY <= 15) {
        const alreadyShown = sessionStorage.getItem('exit_intent_modal_shown');
        if (!alreadyShown) {
          sessionStorage.setItem('exit_intent_modal_shown', 'true');
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasEligibleDwellTime]);

  const handleGoToOffer = () => {
    setIsOpen(false);
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenCheckout) {
      onOpenCheckout();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#CCE2F5] overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#C5A869] via-[#E6CD8C] to-[#C5A869]" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#7B9CBF] hover:text-[#0F2642] hover:bg-[#F0F7FC] transition-colors cursor-pointer z-10"
          aria-label="Cerrar aviso"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-9 overflow-y-auto max-h-[85vh]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#C5A869]">
            <Sparkles className="w-4 h-4 text-[#C5A869]" />
            <span>{exitIntent.eyebrow}</span>
          </div>

          {/* Main Title touching hesitation */}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2642] leading-tight mb-3">
            {exitIntent.title}
          </h3>

          {/* Hard-hitting lead sentence */}
          <div className="p-3.5 rounded-xl bg-[#FFF8EE] border border-[#F5E4C3] mb-5">
            <p className="text-xs sm:text-sm text-[#875510] font-semibold leading-relaxed flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-[#C58925] shrink-0 mt-0.5" />
              <span>{exitIntent.painLead}</span>
            </p>
          </div>

          {/* Deep Pain Points List */}
          <div className="space-y-3 mb-6">
            {exitIntent.painPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F9FD] border border-[#DCEBF6] text-xs sm:text-sm text-[#274B70] leading-relaxed"
              >
                <span className="text-[#C5A869] font-bold shrink-0 mt-0.5">✦</span>
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* Offer Reminder Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#0F2642] to-[#183B5E] text-white text-center mb-6 shadow-md">
            <p className="text-xs sm:text-sm text-[#D8ECF8] leading-relaxed">
              {exitIntent.reminder}
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E6CD8C] mt-1">
              {pricing.currency} {pricing.current}
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleGoToOffer}
              className="w-full py-4 px-6 rounded-xl font-bold text-white bg-[#0F2642] hover:bg-[#183B5E] active:scale-[0.99] transition-all shadow-xl border border-[#C5A869]/60 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer group"
            >
              <span>{exitIntent.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#E6CD8C] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleClose}
              className="w-full py-2 text-xs text-[#6F8FAE] hover:text-[#0F2642] text-center transition-colors cursor-pointer"
            >
              {exitIntent.dismissText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
