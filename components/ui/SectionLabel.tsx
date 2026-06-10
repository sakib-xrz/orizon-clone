export function SectionLabel({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  const color = light ? "text-white" : "text-ink";

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${color} before:inline-block before:h-3 before:w-[3px] before:rounded-full before:bg-primary-blue before:content-[''] ${className}`}
    >
      {children}
    </span>
  );
}
