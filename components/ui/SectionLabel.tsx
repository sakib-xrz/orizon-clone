export function SectionLabel({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`section-label ${light ? "text-white" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
