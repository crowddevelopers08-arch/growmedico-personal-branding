"use client";

const OPEN_CALENDLY_EVENT = "growmedico:open-calendly";

export function openCalendlyPopup() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(OPEN_CALENDLY_EVENT));
}

export { OPEN_CALENDLY_EVENT };
