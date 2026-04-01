import { CalendlyModal } from "@/components/landing/CalendlyModal";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { SystemSection } from "@/components/landing/SystemSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { UrgencySection } from "@/components/landing/UrgencySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c0b] text-[#c8ddd9]">
      <CalendlyModal />
      <CustomCursor />
      <HeroSection />
      <OfferSection />
      <SystemSection />
      <WorkflowSection />
      <TestimonialsSection />
      <UrgencySection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
