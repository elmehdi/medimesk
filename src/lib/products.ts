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
      beforeSrc: "/images/Dualblist/Après Encart Dual Blist .webp",
      afterSrc: "/images/Dualblist/Avant encart Dual Blist.webp",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/pda-rdc45",
    badge: "PDA Semi-automatisée",
    comparison: {
      beforeSrc: "/images/RDC/Avant encart RDC.jpg",
      afterSrc: "/images/RDC/after RDC.png",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/pda-automatique",
    badge: "PDA Automatisée",
    comparison: {
      beforeSrc: "/images/hopitaux et cliniques produit.webp",
      afterSrc: "/images/Hospital clinic/jvm-machines.png.png",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/pda-accessoires",
    imageFit: "contain",
    badge: "Accessoires PDA",
    comparison: {
      beforeSrc: "/images/Accessoires/Encart accessoires apres.webp",
      afterSrc: "/images/Accessoires/accessoire avant.webp",
      variant: "wipe",
    },
  },
  {
    href: "/solutions/studex-system75",
    badge: "Piercing",
    comparison: {
      beforeSrc: "/images/studex-system75.webp",
      afterSrc: "/images/After studex.png",
      variant: "wipe",
    },
  },
  { imageSrc: "/images/studex-placehollder.jpeg", href: "/solutions/pda-venalink", badge: "PDA Manuelle", imageFit: "contain" },
];
