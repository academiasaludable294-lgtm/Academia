import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, X, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/content';

export const SocialProofNotification: React.FC = () => {
  const { socialProof } = SITE_CONFIG;
  const [currentNotification, setCurrentNotification] = useState<typeof socialProof.purchases[number] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasReachedOffer, setHasReachedOffer] = useState(false);
  const lastIndexRef = useRef<number>(-1);

  // 1. Detect when visitor reaches the offer section (#oferta)
  useEffect(() => {
    const offerElement = document.getElementById('oferta');
    if (!offerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasReachedOffer(true);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the offer section is in view
    );

    observer.observe(offerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. Manage the loop of notifications once offer section has been reached
  useEffect(() => {
    if (!hasReachedOffer) return;

    let displayTimeout: NodeJS.Timeout;
    let nextNotificationTimeout: NodeJS.Timeout;
    let isCancelled = false;

    const triggerNotification = () => {
      if (isCancelled) return;

      // Pick a random purchase different from the last one
      let nextIndex = Math.floor(Math.random() * socialProof.purchases.length);
      if (nextIndex === lastIndexRef.current && socialProof.purchases.length > 1) {
        nextIndex = (nextIndex + 1) % socialProof.purchases.length;
      }
      lastIndexRef.current = nextIndex;
      const selected = socialProof.purchases[nextIndex];

      setCurrentNotification(selected);
      setIsVisible(true);

      // Keep visible for exactly 4 seconds
      displayTimeout = setTimeout(() => {
        setIsVisible(false);

        // Schedule next notification in 17–30 seconds
        const randomDelaySec =
          socialProof.minIntervalSec +
          Math.random() * (socialProof.maxIntervalSec - socialProof.minIntervalSec);

        nextNotificationTimeout = setTimeout(() => {
          triggerNotification();
        }, randomDelaySec * 1000);
      }, socialProof.displayDurationMs);
    };

    // First notification triggers 2.5 seconds after reaching the offer
    const initialDelay = setTimeout(() => {
      triggerNotification();
    }, 2500);

    return () => {
      isCancelled = true;
      clearTimeout(initialDelay);
      clearTimeout(displayTimeout);
      clearTimeout(nextNotificationTimeout);
    };
  }, [hasReachedOffer, socialProof]);

  if (!hasReachedOffer || !currentNotification) return null;

  return (
    <div
      className={`fixed bottom-16 sm:bottom-6 left-4 sm:left-6 z-40 max-w-[340px] sm:max-w-[360px] transition-all duration-500 ease-out pointer-events-auto ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#CCE2F5] shadow-xl text-left flex items-start gap-3 relative overflow-hidden group">
        {/* Subtle gold accent indicator on the top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C5A869] via-[#E6CD8C] to-[#C5A869]" />

        {/* Avatar badge with initials */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0F2642] to-[#183B5E] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs border border-[#C5A869]/40">
          <span>{currentNotification.name.charAt(0)}</span>
        </div>

        {/* Notification details */}
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 text-xs text-[#0F2642] font-semibold leading-tight mb-0.5">
            <span>{currentNotification.name}</span>
            <span className="text-[#688CAE] font-normal">de</span>
            <span className="text-[#183B5E]">{currentNotification.city}</span>
          </div>

          <p className="text-xs text-[#305378] leading-snug">
            acaba de comprar <strong className="text-[#0F2642] font-semibold">{currentNotification.plan}</strong>
          </p>

          <div className="flex items-center gap-2 mt-1.5 text-[11px] text-[#557B9F]">
            <span className="flex items-center gap-1 text-[#2E8B57] font-medium">
              <CheckCircle2 className="w-3 h-3 text-[#2E8B57]" /> Compra verificada
            </span>
            <span>·</span>
            <span>{currentNotification.timeAgo}</span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#89A8C5] hover:text-[#0F2642] p-1 rounded transition-colors cursor-pointer"
          aria-label="Cerrar notificación"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
