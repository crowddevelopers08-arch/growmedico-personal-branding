import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag } from "./shared";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Content Planning",
    body: "We plan every piece of content based on your niche and goals. Our team takes the time to understand your audience, ensuring that the content is both relevant and engaging.",
  },
  {
    number: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 14.5V16h1.5l8.3-8.3-1.5-1.5L4 14.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.7 5.3a1 1 0 0 1 1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Content Creation",
    body: "From scripts to visuals, we handle everything. Our experts write, design, and create content that showcases your expertise in the most engaging way possible.",
  },
  {
    number: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8.5l4-2.5v7l-4-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Shooting & Production",
    body: "Our team takes care of the entire shooting and production process. Whether it's video reels or other media, we shoot and polish the content for you.",
  },
  {
    number: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M17 8.5C17 13 10 18 10 18S3 13 3 8.5a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Publishing & Management",
    body: "Once the content is ready, we publish it across the right channels, ensuring that it reaches your audience. We manage everything from start to finish, so you don't have to worry about a thing.",
  },
  {
    number: "05",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14l4-5 3 3 4-6 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Performance Review & Adjustment",
    body: "We track the performance of every post. Weekly, we review the data, make necessary adjustments, and keep you on track for the growth we promised.",
  },
  {
    number: "06",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Results & Growth",
    body: "At the end of 90 days, you'll see significant results: either 10,000 followers or 1 million views — or we keep working for free until we hit the target.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-[#080c0b] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>How It Works</SectionTag>
        <SectionHeading
          title={
            <>
              Here&apos;s exactly what happens
              <br />
              <em>after you start with Grow Medico.</em>
            </>
          }
          body="A fully managed process with our team alongside you at every step."
        />

        {/* Connector line visible on lg+ */}
        <div className="relative mt-12 max-[470px]:mt-6 md:mt-16">
          {/* Desktop: horizontal connector behind step numbers */}
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(51,189,176,0.18)_20%,rgba(51,189,176,0.18)_80%,transparent)] lg:block" />

          {/* Steps grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div className="group relative flex flex-col">
                  {/* Number + icon row */}
                  <div className="mb-4 flex items-center gap-3">
                    {/* Number bubble */}
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(51,189,176,0.3)] bg-[#0e1412] font-[var(--font-fraunces)] text-[0.9rem] font-semibold text-[#33bdb0] transition-colors duration-300 group-hover:border-[#33bdb0] group-hover:bg-[rgba(51,189,176,0.1)]">
                      {step.number}
                    </div>
                    {/* Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(51,189,176,0.15)] bg-[rgba(51,189,176,0.08)] text-[#33bdb0] transition-colors duration-300 group-hover:border-[rgba(51,189,176,0.35)] group-hover:bg-[rgba(51,189,176,0.14)]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <h4 className="mb-2 text-[0.97rem] font-bold leading-[1.3] text-[#f0faf9] md:text-[1.02rem]">
                    {step.title}
                  </h4>
                  <p className="text-[0.96rem] font-semibold leading-[1.75] text-[#6b8a86]">
                    {step.body}
                  </p>

                  {/* Arrow connector - between cards on desktop */}
                  {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                    <div className="absolute -right-4 top-[22px] z-20 hidden text-[#33bdb0]/30 lg:block">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
