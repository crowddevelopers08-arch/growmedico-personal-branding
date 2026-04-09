"use client";

import { useState } from "react";
import { testimonialItems } from "./content-more";
import { Container, SectionHeading, SectionTag, SvgIcon } from "./shared";

const FEATURED_TESTIMONIAL = testimonialItems[0];

// Updated carousel videos with new Instagram Reel URLs
const LEFT_COLUMN_VIDEOS = [
  {
    ...testimonialItems[0],
    instagramVideoSrc: "https://www.instagram.com/reel/DWY5fChDicY/embed",
  },
  {
    ...testimonialItems[1],
    instagramVideoSrc: "https://www.instagram.com/reel/DV8gUWNDpDl/embed",
  },
];

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
            <div className="truncate text-[0.9rem] font-bold leading-tight text-[#6b8a86]">{item.spec}</div>
          </div>
        </div>

        <div className="flex items-baseline gap-3">
          <div className="font-[var(--font-fraunces)] text-[1.9rem] font-semibold leading-none tracking-[-0.03em] text-[#33bdb0]">
            {item.metric}
          </div>
          <div className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#4a6460]">{item.label}</div>
        </div>

        <div className="text-sm font-semibold leading-[1.8] text-[#d7ebe7]">&quot;{item.quote}&quot;</div>
      </div>
    </div>
  );
}

function InlineInstagramVideo({ item }: { item: typeof testimonialItems[number] }) {
  return (
    <div className="w-full overflow-hidden rounded-[1.6rem] border border-[rgba(51,189,176,0.16)] bg-[#141c1a] shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
      <div className="relative overflow-hidden bg-[#0e1412] pb-[118%]">
        <iframe
          src={item.instagramVideoSrc}
          title={`Instagram video by ${item.name}`}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          scrolling="no"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const activeVideo = LEFT_COLUMN_VIDEOS[activeVideoIndex];

  const showPreviousVideo = () => {
    setActiveVideoIndex((currentIndex) => (currentIndex - 1 + LEFT_COLUMN_VIDEOS.length) % LEFT_COLUMN_VIDEOS.length);
  };

  const showNextVideo = () => {
    setActiveVideoIndex((currentIndex) => (currentIndex + 1) % LEFT_COLUMN_VIDEOS.length);
  };

  return (
    <section id="results" className="bg-[#0e1412] px-5 py-16 max-[470px]:py-6 md:px-14 md:py-[110px]">
      <Container>
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:items-start lg:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,480px)] lg:gap-14 xl:gap-20">
          <div className="max-w-[1220px]">
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

            <div className="mt-8 max-w-[390px]">
              <InlineInstagramVideo key={activeVideo.instagramVideoSrc} item={activeVideo} />

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {LEFT_COLUMN_VIDEOS.map((item, index) => (
                    <button
                      key={item.instagramVideoSrc}
                      type="button"
                      onClick={() => setActiveVideoIndex(index)}
                      aria-label={`Show testimonial video ${index + 1}`}
                      aria-pressed={activeVideoIndex === index}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeVideoIndex === index ? "w-8 bg-[#33bdb0]" : "w-2.5 bg-[rgba(107,138,134,0.45)]"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPreviousVideo}
                    aria-label="Show previous testimonial video"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(51,189,176,0.2)] bg-[rgba(20,28,26,0.9)] text-[#d7ebe7] transition-colors duration-300 hover:border-[rgba(51,189,176,0.45)] hover:text-[#33bdb0]"
                  >
                    <span aria-hidden="true">&lt;</span>
                  </button>
                  <button
                    type="button"
                    onClick={showNextVideo}
                    aria-label="Show next testimonial video"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(51,189,176,0.2)] bg-[rgba(20,28,26,0.9)] text-[#d7ebe7] transition-colors duration-300 hover:border-[rgba(51,189,176,0.45)] hover:text-[#33bdb0]"
                  >
                    <span aria-hidden="true">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:justify-self-end">
            <TestimonialCard item={FEATURED_TESTIMONIAL} />
          </div>
        </div>

        {/* Mobile Layout: Heading first, then right side video, then carousel videos */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Heading Section */}
          <div>
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

          {/* Right Side Video (Featured Testimonial) */}
          <div>
            <TestimonialCard item={FEATURED_TESTIMONIAL} />
          </div>

          {/* Carousel Videos */}
          <div>
            <InlineInstagramVideo key={activeVideo.instagramVideoSrc} item={activeVideo} />

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {LEFT_COLUMN_VIDEOS.map((item, index) => (
                  <button
                    key={item.instagramVideoSrc}
                    type="button"
                    onClick={() => setActiveVideoIndex(index)}
                    aria-label={`Show testimonial video ${index + 1}`}
                    aria-pressed={activeVideoIndex === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeVideoIndex === index ? "w-8 bg-[#33bdb0]" : "w-2.5 bg-[rgba(107,138,134,0.45)]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousVideo}
                  aria-label="Show previous testimonial video"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(51,189,176,0.2)] bg-[rgba(20,28,26,0.9)] text-[#d7ebe7] transition-colors duration-300 hover:border-[rgba(51,189,176,0.45)] hover:text-[#33bdb0]"
                >
                  <span aria-hidden="true">&lt;</span>
                </button>
                <button
                  type="button"
                  onClick={showNextVideo}
                  aria-label="Show next testimonial video"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(51,189,176,0.2)] bg-[rgba(20,28,26,0.9)] text-[#d7ebe7] transition-colors duration-300 hover:border-[rgba(51,189,176,0.45)] hover:text-[#33bdb0]"
                >
                  <span aria-hidden="true">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
