import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Hanken_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CursorDot } from "@/components/ui/CursorDot";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const display = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MaxVerse — UX Design Agency, Branding & Web Design",
  description:
    "MaxVerse is a leading UX design agency based in Canada. We help startups & Fortune 500 companies delight humans on the other side of the screen.",
  metadataBase: new URL("https://maxverse.local"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${display.variable} ${caveat.variable} [text-rendering:optimizeLegibility]`}
    >
      <body className="overflow-x-hidden bg-navy font-sans text-body text-muted antialiased">
        <SmoothScrollProvider>
          <CursorDot />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
