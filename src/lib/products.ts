export interface ProductCardMeta {
  imageSrc: string;
  href: string;
  imageFit?: "cover" | "contain";
  badge?: string;
}

/** Shared card image + route metadata for the 5 products (homepage + products page). */
export const productCardMeta: ProductCardMeta[] = [
  { imageSrc: "/images/DB1.png", href: "/solutions/pda-dual-blist", badge: "PDA Semi-automatisée" },
  { imageSrc: "/images/pda-sachet.webp", href: "/solutions/pda-rdc45", badge: "PDA Semi-automatisée" },
  { imageSrc: "/images/timedi.png", href: "/solutions/pda-automatique", imageFit: "contain", badge: "PDA Automatisée" },
  { imageSrc: "/images/Vizen.png", href: "/solutions/pda-accessoires", imageFit: "contain", badge: "PDA Semi-auto & Auto" },
  { imageSrc: "/images/studex-system75.webp", href: "/solutions/studex-system75", badge: "Piercing" },
];

