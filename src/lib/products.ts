export interface ProductCardMeta {
  imageSrc?: string;
  href: string;
  imageFit?: "cover" | "contain";
  badge?: string;
  comparison?: {
    beforeSrc: string;
    afterSrc: string;
    variant: "wipe";
  };
}

/** Shared card image + route metadata for the 5 products (homepage + products page). */
export const productCardMeta: ProductCardMeta[] = [
  {
    href: "/solutions/pda-dual-blist",
    badge: "PDA Semi-automatisée",
    comparison: {
      beforeSrc: "/images/Dualblist/Avant encart Dual Blist.webp",
      afterSrc: "/images/Dualblist/Après Encart Dual Blist .webp",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/pda-rdc45",
    badge: "PDA Semi-automatisée",
    comparison: {
      beforeSrc: "/images/RDC/Avant encart RDC.webp",
      afterSrc: "/images/RDC/Apres RDC.webp",
      variant: "wipe",
    },
  },
  { imageSrc: "/images/hopitaux et cliniques produit.webp", href: "/solutions/pda-automatique", badge: "PDA Automatisée" },
  {
    href: "/solutions/pda-accessoires",
    imageFit: "contain",
    badge: "PDA Semi-auto & Auto",
    comparison: {
      beforeSrc: "/images/Accessoires/accessoire avant.webp",
      afterSrc: "/images/Accessoires/Encart accessoires apres.webp",
      variant: "wipe",
    },
  },
  { imageSrc: "/images/studex-system75.webp", href: "/solutions/studex-system75", badge: "Piercing" },
];
