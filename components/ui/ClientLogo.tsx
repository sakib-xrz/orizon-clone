/**
 * Text-based stand-ins for client logos. Real client logos (Government of
 * Canada, Western Digital, talent.com, Instantly, ZARA, etc.) are trademarks
 * and are NOT bundled. Replace with licensed assets if needed.
 */
export type ClientLogoItem = {
  name: string;
  className?: string;
};

export function ClientLogo({ name, className = "" }: ClientLogoItem) {
  return (
    <span
      className={`select-none whitespace-nowrap text-xl font-bold tracking-tight text-ink/70 ${className}`}
    >
      {name}
    </span>
  );
}

export const CLIENT_LOGOS: ClientLogoItem[] = [
  { name: "Government of Canada" },
  { name: "Western Digital" },
  { name: "talent.com" },
  { name: "Instantly" },
  { name: "ZARA" },
  { name: "TELUS" },
  { name: "Venmo" },
];
