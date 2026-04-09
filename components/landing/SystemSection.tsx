import { systemItems } from "./content";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

export function SystemSection() {
  return (
    <section id="system" className="bg-[#0e1412] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>The System</SectionTag>
        <SectionHeading
          title={
            <>
              Six pillars. One goal:
              <br />
              make your <em>expertise visible.</em>
            </>
          }
          body="Built around your schedule. Executed alongside our team. Zero learning curve."
        />
        <div className="mt-12 max-[470px]:mt-6 grid gap-px overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.04)] sm:grid-cols-2 md:mt-16 xl:grid-cols-3">
          {systemItems.map((item, index) => (
            <Reveal key={item.number} delay={(index % 3) * 120}>
              <div className="group relative overflow-hidden bg-[#141c1a] px-7 py-8 transition-colors duration-300 hover:bg-[#1a2422] md:px-9 md:py-10">
                <div className="absolute right-5 top-4 font-[var(--font-fraunces)] text-[4rem] font-semibold leading-none text-[#33bdb0]/[0.06] transition-opacity duration-300 group-hover:opacity-15 md:text-[4.5rem]">
                  {item.number}
                </div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.12)] md:mb-5 md:h-11 md:w-11">
                  <SvgIcon src={item.iconSrc} alt="" className="h-6 w-6" aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-[0.95rem] font-bold text-[#f0faf9] md:mb-2.5 md:text-base">{item.title}</h4>
                <p className="text-[0.96rem] font-semibold leading-[1.7] text-[#6b8a86] md:text-[0.98rem]">{item.body}</p>
                <div className="mt-4 inline-block rounded-full bg-[rgba(51,189,176,0.12)] px-3 py-1 text-[0.9rem] font-extrabold uppercase tracking-[0.06em] text-[#33bdb0]">
                  {item.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
