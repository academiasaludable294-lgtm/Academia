import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { EmpathySection } from './components/EmpathySection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { CostAndMap } from './components/CostAndMap';
import { Transformations } from './components/Transformations';
import { ModulesSection } from './components/ModulesSection';
import { InternalPreview } from './components/InternalPreview';
import { MethodAndBonuses } from './components/MethodAndBonuses';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ValueOfferStack } from './components/ValueOfferStack';
import { AudienceAndPhilosophy } from './components/AudienceAndPhilosophy';
import { FAQAndClosing } from './components/FAQAndClosing';
import { StickyBottomBar } from './components/StickyBottomBar';
import { SampleModal } from './components/SampleModal';
import { SocialProofNotification } from './components/SocialProofNotification';
import { ExitIntentModal } from './components/ExitIntentModal';
import { SITE_CONFIG } from './config/content';

export default function App() {
  const [isSampleOpen, setIsSampleOpen] = useState(false);

  const handleOpenCheckout = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: SITE_CONFIG.product.title,
        value: Number(SITE_CONFIG.pricing.current),
        currency: SITE_CONFIG.pricing.currency,
      });
    }

    try {
      window.location.href = SITE_CONFIG.pricing.checkoutUrl;
    } catch {
      window.open(SITE_CONFIG.pricing.checkoutUrl, '_blank');
    }
  };

  const handleOpenSample = () => {
    setIsSampleOpen(true);
  };

  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F9FD] text-[#172B4D] flex flex-col font-sans selection:bg-[#C9E5F8] selection:text-[#0E2A47]">
      {/* 3-Zone Header Contract */}
      <TopBar onScrollToOffer={handleScrollToOffer} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Book & Pricing Anchor */}
        <Hero 
          onScrollToOffer={handleScrollToOffer} 
          onOpenSample={handleOpenSample} 
        />

        {/* 2. Empathy: Hay algo que nadie te dice sobre sentirte perdido/a */}
        <EmpathySection />

        {/* 3. Diagnostic Checklist: ¿Te está pasando esto? */}
        <DiagnosticQuiz onScrollToOffer={handleScrollToOffer} />

        {/* 4. Cost of Staying the Same & You need a map, not just willpower */}
        <CostAndMap />

        {/* 5. The 8 Core Transformations & What changes with clarity */}
        <Transformations />

        {/* 6. Detailed 8-Module Curriculum */}
        <ModulesSection />

        {/* 7. Hands-on Exercises & Look Inside Preview */}
        <InternalPreview onScrollToOffer={handleScrollToOffer} />

        {/* 8. The 8-Step Simple Method + 4 Exclusive Bonuses */}
        <MethodAndBonuses onScrollToOffer={handleScrollToOffer} />

        {/* 8.5 Testimonials & Social Proof */}
        <TestimonialsSection onScrollToOffer={handleScrollToOffer} />

        {/* 9. Full Offer Stack & Currency Converter (✦ El Paquete Completo ✦) */}
        <ValueOfferStack onOpenCheckout={handleOpenCheckout} />

        {/* 10. Audience Qualification & The Pause Philosophy */}
        <AudienceAndPhilosophy />

        {/* 11. 4 Simple Steps, FAQ, and Climax Closing Call */}
        <FAQAndClosing onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Sticky Bottom Conversion Bar */}
      <StickyBottomBar onOpenCheckout={handleOpenCheckout} />

      {/* Social Proof Real-Time Notifications (triggered on scroll to #oferta) */}
      <SocialProofNotification />

      {/* Interactive Modals */}

      <SampleModal
        isOpen={isSampleOpen}
        onClose={() => setIsSampleOpen(false)}
        onScrollToOffer={handleScrollToOffer}
      />

      {/* Exit Intent Pop-up */}
      <ExitIntentModal onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}
