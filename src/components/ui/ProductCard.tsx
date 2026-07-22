import Image from "next/image";
import Link from "next/link";
import ProductComparisonMedia, { type ProductComparisonVariant } from "./ProductComparisonMedia";

interface ProductCardProps {
  /** Product image src path */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Card headline */
  title: string;
  /** Three key benefits */
  benefits: [string, string, string];
  /** Link to full product page */
  href: string;
  /** Link label */
  linkLabel: string;
  beforeLabel: string;
  afterLabel: string;
  imageFit?: "cover" | "contain";
  /** Optional category band displayed on top-left of image */
  badge?: string;
  comparison?: {
    beforeSrc: string;
    afterSrc: string;
    variant: ProductComparisonVariant;
  };
}

export default function ProductCard({
  imageSrc,
  imageAlt,
  title,
  benefits,
  href,
  linkLabel,
  beforeLabel,
  afterLabel,
  imageFit = "cover",
  badge,
  comparison,
}: ProductCardProps) {
  return (
    <Link href={href} className="group flex flex-col overflow-hidden rounded-2xl border border-light-teal bg-white transition-all hover:-translate-y-1 hover:border-primary-teal/35 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-teal/40 focus:ring-offset-2">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-section-bg">
        {comparison ? (
          <ProductComparisonMedia
            beforeSrc={comparison.beforeSrc}
            afterSrc={comparison.afterSrc}
            alt={imageAlt}
            variant={comparison.variant}
            beforeLabel={beforeLabel}
            afterLabel={afterLabel}
            imageFit={imageFit}
          />
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`${imageFit === "contain" ? "object-contain p-8" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : null}
        {/* Category badge band */}
        {badge && (
          <div className="absolute left-0 top-4 z-10">
            <span className="inline-block bg-primary-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md rounded-r-full">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-dark-text">{title}</h3>

        <ul className="mt-4 flex-1 space-y-2">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-dark-text/70">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal group-hover:underline underline-offset-4">
          {linkLabel}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
