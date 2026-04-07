import { ArrowIcon, Container, SectionTag } from "./shared";
import { CalendlyPopupButton } from "./CalendlyPopupButton";
import { Reveal } from "./Reveal";

export function OfferSection() {
  return (
    <section id="offer" className="bg-[#080c0b] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>The Guarantee</SectionTag>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[rgba(51,189,176,0.22)] bg-[#141c1a] px-6 py-12 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(51,189,176,0.15)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(51,189,176,0.06)_0%,transparent_50%)]" />
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#33bdb0] px-5 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-[#080c0b] md:mb-8">
                {"\u26A1 The Grow Medico Promise"}
              </div>
              <div className="font-[var(--font-fraunces)] text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.06] tracking-[-0.03em] text-[#f0faf9]">
                10,000 Real Followers
                <strong className="block font-semibold italic text-[#33bdb0]">
                  or 3 Million Views - in 90 Days.
                </strong>
              </div>
              <p className="mx-auto mb-10 mt-5 max-w-[600px] text-[0.95rem] font-light leading-[1.75] text-[#6b8a86] md:mb-12 md:text-[1.05rem]">
                We don&apos;t just build a personal brand; we work alongside you as an extension of your team. From content creation to publishing, our team handles it all. If you don&apos;t hit the target, we keep working until you do – no extra charge.
              </p>
              <div className="mb-10 flex flex-wrap items-center justify-center gap-3 md:mb-12">
                <div className="rounded-full border border-[rgba(51,189,176,0.22)] bg-[#1a2422] px-6 py-3 text-center md:px-7">
                  <span className="block font-[var(--font-fraunces)] text-[1.8rem] font-semibold leading-none text-[#33bdb0] md:text-[2rem]">10K</span>
                  <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-[#6b8a86]">New Followers</div>
                </div>
                <div className="font-[var(--font-fraunces)] text-xl italic text-[#4a6460]">or</div>
                <div className="rounded-full border border-[rgba(51,189,176,0.22)] bg-[#1a2422] px-6 py-3 text-center md:px-7">
                  <span className="block font-[var(--font-fraunces)] text-[1.8rem] font-semibold leading-none text-[#33bdb0] md:text-[2rem]">3M</span>
                  <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-[#6b8a86]">Total Views</div>
                </div>
                <div className="font-[var(--font-fraunces)] text-xl italic text-[#4a6460]">in</div>
                <div className="rounded-full border border-[rgba(51,189,176,0.22)] bg-[#1a2422] px-6 py-3 text-center md:px-7">
                  <span className="block font-[var(--font-fraunces)] text-[1.8rem] font-semibold leading-none text-[#33bdb0] md:text-[2rem]">90</span>
                  <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-[#6b8a86]">Days Flat</div>
                </div>
              </div>
              <CalendlyPopupButton className="inline-flex items-center gap-2.5 rounded-full bg-[#33bdb0] px-8 py-4 text-[0.9rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_40px_rgba(51,189,176,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_60px_rgba(51,189,176,0.45)] md:px-11 md:py-[18px] md:text-[0.95rem]">
                I&apos;m Ready - Book My Call
                <ArrowIcon />
              </CalendlyPopupButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
