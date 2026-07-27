import Image from "next/image";

export type ProductComparisonVariant = "wipe";

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
  beforeLabel,
  afterLabel,
  imageFit,
}: ProductComparisonMediaProps) {
  return (
    <div className="absolute inset-0 bg-section-bg">
      <ImageLayer src={beforeSrc} alt={`${alt} - ${beforeLabel}`} imageFit={imageFit} />
      <div className="before-after-wipe-clip absolute inset-0 overflow-hidden">
        <ImageLayer src={afterSrc} alt={`${alt} - ${afterLabel}`} imageFit={imageFit} />
      </div>
      <div className="before-after-wipe-line absolute inset-y-0 z-10 w-1 bg-white/90 shadow-lg" />
      <span className={`${labelClasses} before-after-wipe-before-label absolute left-3 top-3 z-20`}>{beforeLabel}</span>
      <span className={`${labelClasses} before-after-wipe-after-label absolute right-3 top-3 z-20 opacity-0`}>{afterLabel}</span>
    </div>
  );
}
