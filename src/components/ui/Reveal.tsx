export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}
