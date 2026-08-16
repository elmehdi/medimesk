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
      beforeSrc: "/images/RDC/Après encart rdc.png",
      afterSrc: "/images/RDC/RDC 45-07.png",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/pda-automatique",
    badge: "PDA Automatisée",
    comparison: {
      beforeSrc: "/images/Hospital clinic/jvm-machines.png.png",
      afterSrc: "/images/hopitaux et cliniques produit.webp",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/pda-accessoires",
    imageFit: "contain",
    badge: "Accessoires PDA",
    comparison: {
      beforeSrc: "/images/Accessoires/accessoire avant.webp",
      afterSrc: "/images/Accessoires/Encart accessoires apres.webp",
      variant: "wipe",
    },
  },
  { imageSrc: "/images/studex-system75.webp", href: "/solutions/studex-system75", badge: "Piercing" },
  { imageSrc: "/images/studex-placehollder.jpeg", href: "/solutions/pda-venalink", badge: "PDA Manuelle", imageFit: "contain" },
];
