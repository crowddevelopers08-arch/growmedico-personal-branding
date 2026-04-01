import Script from "next/script";

export function CalendlyPopupScript() {
  return <Script id="calendly-widget-script" src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />;
}
