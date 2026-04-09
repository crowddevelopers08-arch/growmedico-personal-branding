"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CALENDLY_URL } from "./config";
import { OPEN_CALENDLY_EVENT } from "./calendly";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: { url: string; parentElement: HTMLElement; resize?: boolean }) => void;
    };
  }
}

export function CalendlyModal() {
  const [open, setOpen] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_CALENDLY_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CALENDLY_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !scriptReady || !widgetRef.current || !window.Calendly?.initInlineWidget) {
      return;
    }

    widgetRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: widgetRef.current,
      resize: true,
    });
  }, [open, scriptReady]);

  return (
    <>
      <Script
        id="calendly-widget-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      {open ? (
        <div
          className="fixed inset-0 z-[1200] flex items-end justify-center bg-[rgba(3,8,7,0.78)] px-0 pt-6 backdrop-blur-sm md:items-center md:px-4 md:py-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex h-[92dvh] w-full flex-col overflow-hidden rounded-t-[28px] border border-[rgba(51,189,176,0.22)] bg-[#0c1211] shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:h-[min(88dvh,860px)] md:max-w-[1100px] md:rounded-[28px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[rgba(255,255,255,0.06)] px-4 py-4 sm:px-5 md:px-6">
              <div className="min-w-0">
                <div className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#33bdb0] sm:text-[0.84rem]">
                  Free Strategy Call
                </div>
                <div className="mt-1 text-[1rem] font-semibold leading-[1.5] text-[#c8ddd9] sm:text-[1rem] md:text-[1.05rem]">
                  Pick a time that works for you.
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Calendly popup"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#c8ddd9] transition-colors hover:border-[rgba(51,189,176,0.25)] hover:text-[#33bdb0]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain bg-white">
              <div
                ref={widgetRef}
                className="calendly-inline-widget h-[760px] w-full md:h-full"
                data-url={CALENDLY_URL}
                style={{ minWidth: "320px" }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
