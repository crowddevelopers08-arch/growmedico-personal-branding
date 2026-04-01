import { inclusionItems } from "./content";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

export function InclusionsSection() {
  return (
    <section className="bg-[#080c0b] px-5 py-16 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>Everything Included</SectionTag>
        <SectionHeading
          title={
            <>
              Everything you need.
              <br />
              <em>Nothing</em> you don't.
            </>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 xl:grid-cols-3">
          {inclusionItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 120}>
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(51,189,176,0.15)] bg-[#141c1a] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(51,189,176,0.3)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.25)] md:px-7 md:py-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(51,189,176,0.12)_0%,transparent_68%)]" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(51,189,176,0.1)] md:mb-5">
                  <SvgIcon src={item.iconSrc} alt="" className="h-8 w-8" aria-hidden="true" />
                </div>
                <h4 className="mb-4 text-[0.97rem] font-bold leading-[1.45] text-[#f0faf9] md:mb-5 md:text-[1.02rem]">{item.title}</h4>
                <ul className="space-y-2.5 text-[0.88rem] font-light leading-[1.75] text-[#6b8a86] md:space-y-3 md:text-[0.9rem]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#33bdb0]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
