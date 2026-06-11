import Image from "next/image";

export function MaxVerseLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="MaxVerse"
      width={200}
      height={60}
      className={`h-16 w-auto ${className}`}
      priority
    />
  );
}
