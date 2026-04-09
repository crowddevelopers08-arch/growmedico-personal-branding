"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { Container, SectionHeading, SectionTag } from "./shared";

const caseStudies = [
  {
    client: "Client 1",
    name: "Dr. Priyanka Reddy",
    role: "Dermatologist",
    metrics: [
      "1.3 Million Followers (Verified): Instagram",
      "723K Subscribers | 705 Videos: YouTube",
      "DNA Skin Clinics: Founder",
    ],
    details: [
      "Skincare education, ingredient breakdowns, treatment demos: Content Style",
      "Became one of India's most recognized: Result dermatologist online",
    ],
  },
  {
    client: "Client 2",
    name: "Dr. Rohit Sane",
    role: "Family Doctor",
    metrics: [
      "Instagram: 186K Followers",
      "YouTube: Active presence with health & nutrition content",
      "Founder: Madhavbaug | 1 Million+ Heart Patients Treated",
    ],
    details: [
      "Content Style: Diet tips, heart health, holistic wellness",
      "Result: Built massive trust-based following through consistent video content",
    ],
  },
  {
    client: "Client 3",
    name: "Dr. Saravanan N",
    role: "Holistic Healthcare",
    metrics: [
      "34.6K Followers: Instagram",
      "18+ years in holistic healthcare: Experience",
      "Priyam Clinic: Founder",
      "50,000+ lives transformed",
    ],
    details: [
      "Thyroid, nutrition, lifestyle medicine: Content Style",
      "Consistent content turned a local: Result practice into a regional brand",
    ],
  },
  {
    client: "Client 4",
    name: "Dr. Ramesh Varier R",
    role: "Holistic Healthcare",
    metrics: [
      "Instagram: 18.1K Followers",
      "YouTube: 11.3K Subscribers | Shorts getting 100K-747K views",
      "Experience: 35+ years in holistic healthcare",
      "50,000+ lives transformed",
    ],
    details: [
      "Content Style: Diet tips, natural remedies, wellness education",
      "Result: YouTube Shorts strategy drove massive organic reach",
    ],
  },
];

function ArrowButton({
  direction,
  onClick,
  disabled,
  className = "",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Show previous case studies" : "Show next case studies"}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(51,189,176,0.2)] bg-[rgba(20,28,26,0.92)] text-[#d7ebe7] transition-all duration-300 hover:border-[rgba(51,189,176,0.45)] hover:text-[#33bdb0] disabled:cursor-not-allowed disabled:opacity-35 ${className}`}
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {direction === "prev" ? "<" : ">"}
      </span>
    </button>
  );
}

function CaseStudyCard({ item, accent }: { item: (typeof caseStudies)[number]; accent: string }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-[rgba(51,189,176,0.14)] bg-[#141c1a] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.24)] md:flex md:h-full md:flex-col md:p-6">
      <div className={`pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full ${accent}`} />
      <div className="relative z-10 md:flex md:h-full md:flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-[rgba(255,255,255,0.06)] pb-4">
          <div>
            <div className="inline-flex rounded-full border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.12)] px-3 py-1 text-[0.82rem] font-black uppercase tracking-[0.08em] text-[#33bdb0]">
              {item.client}
            </div>
            <h3 className="mt-3 font-[var(--font-fraunces)] text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#f0faf9] md:text-[1.6rem]">
              {item.name}
            </h3>
            <p className="mt-2 text-[0.95rem] font-bold uppercase tracking-[0.05em] text-[#8eaea9] md:text-[0.98rem]">
              {item.role}
            </p>
          </div>
          <div className="shrink-0 rounded-2xl border border-[rgba(51,189,176,0.18)] bg-[rgba(51,189,176,0.08)] px-3 py-2 text-right">
            <div className="text-[0.8rem] font-black uppercase tracking-[0.08em] text-[#33bdb0]">Review</div>
            <div className="mt-1 font-[var(--font-fraunces)] text-[1.1rem] font-semibold text-[#f0faf9]">Proof</div>
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {item.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#1a2422] px-4 py-2.5 text-[0.96rem] font-bold leading-[1.55] text-[#d7ebe7]"
            >
              {metric}
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2.5">
          {item.details.map((detail) => (
            <div key={detail} className="flex gap-3 text-[0.98rem] font-semibold leading-[1.65] text-[#8eaea9]">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#33bdb0]" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const syncVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
    };

    syncVisibleCards();
    window.addEventListener("resize", syncVisibleCards);
    return () => window.removeEventListener("resize", syncVisibleCards);
  }, []);

  const slides = Array.from(
    { length: Math.ceil(caseStudies.length / visibleCards) },
    (_, index) => caseStudies.slice(index * visibleCards, index * visibleCards + visibleCards),
  );
  const maxIndex = Math.max(0, slides.length - 1);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => Math.min(maxIndex, current + 1));
  };

  return (
    <section className="bg-[#080c0b] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        <SectionTag>Case Studies: Real Results, Real Doctors</SectionTag>
        <SectionHeading
          title={
            <>
              We Don't Just Promise Results.
              <br />
              <em>We Deliver Them.</em>
            </>
          }
        />
        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[720px] text-[1rem] font-semibold leading-[1.8] text-[#8eaea9] md:text-[1.04rem]">
            Review-style client proof cards showing how strong content systems turn doctors into visible, trusted brands.
          </p>
          <div className="hidden items-center gap-3 md:flex">
            <ArrowButton direction="prev" onClick={showPrevious} disabled={activeIndex === 0} />
            <ArrowButton direction="next" onClick={showNext} disabled={activeIndex === maxIndex} />
          </div>
        </div>

        <div className="relative mt-12 md:mt-14">
          <ArrowButton
            direction="prev"
            onClick={showPrevious}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 z-20 -translate-x-3 -translate-y-1/2 md:hidden"
          />
          <ArrowButton
            direction="next"
            onClick={showNext}
            disabled={activeIndex === maxIndex}
            className="absolute right-0 top-1/2 z-20 translate-x-3 -translate-y-1/2 md:hidden"
          />

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-0 shrink-0 basis-full">
                  <div className={`grid items-stretch gap-6 ${visibleCards === 2 ? "lg:grid-cols-2" : "grid-cols-1"}`}>
                    {slide.map((item, itemIndex) => {
                      const accentIndex = slideIndex + itemIndex;

                      return (
                        <Reveal key={item.name} delay={accentIndex * 80} className="h-full">
                          <CaseStudyCard
                            item={item}
                            accent={
                              accentIndex % 4 === 0
                                ? "bg-[radial-gradient(circle,rgba(51,189,176,0.14)_0%,transparent_68%)]"
                                : accentIndex % 4 === 1
                                  ? "bg-[radial-gradient(circle,rgba(240,250,249,0.08)_0%,transparent_68%)]"
                                  : accentIndex % 4 === 2
                                    ? "bg-[radial-gradient(circle,rgba(51,189,176,0.1)_0%,transparent_68%)]"
                                    : "bg-[radial-gradient(circle,rgba(107,138,134,0.12)_0%,transparent_68%)]"
                            }
                          />
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show case study slide ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-[#33bdb0]" : "w-2.5 bg-[rgba(107,138,134,0.45)]"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
