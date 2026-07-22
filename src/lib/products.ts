export interface ProductCardMeta {
  imageSrc?: string;
  href: string;
  imageFit?: "cover" | "contain";
  badge?: string;
  comparison?: {
    beforeSrc: string;
    afterSrc: string;
    variant: "slider" | "wipe" | "crossfade";
  };
}

/** Shared card image + route metadata for the 5 products (homepage + products page). */
export const productCardMeta: ProductCardMeta[] = [
  {
    href: "/solutions/pda-dual-blist",
    badge: "PDA Semi-automatisée",
    comparison: {
      beforeSrc: "/images/Dualblist/Avant encart Dual Blist.png",
      afterSrc: "/images/Dualblist/Après Encart Dual Blist .jpg",
      variant: "slider",
    },
  },
  {
    href: "/solutions/pda-rdc45",
    badge: "PDA Semi-automatisée",
    comparison: {
      beforeSrc: "/images/RDC/Avant encart RDC.jpg",
      afterSrc: "/images/RDC/Apres RDC.jpg",
      variant: "wipe",
    },
  },
  { imageSrc: "/images/hopitaux et cliniques produit.png", href: "/solutions/pda-automatique", badge: "PDA Automatisée" },
  {
    href: "/solutions/pda-accessoires",
    imageFit: "contain",
    badge: "PDA Semi-auto & Auto",
    comparison: {
      beforeSrc: "/images/Accessoires/accessoire avant.png",
      afterSrc: "/images/Accessoires/Encart accessoires apres.png",
      variant: "crossfade",
    },
  },
  { imageSrc: "/images/studex-system75.webp", href: "/solutions/studex-system75", badge: "Piercing" },
];
