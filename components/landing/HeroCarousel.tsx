"use client";

import { useCallback, useState } from "react";

// ─── Instagram Reel embed measurements ───────────────────────────────────────
// IFRAME_W     = 380px → native card width (desktop)
// TOP_CHROME   = 56px  → profile bar clipped from top via negative offset
// VIDEO_HEIGHT = 580px → visible video strip height (desktop)
// IFRAME_H     = 840px → full embed height; bottom chrome falls outside clip
//
// Responsive: the card is fluid (flex-1). We use padding-bottom aspect-ratio
// trick so height tracks width. iframe dimensions expressed as percentages of
// the clipping container so everything scales proportionally.
// ─────────────────────────────────────────────────────────────────────────────
const IFRAME_W     = 380;
const TOP_CHROME   = 56;
const VIDEO_HEIGHT = 580;
const IFRAME_H     = 840;

// Derived ratios (used for percentage-based responsive scaling)
const ASPECT_PAD  = (VIDEO_HEIGHT / IFRAME_W) * 100;          // 152.63% — height as % of width
const TOP_OFFSET  = (TOP_CHROME   / VIDEO_HEIGHT) * 100;      //   9.66% — top clip as % of container height
const IFRAME_H_PC = (IFRAME_H     / VIDEO_HEIGHT) * 100;      // 144.83% — iframe height as % of container height

const INSTAGRAM_REEL_URL  = "https://www.instagram.com/reel/DWY5fChDicY/";
const INSTAGRAM_EMBED_URL = `${INSTAGRAM_REEL_URL}embed/`;

const REELS = [
  { url: INSTAGRAM_REEL_URL, title: "Dr. Priya Nair — 1.2M Views in 90 Days",        label: "Dermatologist · Chennai"          },
  { url: INSTAGRAM_REEL_URL, title: "Dr. Arjun Mehta — 14.5K Followers in 78 Days",   label: "Orthopaedic Surgeon · Mumbai"     },
  { url: INSTAGRAM_REEL_URL, title: "Dr. Sunitha Rajan — 3× OPD Growth",              label: "Gynaecologist · Coimbatore"       },
  { url: INSTAGRAM_REEL_URL, title: "Dr. Karthik Balaji — ₹8L Online Revenue",        label: "Paediatrician · Bengaluru"        },
];

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

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((i) => (i - 1 + REELS.length) % REELS.length), []);
  const next = useCallback(() => setActive((i) => (i + 1) % REELS.length), []);
  const goTo = useCallback((i: number) => setActive(i), []);

  return (
    // Outer wrapper: takes full width of its container (480px column on desktop, fluid on mobile)
    <div className="w-full">

      {/* ── Row: [prev] [card] [next] ── */}
      <div className="flex items-center gap-3">

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous reel"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(51,189,176,0.25)] bg-[#141c1a] text-[#6b8a86] shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-[#33bdb0] hover:bg-[rgba(51,189,176,0.12)] hover:text-[#33bdb0]"
        >
          <ChevronLeft />
        </button>

        {/* Phone-frame card — fluid, maintains aspect ratio via padding-bottom trick */}
        <div className="min-w-0 flex-1 overflow-hidden rounded-[28px] border border-[rgba(51,189,176,0.22)] shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
          {/* Clipping window: pb sets height as % of width; larger on mobile */}
          <div
            className="relative overflow-hidden bg-[#0e1412] pb-[180%] sm:pb-[185%] lg:pb-[153%]"
          >
            {/* top as % is relative to container height; we negate TOP_OFFSET% */}
            <iframe
              key={active}
              src={INSTAGRAM_EMBED_URL}
              title={REELS[active].title}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              scrolling="no"
              style={{
                position: "absolute",
                top:      `-${TOP_OFFSET}%`,
                left:     "0",
                width:    "100%",
                height:   `${IFRAME_H_PC + TOP_OFFSET}%`,
                border:   "none",
                display:  "block",
              }}
            />
          </div>

        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next reel"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(51,189,176,0.25)] bg-[#141c1a] text-[#6b8a86] shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-[#33bdb0] hover:bg-[rgba(51,189,176,0.12)] hover:text-[#33bdb0]"
        >
          <ChevronRight />
        </button>

      </div>
    </div>
  );
}
