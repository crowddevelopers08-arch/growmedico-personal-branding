"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { openCalendlyPopup } from "./calendly";

const NAV_LINKS = [
  { href: "#offer", label: "The Offer" },
  { href: "#system", label: "System" },
  { href: "#workflow", label: "How It Works" },
  { href: "#results", label: "Results" },
];

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.5 6h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-[500] border-b border-[rgba(51,189,176,0.08)] bg-[rgba(8,12,11,0.9)] backdrop-blur-[22px]">
      <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between gap-6 px-5 md:h-[68px] md:px-10 lg:px-14">
        <Link href="/" className="shrink-0">
          <Image src="/gmlogo1.png" alt="Grow Medico" width={160} height={52} className="h-11 w-auto object-contain" priority />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="rounded-lg px-3.5 py-2 text-[0.92rem] font-bold tracking-[0.03em] text-[#6b8a86] transition-all duration-200 hover:bg-[rgba(51,189,176,0.07)] hover:text-[#33bdb0]">
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={openCalendlyPopup}
          className="btn-anim hidden shrink-0 items-center gap-2 rounded-full bg-[#33bdb0] px-5 py-2.5 text-[0.92rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_24px_rgba(51,189,176,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_40px_rgba(51,189,176,0.42)] md:inline-flex"
        >
          <CalendarIcon />
          Book Free Call
        </button>

        <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] text-[#c8ddd9] transition-colors hover:border-[rgba(51,189,176,0.25)] hover:text-[#33bdb0] md:hidden">
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-[rgba(51,189,176,0.08)] bg-[rgba(8,12,11,0.98)] transition-all duration-300 ease-in-out md:hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 px-4 pb-5 pt-3">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center rounded-xl px-4 py-3 text-[0.92rem] font-bold text-[#6b8a86] transition-colors hover:bg-[rgba(51,189,176,0.07)] hover:text-[#33bdb0]">
              {label}
            </Link>
          ))}

          <div className="mt-3 border-t border-[rgba(255,255,255,0.05)] pt-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openCalendlyPopup();
              }}
              className="btn-anim inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#33bdb0] px-6 py-3.5 text-[0.9rem] font-bold text-[#080c0b] transition-all hover:bg-[#3fd4c5]"
            >
              <CalendarIcon />
              Book My Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
