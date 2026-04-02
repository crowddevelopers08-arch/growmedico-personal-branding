"use client";

import { useCallback, useState } from "react";
import { testimonialItems } from "./content-more";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

// Instagram embed measurements — recalculated for pb-[120%] container
const IFRAME_W   = 380;
const TOP_CHROME = 62;
const IFRAME_H   = 840;
const PB_RATIO   = 1.2;

const TOP_OFFSET_PC = (TOP_CHROME / (IFRAME_W * PB_RATIO)) * 100;
const IFRAME_H_PC   = (IFRAME_H   / (IFRAME_W * PB_RATIO)) * 100;

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TestimonialCard({ item }: { item: typeof testimonialItems[number] }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a]">
      {/* Instagram Reel embed */}
      <div className="relative overflow-hidden bg-[#0e1412] pb-[120%]">
        <iframe
          src={item.instagramVideoSrc}
          title={`Instagram Reel by ${item.name}`}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          scrolling="no"
          style={{
            position: "absolute",
            top:     `-${TOP_OFFSET_PC}%`,
            left:    "0",
            width:   "100%",
            height:  `${IFRAME_H_PC + TOP_OFFSET_PC}%`,
            border:  "none",
            display: "block",
          }}
        />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        {/* Author row */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(51,189,176,0.12)]">
            <SvgIcon src={item.avatarSrc} alt="" className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[0.78rem] font-bold leading-tight text-[#f0faf9]">{item.name}</div>
            <div className="truncate text-[0.68rem] leading-tight text-[#6b8a86]">{item.spec}</div>
          </div>
        </div>

        {/* Metric row */}
        <div className="flex items-baseline gap-2">
          <div className="font-[var(--font-fraunces)] text-[1.6rem] font-semibold leading-none tracking-[-0.03em] text-[#33bdb0]">
            {item.metric}
          </div>
          <div className="text-[0.6rem] uppercase tracking-[0.06em] text-[#4a6460]">
            {item.label}
          </div>
        </div>

        {/* Quote */}
        <div className="text-[0.75rem] font-light leading-[1.6] text-[#d7ebe7]">
          &quot;{item.quote}&quot;
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonialItems.length;

  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);

  const visibleCount = Math.min(total, 3);`r`n  const visibleIndices = Array.from({ length: visibleCount }, (_, i) => (active + i) % total);

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

        {/* Carousel */}
        <div className="mt-12 md:mt-14">
          {/* Cards row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Card 0 — always visible */}
            <div className="transition-all duration-500">
              <TestimonialCard item={testimonialItems[visibleIndices[0]]} />
            </div>
            {/* Card 1 — sm+ */}
            <div className="hidden transition-all duration-500 sm:block">
              <TestimonialCard item={testimonialItems[visibleIndices[1]]} />
            </div>
            {/* Card 2 — lg+ */}
            <div className="hidden transition-all duration-500 lg:block">
              <TestimonialCard item={testimonialItems[visibleIndices[2]]} />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(51,189,176,0.25)] bg-[#141c1a] text-[#6b8a86] transition-all duration-200 hover:border-[#33bdb0] hover:bg-[rgba(51,189,176,0.12)] hover:text-[#33bdb0]"
            >
              <ChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "h-2.5 w-6 bg-[#33bdb0]"
                      : "h-2 w-2 bg-[rgba(51,189,176,0.3)] hover:bg-[rgba(51,189,176,0.55)]"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(51,189,176,0.25)] bg-[#141c1a] text-[#6b8a86] transition-all duration-200 hover:border-[#33bdb0] hover:bg-[rgba(51,189,176,0.12)] hover:text-[#33bdb0]"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

