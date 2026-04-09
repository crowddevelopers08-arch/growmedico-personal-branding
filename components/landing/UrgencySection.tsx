import { startTodayList, urgencyCards, waitList } from "./content-more";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

export function UrgencySection() {
  return (
    <section className="bg-[#0e1412] px-5 pb-16 pt-6 md:px-14 md:pb-[110px] max-[470px]:pb-6 md:pt-16">
      <Container>
        <SectionTag>Limited Availability</SectionTag>
        <SectionHeading
          title={
            <>
              Limited to 5 doctors.
              <br />
              <em>By design.</em>
            </>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 max-[470px]:mt-6 md:gap-6 lg:grid-cols-3">
          {urgencyCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(51,189,176,0.26)] md:px-7 md:py-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(51,189,176,0.12)] md:mb-5 md:h-12 md:w-12">
                  <SvgIcon src={item.iconSrc} alt="" className="h-7 w-7" aria-hidden="true" />
                </div>
                <h4 className="mb-2.5 text-[0.97rem] font-bold text-[#f0faf9] md:text-[1.02rem]">{item.title}</h4>
                <p className="text-[0.98rem] font-semibold leading-[1.75] text-[#6b8a86] md:text-[1rem]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-[rgba(201,76,76,0.2)] bg-[rgba(53,19,19,0.55)] p-6 md:p-7">
              <div className="mb-4 font-[var(--font-fraunces)] text-[1.5rem] font-normal text-[#f0faf9] md:mb-5 md:text-[1.7rem]">If you wait another 90 days...</div>
              <ul className="space-y-3 text-[1rem] font-semibold leading-[1.8] text-[#d8c8c8] md:text-[1.04rem]">
                {waitList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f87171]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-[rgba(51,189,176,0.2)] bg-[rgba(13,43,39,0.55)] p-6 md:p-7">
              <div className="mb-4 font-[var(--font-fraunces)] text-[1.5rem] font-normal text-[#f0faf9] md:mb-5 md:text-[1.7rem]">When you start today...</div>
              <ul className="space-y-3 text-[1rem] font-semibold leading-[1.8] text-[#d7ebe7] md:text-[1.04rem]">
                {startTodayList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#33bdb0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
