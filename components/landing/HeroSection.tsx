import Image from "next/image";
import { CountUpStat } from "./CountUpStat";
import { CalendlyPopupButton } from "./CalendlyPopupButton";
import { Container, OutlineButton } from "./shared";
import { HeroCarousel } from "./HeroCarousel";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProofItem({ value, suffix, label, decimalPlaces = 0 }: {
  value: number; suffix?: string; label: string; decimalPlaces?: number;
}) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="font-[var(--font-fraunces)] text-[1.5rem] font-semibold leading-none tracking-[-0.03em] text-[#f0faf9] xl:text-[1.8rem]">
        <CountUpStat value={value} suffix={suffix} decimalPlaces={decimalPlaces} />
      </div>
      <div className="mt-1 text-center text-[0.63rem] uppercase tracking-[0.06em] text-[#4a6460] lg:text-left">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-12 md:px-10 md:pt-14 lg:flex lg:min-h-svh lg:items-center max-[470px]:pt-6 lg:px-14 lg:py-0">

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(51,189,176,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(51,189,176,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />
      <div className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(51,189,176,0.1)_0%,transparent_65%)] lg:h-[600px] lg:w-[600px]" />
      <div className="pointer-events-none absolute -bottom-[15%] -left-[8%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(51,189,176,0.06)_0%,transparent_65%)] lg:h-[420px] lg:w-[420px]" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:gap-10 xl:gap-12">

          {/* ── Left: copy ── */}
          <div className="flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

            {/* Logo */}
            <div className="mb-5 animate-[rise-in_0.9s_ease_both] sm:mb-6">
              <Image
                src="/gmlogo1.png"
                alt="Grow Medico"
                width={180}
                height={56}
                className="h-16 w-auto object-contain sm:h-20"
                priority
              />
            </div>

            {/* Badge */}
            <div className="mb-4 animate-[rise-in_0.9s_0.05s_ease_both] sm:mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.12)] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#33bdb0]">
                <span className="h-[6px] w-[6px] animate-[pulse-glow_2s_infinite] rounded-full bg-[#33bdb0]" />
                Applications Open — May 2026 Cohort
              </div>
            </div>

            {/* Heading */}
            <h1 className="animate-[rise-in_0.9s_0.1s_ease_both] font-[var(--font-fraunces)] text-[clamp(2rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.03em] text-[#f0faf9]">
              Your patients
              <br />
              are already
              <br />
              <span className="italic text-[#33bdb0]">searching for you.</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-5 mt-4 max-w-[500px] animate-[rise-in_0.9s_0.2s_ease_both] text-[0.9rem] font-light leading-[1.8] text-[#6b8a86] sm:mb-6 sm:mt-5 md:text-[0.95rem]">
              Most doctors spend a decade mastering medicine – then remain completely invisible online. Grow Medico gives you a done-with-you system, where our team handles everything from content creation to publishing, ensuring you earn trust, attract patients, and build real influence.
            </p>

            {/* ── Carousel: visible on mobile/tablet only ── */}
            <div className="mb-5 flex w-full max-w-[480px] justify-center animate-[rise-in_0.9s_0.25s_ease_both] lg:hidden">
              <HeroCarousel />
            </div>

            {/* CTAs */}
            <div className="flex animate-[rise-in_0.9s_0.3s_ease_both] flex-wrap items-center justify-center gap-3 lg:justify-start">
              <CalendlyPopupButton className="inline-flex items-center gap-2.5 rounded-full bg-[#33bdb0] px-7 py-3.5 text-[0.88rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_36px_rgba(51,189,176,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_56px_rgba(51,189,176,0.45)]">
                Get My Free Strategy Call
                <ArrowIcon />
              </CalendlyPopupButton>
              <OutlineButton href="#offer">See the 90-Day Guarantee ↓</OutlineButton>
            </div>

            {/* Stats */}
            <div className="mt-6 grid animate-[rise-in_0.9s_0.4s_ease_both] grid-cols-4 gap-3 border-t border-[rgba(255,255,255,0.05)] pt-6 sm:mt-7 sm:gap-5 sm:pt-7">
              <ProofItem value={3}  suffix="M+" label="Views Generated" />
              <ProofItem value={10} suffix="K+" label="Followers Added" />
              <ProofItem value={80} suffix="+"  label="Doctors Coached" />
              <ProofItem value={90}              label="Days. That's All." />
            </div>
          </div>

          {/* ── Right: Instagram Reel carousel (desktop only) ── */}
          <div className="hidden w-full items-center justify-end lg:flex lg:order-2">
            <HeroCarousel />
          </div>

        </div>
      </Container>
    </section>
  );
}
