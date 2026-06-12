export interface ProductCardMeta {
  imageSrc: string;
  href: string;
}

/** Shared card image + route metadata for the 6 products (homepage + products page). */
export const productCardMeta: ProductCardMeta[] = [
  { imageSrc: "/images/pda-sachet.webp", href: "/solutions/pda-manuelle" },
  { imageSrc: "/images/pda-robot.webp", href: "/solutions/pda-dual-blist" },
  { imageSrc: "/images/pda-sachet.webp", href: "/solutions/pda-rdc45" },
  { imageSrc: "/images/pda-robot.webp", href: "/solutions/pda-automatique" },
  { imageSrc: "/images/equipment-medical.jpg", href: "/solutions/pda-accessoires" },
  { imageSrc: "/images/studex-system75.webp", href: "/solutions/studex-system75" },
];
