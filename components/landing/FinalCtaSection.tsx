import { CalendlyPopupButton } from "./CalendlyPopupButton";
import { ArrowIcon } from "./shared";

export function FinalCtaSection() {
  return (
    <section id="apply" className="relative overflow-hidden bg-[#080c0b] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,189,176,0.16),transparent_55%)]" />
      <div className="relative mx-auto max-w-[900px] rounded-[32px] border border-[rgba(51,189,176,0.18)] bg-[#141c1a] px-6 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:px-12 max-[470px]:py-6 md:py-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.12)] px-4 py-2 text-[0.84rem] font-bold uppercase tracking-[0.08em] text-[#33bdb0] md:mb-8 md:text-[0.88rem]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#33bdb0] animate-[pulse-glow_2s_infinite]" />
          Only 5 Spots Available
        </div>
        <h2 className="font-[var(--font-fraunces)] text-[clamp(2.2rem,6vw,4.8rem)] font-light leading-[1.06] tracking-[-0.03em] text-[#f0faf9]">
          Your expertise is
          <br />
          worth being <em className="italic text-[#33bdb0]">seen.</em>
        </h2>
        <p className="mx-auto mb-8 mt-5 max-w-[580px] text-[1rem] font-semibold leading-[1.85] text-[#6b8a86] md:mb-10 md:text-[1.06rem]">
          Book a free 30-minute strategy call. We&apos;ll map out exactly what your growth could look like in 90 days — with zero commitment required to proceed. You get the support of our team for everything, from content creation to publishing.
        </p>
        <CalendlyPopupButton className="mx-auto inline-flex items-center gap-2.5 rounded-full bg-[#33bdb0] px-8 py-4 text-[0.9rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_40px_rgba(51,189,176,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_60px_rgba(51,189,176,0.45)] md:px-12 md:py-[18px] md:text-base">
          Book My Free Strategy Call
          <ArrowIcon />
        </CalendlyPopupButton>
        <div className="mt-5 text-[0.92rem] font-bold leading-[1.7] text-[#6b8a86] md:mt-6 md:text-[0.96rem]">
          Calendly opens instantly - pick a time that works for you.
        </div>
      </div>
    </section>
  );
}
