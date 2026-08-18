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
      <div className="before-after-wipe-clip absolute inset-0 overflow-hidden bg-section-bg">
        <ImageLayer src={afterSrc} alt={`${alt} - ${afterLabel}`} imageFit={imageFit} />
      </div>
      <div className="before-after-wipe-line absolute inset-y-0 z-10 w-1 bg-white/90 shadow-lg">
        <div className="before-after-wipe-control absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-dark-text shadow-lg backdrop-blur-md">
          <span>{beforeLabel}</span>
          <svg className="h-3.5 w-3.5 text-primary-teal" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 5.5h12M11 2.5l3 3-3 3M14 10.5H2M5 7.5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{afterLabel}</span>
        </div>
      </div>
    </div>
  );
}
