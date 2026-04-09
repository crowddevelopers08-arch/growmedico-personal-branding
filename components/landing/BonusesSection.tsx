import { bonusItems } from "./content-more";
import { CalendlyPopupButton } from "./CalendlyPopupButton";
import { Reveal } from "./Reveal";
import { ArrowIcon, Container, SectionHeading, SectionTag } from "./shared";

export function BonusesSection() {
  return (
    <section className="bg-[#080c0b] px-5 py-16 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>Free Bonuses</SectionTag>
        <SectionHeading
          title={
            <>
              â‚¹5,00,000 worth of resources.
              <br />
              <em>Included</em> at no extra cost.
            </>
          }
        />
        <div className="mt-12 grid gap-8 md:mt-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          <Reveal>
            <div>
              <div className="font-[var(--font-fraunces)] text-[clamp(3rem,9vw,6rem)] font-semibold leading-none tracking-[-0.04em] text-[#33bdb0]">â‚¹5L</div>
              <p className="mt-3 max-w-[420px] text-[1rem] font-semibold leading-[1.8] text-[#6b8a86] md:text-[1.05rem]">
                Every bonus below is included free when you join the Grow Medico 90-Day Programme.
              </p>
              <div className="mt-6 md:mt-7">
                <CalendlyPopupButton className="inline-flex items-center gap-2.5 rounded-full bg-[#33bdb0] px-9 py-4 text-[0.9rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_40px_rgba(51,189,176,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_60px_rgba(51,189,176,0.45)]">
                  Claim Your Spot
                  <ArrowIcon />
                </CalendlyPopupButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-2.5 rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a] p-5 md:gap-3 md:p-7">
              {bonusItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[#1a2422] px-4 py-3 text-[0.98rem] font-bold text-[#d7ebe7] md:text-[1rem]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(51,189,176,0.12)] text-[#33bdb0]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
