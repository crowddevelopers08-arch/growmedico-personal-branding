import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendlyModal } from "@/components/landing/CalendlyModal";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { Footer } from "@/components/landing/Footer";
import { Container, OutlineButton } from "@/components/landing/shared";

export const metadata: Metadata = {
  title: "Thank You | Grow Medico",
  description:
    "Thank you for reaching out to Grow Medico. Here is what happens next and how to prepare for your strategy call.",
};

const prepChecklist = [
  "Keep your Instagram, YouTube, or LinkedIn profile links handy.",
  "Be ready to share what kind of patients or audience you want to attract.",
  "Bring any current content challenges so we can give specific direction.",
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080c0b] text-[#c8ddd9]">
      <CalendlyModal />
      <CustomCursor />

      <section className="relative isolate px-5 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-10 md:px-10 lg:px-14 lg:pb-20 lg:pt-12">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(51,189,176,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(51,189,176,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_30%,black_30%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(51,189,176,0.18)_0%,transparent_70%)] blur-2xl sm:h-[460px] sm:w-[460px]" />

        <Container className="relative z-10">
          <div className="mb-8 flex justify-center sm:mb-10">
            <Link href="/" aria-label="Go to Grow Medico homepage">
              <Image
                src="/gmlogo1.png"
                alt="Grow Medico"
                width={180}
                height={56}
                className="h-14 w-auto object-contain sm:h-16"
                priority
              />
            </Link>
          </div>

          <div className="mx-auto grid max-w-[980px] gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-8">
            <div className="rounded-[28px] border border-[rgba(51,189,176,0.16)] bg-[linear-gradient(180deg,rgba(20,28,26,0.94)_0%,rgba(11,17,16,0.96)_100%)] px-5 py-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-7 sm:py-10 md:px-10 md:py-12 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(51,189,176,0.22)] bg-[rgba(51,189,176,0.12)] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#33bdb0] sm:text-[0.72rem]">
                <span className="h-[7px] w-[7px] animate-[pulse-glow_2s_infinite] rounded-full bg-[#33bdb0]" />
                Submission Received Successfully
              </div>

              <h1 className="mt-5 font-[var(--font-fraunces)] text-[clamp(2.2rem,7vw,4.8rem)] font-light leading-[1.05] tracking-[-0.04em] text-[#f0faf9]">
                Thank you for reaching out.
              </h1>

              <p className="mx-auto mt-5 max-w-[640px] text-[0.98rem] font-light leading-[1.85] text-[#89a8a3] sm:text-[1.02rem] lg:mx-0">
                We have received your details. If you have already booked your strategy call, our team will review
                your information before the session. If not, you can reserve a time below and we will help you map
                out the clearest growth path for your brand.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <OutlineButton href="/" className="justify-center px-7 py-4 sm:px-8">
                  Back to Homepage
                </OutlineButton>
              </div>
            </div>

            <div className="rounded-[28px] border border-[rgba(51,189,176,0.16)] bg-[rgba(17,24,23,0.95)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#33bdb0]">
                Before The Call
              </div>
              <h2 className="mt-3 font-[var(--font-fraunces)] text-[1.7rem] leading-[1.12] tracking-[-0.03em] text-[#f0faf9]">
                A few things to keep ready.
              </h2>
              <div className="mt-5 space-y-3">
                {prepChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[20px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(51,189,176,0.14)] text-[#33bdb0]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path
                          d="M2 6.2l2.2 2.2L10 2.6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[0.9rem] leading-[1.7] text-[#89a8a3]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
