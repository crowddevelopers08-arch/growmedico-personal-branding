"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const moveCursor = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }

      frame = window.requestAnimationFrame(animateRing);
    };

    const expand = () => {
      cursorRef.current?.classList.replace("h-[10px]", "h-5");
      cursorRef.current?.classList.replace("w-[10px]", "w-5");
      ringRef.current?.classList.replace("h-9", "h-14");
      ringRef.current?.classList.replace("w-9", "w-14");
    };

    const shrink = () => {
      cursorRef.current?.classList.replace("h-5", "h-[10px]");
      cursorRef.current?.classList.replace("w-5", "w-[10px]");
      ringRef.current?.classList.replace("h-14", "h-9");
      ringRef.current?.classList.replace("w-14", "w-9");
    };

    const interactiveNodes = Array.from(document.querySelectorAll("a, button"));

    document.addEventListener("mousemove", moveCursor);
    interactiveNodes.forEach((node) => {
      node.addEventListener("mouseenter", expand);
      node.addEventListener("mouseleave", shrink);
    });

    animateRing();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveNodes.forEach((node) => {
        node.removeEventListener("mouseenter", expand);
        node.removeEventListener("mouseleave", shrink);
      });
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#33bdb0] mix-blend-screen transition-[width,height] duration-200"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(51,189,176,0.4)] transition-[width,height] duration-300"
      />
    </>
  );
}

