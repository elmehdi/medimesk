import Image from "next/image";

export type ProductComparisonVariant = "slider" | "wipe" | "crossfade";

interface ProductComparisonMediaProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  variant: ProductComparisonVariant;
  beforeLabel: string;
  afterLabel: string;
  imageFit?: "cover" | "contain";
}

const labelClasses = "rounded-full bg-dark-text/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm";

function ImageLayer({
  src,
  alt,
  imageFit = "cover",
  className = "",
}: {
  src: string;
  alt: string;
  imageFit?: "cover" | "contain";
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`${imageFit === "contain" ? "object-contain p-6" : "object-cover"} ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
    />
  );
}

export default function ProductComparisonMedia({
  beforeSrc,
  afterSrc,
  alt,
  variant,
  beforeLabel,
  afterLabel,
  imageFit,
}: ProductComparisonMediaProps) {
  if (variant === "slider") {
    return (
      <div className="absolute inset-0 bg-section-bg">
        <ImageLayer src={afterSrc} alt={`${alt} - ${afterLabel}`} imageFit={imageFit} />
        <div
          className="before-after-slider-clip absolute inset-0 overflow-hidden"
        >
          <ImageLayer src={beforeSrc} alt={`${alt} - ${beforeLabel}`} imageFit={imageFit} />
        </div>
        <div className="before-after-slider-handle pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(26,35,50,0.12)]">
          <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-primary-teal text-white shadow-lg">
            <span className="text-sm font-bold">↔</span>
          </div>
        </div>
        <span className={`${labelClasses} absolute left-3 top-3 z-30`}>{beforeLabel}</span>
        <span className={`${labelClasses} absolute right-3 top-3 z-30`}>{afterLabel}</span>
      </div>
    );
  }

  if (variant === "wipe") {
    return (
      <div className="absolute inset-0 bg-section-bg">
        <ImageLayer src={beforeSrc} alt={`${alt} - ${beforeLabel}`} imageFit={imageFit} />
        <div className="before-after-wipe-clip absolute inset-0 overflow-hidden">
          <ImageLayer src={afterSrc} alt={`${alt} - ${afterLabel}`} imageFit={imageFit} />
        </div>
        <div className="before-after-wipe-line absolute inset-y-0 z-10 w-1 bg-white/90 shadow-lg" />
        <span className={`${labelClasses} before-after-wipe-before-label absolute left-3 top-3 z-20`}>{beforeLabel}</span>
        <span className={`${labelClasses} before-after-wipe-after-label absolute right-3 top-3 z-20`}>{afterLabel}</span>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-section-bg">
      <ImageLayer src={beforeSrc} alt={`${alt} - ${beforeLabel}`} imageFit={imageFit} className="animate-before-after-before" />
      <ImageLayer src={afterSrc} alt={`${alt} - ${afterLabel}`} imageFit={imageFit} className="animate-before-after-after" />
      <span className={`${labelClasses} absolute left-3 top-3 z-20 animate-before-label`}>{beforeLabel}</span>
      <span className={`${labelClasses} absolute right-3 top-3 z-20 animate-after-label`}>{afterLabel}</span>
    </div>
  );
}
