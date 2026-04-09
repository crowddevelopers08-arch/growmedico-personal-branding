import Link from "next/link";
import type { ImgHTMLAttributes } from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1100px] ${className}`}>{children}</div>;
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[18px] inline-flex items-center gap-2 text-[0.8rem] font-black uppercase tracking-[0.14em] text-[#33bdb0] before:h-px before:w-6 before:bg-[#33bdb0] before:content-['']">
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  body,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="font-[var(--font-fraunces)] text-[clamp(1.9rem,4.5vw,3.4rem)] font-normal leading-[1.12] tracking-[-0.025em] text-[#f0faf9] [&_em]:font-normal [&_em]:italic [&_em]:text-[#33bdb0]">
        {title}
      </h2>
      {body ? (
        <p className="mt-3 max-w-[500px] text-base font-semibold leading-[1.8] text-[#6b8a86]">
          {body}
        </p>
      ) : null}
    </>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`btn-anim inline-flex items-center gap-2.5 rounded-full bg-[#33bdb0] px-9 py-4 text-[0.9rem] font-bold tracking-[0.02em] text-[#080c0b] shadow-[0_0_40px_rgba(51,189,176,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3fd4c5] hover:shadow-[0_0_60px_rgba(51,189,176,0.45)] ${className}`}
    >
      {children}
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn-anim inline-flex items-center gap-2 rounded-full border border-[rgba(51,189,176,0.3)] px-8 py-4 text-[0.9rem] font-bold text-[#33bdb0] transition-all duration-300 hover:border-[#33bdb0] hover:bg-[rgba(51,189,176,0.12)] ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SvgIcon({
  src,
  alt,
  className = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
}) {
  return <img src={src} alt={alt} className={className} {...props} />;
}
