import { problemItems } from "./content";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

export function ProblemSection() {
  return (
    <section className="bg-[#0e1412] px-5 py-16 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>The Hard Truth</SectionTag>
        <SectionHeading title={<>The patients who need you most<br />can't <em>find</em> you.</>} />
        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <ul>
            {problemItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <li className="grid grid-cols-[44px_1fr] gap-4 border-b border-[rgba(255,255,255,0.05)] py-6 transition-all duration-300 hover:pl-1.5 md:grid-cols-[48px_1fr] md:gap-5 md:py-7">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(192,57,43,0.1)] md:h-10 md:w-10">
                    <SvgIcon src={item.iconSrc} alt="" className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-[0.95rem] font-bold text-[#f0faf9] md:text-[0.97rem]">{item.title}</h4>
                    <p className="text-[0.84rem] font-light leading-[1.65] text-[#6b8a86] md:text-[0.86rem]">{item.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="lg:sticky lg:top-[120px] lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(51,189,176,0.22)] bg-[#141c1a] px-6 py-10 md:px-12 md:py-12">
              <div className="pointer-events-none absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(51,189,176,0.15)_0%,transparent_65%)]" />
              <span className="mb-4 block font-[var(--font-fraunces)] text-[4rem] leading-[0.7] text-[#33bdb0]/40 md:mb-5 md:text-[5rem]">&quot;</span>
              <blockquote className="mb-6 font-[var(--font-fraunces)] text-[1.2rem] font-light italic leading-[1.55] text-[#f0faf9] md:mb-7 md:text-[1.4rem] [&_em]:not-italic [&_em]:text-[#33bdb0]">
                Medicine taught you how to <em>heal</em> people.
                <br />
                Nobody taught you how to <em>reach</em> them.
              </blockquote>
              <p className="text-[0.88rem] font-light leading-[1.75] text-[#6b8a86]">
                The most trusted voice in any room should be the doctor's. Online, that's not what's happening - and it's not your fault. The tools, systems and strategies to build a medical brand are completely different from anything you learned in training.
              </p>
              <p className="mt-4 text-[0.88rem] font-light leading-[1.75] text-[#6b8a86]">
                Grow Medico exists to close that gap. Not with generic social media tips, but with a framework built specifically for how healthcare credibility works.
              </p>
              <div className="mt-6 inline-block rounded-full bg-[#33bdb0] px-5 py-2.5 text-[0.78rem] font-extrabold uppercase tracking-[0.06em] text-[#080c0b]">
                90-Day Results - or We Work for Free
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
