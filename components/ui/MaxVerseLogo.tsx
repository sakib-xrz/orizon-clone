import Image from "next/image";
import Logo from "@/public/logo.png";

export function MaxVerseLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={Logo}
      alt="MaxVerse"
      className={`h-8 w-auto drop-shadow-brand-glow ${className}`}
      quality={100}
      priority
    />
  );
}
