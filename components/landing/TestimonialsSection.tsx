"use client";

import { testimonialItems } from "./content-more";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

const FEATURED_TESTIMONIAL = testimonialItems[0];

function TestimonialCard({ item }: { item: typeof testimonialItems[number] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a] shadow-[0_24px_64px_rgba(0,0,0,0.28)]">
      <div className="relative overflow-hidden bg-[#0e1412] pb-[112%]">
        <iframe
          src={item.instagramVideoSrc}
          title={`Instagram video by ${item.name}`}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          scrolling="no"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(51,189,176,0.12)]">
            <SvgIcon src={item.avatarSrc} alt="" className="h-7 w-7" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold leading-tight text-[#f0faf9]">{item.name}</div>
            <div className="truncate text-[0.78rem] leading-tight text-[#6b8a86]">{item.spec}</div>
          </div>
        </div>

        <div className="flex items-baseline gap-3">
          <div className="font-[var(--font-fraunces)] text-[1.9rem] font-semibold leading-none tracking-[-0.03em] text-[#33bdb0]">
            {item.metric}
          </div>
          <div className="text-[0.68rem] uppercase tracking-[0.08em] text-[#4a6460]">{item.label}</div>
        </div>

        <div className="text-sm font-light leading-[1.8] text-[#d7ebe7]">&quot;{item.quote}&quot;</div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="results" className="bg-[#0e1412] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,480px)] lg:gap-14 xl:gap-20">
          <div className="max-w-[540px]">
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
          </div>

          <div className="w-full lg:justify-self-end">
            <TestimonialCard item={FEATURED_TESTIMONIAL} />
          </div>
        </div>
      </Container>
    </section>
  );
}
