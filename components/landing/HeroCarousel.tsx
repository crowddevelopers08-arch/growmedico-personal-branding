"use client";

const HERO_VIDEO_URL = "https://ik.imagekit.io/ho1vq6jkid/ad%203%20v1.mov";

export function HeroCarousel() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[28px] border border-[rgba(51,189,176,0.22)] shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
        <div className="relative overflow-hidden bg-[#0e1412] pb-[165%] sm:pb-[170%] lg:pb-[142%]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls
            aria-label="Grow Medico hero video"
          />
        </div>
      </div>
    </div>
  );
}
