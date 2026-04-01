"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { openCalendlyPopup } from "./calendly";

type CalendlyPopupButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function CalendlyPopupButton({
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}: CalendlyPopupButtonProps) {
  return (
    <button
      type={type}
      className={`btn-anim ${className}`}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openCalendlyPopup();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
