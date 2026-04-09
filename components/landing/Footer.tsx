import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 border-t border-[rgba(255,255,255,0.05)] px-5 py-10 text-center text-[0.92rem] font-semibold text-[#6b8a86] md:px-14">
      <Link href="/" className="mb-1">
        <Image
          src="/gmlogo1.png"
          alt="Grow Medico"
          width={180}
          height={58}
          className="h-12 w-auto object-contain opacity-80"
        />
      </Link>
      <div>© 2026 Grow Medico. All rights reserved.</div>
      <div>Results vary. Testimonials represent verified client outcomes.</div>
    </footer>
  );
}
