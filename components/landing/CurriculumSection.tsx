import { curriculumItems } from "./content";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag } from "./shared";

export function CurriculumSection() {
  return (
    <section className="bg-[#080c0b] px-5 py-16 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>What You'll Learn</SectionTag>
        <SectionHeading
          title={
            <>
              8 things top medical creators
              <br />
              <em>know</em> that nobody teaches.
            </>
          }
          body="We've systematised years of trial and error into eight actionable frameworks - specific to medicine, not generic advice."
        />
        <div className="mt-12 md:mt-14">
          {curriculumItems.map((item, index) => (
            <Reveal key={item.number} delay={(index % 2) * 100}>
              <div className="grid grid-cols-[44px_1fr] items-start gap-4 border-b border-[rgba(255,255,255,0.05)] py-6 transition-all duration-300 hover:translate-x-1 md:grid-cols-[56px_1fr_auto] md:gap-6 md:py-7">
                <div className="font-[var(--font-fraunces)] text-[1.8rem] font-semibold leading-none tracking-[-0.03em] text-[#33bdb0] md:text-[2rem]">
                  {item.number}
                </div>
                <div>
                  <h4 className="mb-2 text-[0.97rem] font-bold text-[#f0faf9] md:text-[1.02rem]">{item.title}</h4>
                  <p className="text-[0.88rem] font-light leading-[1.75] text-[#6b8a86] md:text-[0.92rem]">{item.body}</p>
                  <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.08)] px-3 py-1 text-[0.72rem] font-medium text-[#9cb7b3] md:text-[0.74rem]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden pt-1 text-xl text-[#4a6460] md:block">→</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
