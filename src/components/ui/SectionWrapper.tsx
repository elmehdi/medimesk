interface SectionWrapperProps {
  children: React.ReactNode;
  /** Use alternating background: true = #F7F9FA, false = white */
  alternate?: boolean;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  alternate = false,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`reveal-section scroll-mt-36 py-16 md:py-24 ${alternate ? "bg-section-bg" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-container px-gutter">{children}</div>
    </section>
  );
}
