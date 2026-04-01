import { testimonialItems } from "./content-more";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

export function TestimonialsSection() {
  return (
    <section id="results" className="bg-[#0e1412] px-5 py-16 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>Real Results</SectionTag>
        <SectionHeading
          title={
            <>
              Real doctors.
              <br />
              <em>Real numbers.</em>
            </>
          }
          body="Verified results from medical professionals who completed the 90-day programme."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6">
          {testimonialItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <div className="rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(51,189,176,0.26)] md:px-7 md:py-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(51,189,176,0.12)] md:h-14 md:w-14">
                    <SvgIcon src={item.avatarSrc} alt="" className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[0.95rem] font-bold text-[#f0faf9] md:text-[0.98rem]">{item.name}</div>
                    <div className="text-[0.78rem] text-[#6b8a86] md:text-[0.82rem]">{item.spec}</div>
                  </div>
                </div>
                <div className="mt-6 font-[var(--font-fraunces)] text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-[#33bdb0] md:mt-8 md:text-[3rem]">{item.metric}</div>
                <div className="mt-1 text-[0.75rem] uppercase tracking-[0.08em] text-[#4a6460] md:text-[0.78rem]">{item.label}</div>
                <div className="mt-5 text-[0.9rem] font-light leading-[1.8] text-[#d7ebe7] md:mt-6 md:text-[0.94rem]">&quot;{item.quote}&quot;</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
