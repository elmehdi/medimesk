export interface ProductCardMeta {
  imageSrc: string;
  href: string;
  imageFit?: "cover" | "contain";
}

/** Shared card image + route metadata for the 5 products (homepage + products page). */
export const productCardMeta: ProductCardMeta[] = [
  { imageSrc: "/images/DB1.png", href: "/solutions/pda-dual-blist" },
  { imageSrc: "/images/pda-sachet.webp", href: "/solutions/pda-rdc45" },
  { imageSrc: "/images/timedi.png", href: "/solutions/pda-automatique", imageFit: "contain" },
  { imageSrc: "/images/Vizen.png", href: "/solutions/pda-accessoires", imageFit: "contain" },
  { imageSrc: "/images/studex-system75.webp", href: "/solutions/studex-system75" },
];
