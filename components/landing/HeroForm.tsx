"use client";

import { useState } from "react";
import { openCalendlyPopup } from "./calendly";

function UserIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 14c0-2.761 2.686-5 6-5s6 2.239 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="m1.5 4.5 6.5 4.5 6.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.2 2H3a1 1 0 0 0-1 1c0 6.075 4.925 11 11 11a1 1 0 0 0 1-1v-2.2a1 1 0 0 0-.724-.962l-2.3-.657a1 1 0 0 0-1.02.27l-.757.848A9.038 9.038 0 0 1 5.7 6.8l.848-.757a1 1 0 0 0 .27-1.02L6.16 2.724A1 1 0 0 0 5.2 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M14 8 2 2l3 6-3 6 12-6Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 1 2 2.5v3.5C2 8.5 3.8 10.5 6 11c2.2-.5 4-2.5 4-5V2.5L6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4.5 6 1 1 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const INPUT_CLASS =
  "w-full rounded-lg border border-[rgba(255,255,255,0.07)] bg-[#1a2422] py-2.5 pl-9 pr-3 text-[0.88rem] text-[#f0faf9] placeholder-[#4a6460] outline-none transition-all duration-200 focus:border-[rgba(51,189,176,0.5)] focus:ring-2 focus:ring-[rgba(51,189,176,0.10)]";

const LABEL_CLASS =
  "mb-1 block text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#6b8a86]";

export function HeroForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  return (
    <div className="w-full animate-[rise-in_0.9s_0.25s_ease_both]">
      <div className="relative overflow-hidden rounded-2xl border border-[rgba(51,189,176,0.22)] bg-[#141c1a] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:p-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(51,189,176,0.16)_0%,transparent_65%)]" />

        <div className="relative z-10 mb-4">
          <div className="mb-0.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#33bdb0]">
            Free Strategy Call
          </div>
          <h3 className="font-[var(--font-fraunces)] text-[1.2rem] font-light leading-[1.25] text-[#f0faf9] sm:text-[1.3rem]">
            Book your free{" "}
            <em className="italic text-[#33bdb0]">30-min call</em>
          </h3>
          <p className="mt-1 text-[0.78rem] font-light leading-[1.55] text-[#6b8a86]">
            We&apos;ll map your 90-day growth plan - zero commitment.
          </p>
        </div>

        <form className="relative z-10 flex flex-col gap-3">
          <div className="group">
            <label htmlFor="hero-name" className={LABEL_CLASS}>Full Name</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#4a6460] transition-colors duration-200 group-focus-within:text-[#33bdb0]">
                <UserIcon />
              </span>
              <input
                id="hero-name"
                type="text"
                placeholder="Dr. Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div className="group">
            <label htmlFor="hero-email" className={LABEL_CLASS}>Email Address</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#4a6460] transition-colors duration-200 group-focus-within:text-[#33bdb0]">
                <MailIcon />
              </span>
              <input
                id="hero-email"
                type="email"
                placeholder="you@hospital.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div className="group">
            <label htmlFor="hero-phone" className={LABEL_CLASS}>Phone Number</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#4a6460] transition-colors duration-200 group-focus-within:text-[#33bdb0]">
                <PhoneIcon />
              </span>
              <input
                id="hero-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={openCalendlyPopup}
            className="mt-0.5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#33bdb0] py-3 text-[0.88rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_32px_rgba(51,189,176,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_50px_rgba(51,189,176,0.4)]"
          >
            Book My Free Strategy Call
            <SendIcon />
          </button>

          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 pt-0.5">
            <div className="flex items-center gap-1 text-[0.67rem] font-light text-[#4a6460]">
              <ShieldIcon />
              Private &amp; never shared
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[0.67rem] text-[#4a6460]">4.9 Rating</span>
              <span className="text-[0.67rem] text-[#4a6460]">Reply in 24 hrs</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
