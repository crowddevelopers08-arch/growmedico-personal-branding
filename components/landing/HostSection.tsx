import { Reveal } from "./Reveal";
import { Container, SectionTag } from "./shared";

export function HostSection() {
  return (
    <section className="bg-[#0e1412] px-5 py-16 md:px-14 md:py-[110px]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <div className="relative overflow-hidden rounded-[28px] border border-[rgba(51,189,176,0.22)] bg-[#141c1a] px-8 py-12 text-center md:py-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(51,189,176,0.18),transparent_55%)]" />
                <div className="relative z-10 text-6xl md:text-7xl">{"\u{1FA7A}"}</div>
                <div className="relative z-10 mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#33bdb0] md:mt-5">
                  Grow Medico Team
                </div>
              </div>
              <div className="-mt-6 mx-auto grid max-w-[88%] grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[rgba(51,189,176,0.14)] bg-[rgba(255,255,255,0.04)]">
                {[["80+", "Doctors"], ["4.9\u2605", "Rating"], ["1M+", "Views"]].map(([value, label]) => (
                  <div key={label} className="bg-[#1a2422] px-3 py-4 text-center md:px-5">
                    <div className="font-[var(--font-fraunces)] text-[1.3rem] font-semibold text-[#f0faf9] md:text-[1.5rem]">{value}</div>
                    <div className="mt-1 text-[0.68rem] uppercase tracking-[0.08em] text-[#6b8a86] md:text-[0.72rem]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionTag>Who We Are</SectionTag>
            <h3 className="max-w-[640px] font-[var(--font-fraunces)] text-[clamp(1.8rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.025em] text-[#f0faf9]">
              Built by people who understand both medicine and media.
            </h3>
            <div className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#33bdb0]">
              Grow Medico Leadership Team
            </div>
            <div className="mt-5 space-y-4 text-[0.93rem] font-light leading-[1.85] text-[#6b8a86] md:mt-6 md:space-y-5 md:text-[0.95rem]">
              <p>
                Grow Medico was founded at the intersection of two worlds most agencies never understand together: <strong className="font-semibold text-[#f0faf9]">clinical credibility and content strategy.</strong>
              </p>
              <p>
                Our team includes medical professionals who understand the ethical weight of health communication, and digital strategists who've built audiences in some of India's most competitive niches. We don't apply generic social media tactics to doctors and hope for the best.
              </p>
              <p>
                We've worked with dermatologists, orthopaedic surgeons, paediatricians, gynaecologists and cosmetic surgeons across India, the UAE and Australia. Every strategy we teach has been tested on real medical accounts, with real analytics, refined over real months.
              </p>
              <p>
                <strong className="font-semibold text-[#f0faf9]">
                  Not theory. Not a course. A partnership with a team that treats your results as their responsibility.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
