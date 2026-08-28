import Link from "next/link";

export function MobileBackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-3 text-xs font-bold text-white">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" />
      </svg>
      {label}
    </Link>
  );
}

export function MobileEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${light ? "text-[#7fe1d8]" : "text-[#007f78]"}`}>
      {children}
    </p>
  );
}

export function MobileSectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      {eyebrow && <MobileEyebrow>{eyebrow}</MobileEyebrow>}
      <h2 className="mt-2 font-sans text-[1.7rem] font-bold leading-[1.12] tracking-[-0.035em] text-[#15242d]">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-6 text-[#64747a]">{subtitle}</p>}
    </div>
  );
}

export function MobileArrow() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function MobileStickyActions({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="mobile-sticky-bar fixed inset-x-0 bottom-0 z-30 border-t border-[#dce9e7] bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-8px_30px_rgba(18,53,49,0.08)] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1fr_auto] gap-2">
        <Link href={primaryHref} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#007f78] px-4 text-sm font-bold text-white">
          {primaryLabel}
          <MobileArrow />
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link href={secondaryHref} className="flex min-h-12 items-center justify-center rounded-xl border border-[#cfe2df] px-4 text-xs font-bold text-[#007f78]">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
