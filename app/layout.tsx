import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grow Medico - Turn Your Expertise Into Influence",
  description:
    "Grow Medico helps doctors turn clinical expertise into a trusted digital presence.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="bg-[#080c0b] font-['Satoshi',sans-serif] text-[#c8ddd9] antialiased">
        {children}
      </body>
    </html>
  );
}

