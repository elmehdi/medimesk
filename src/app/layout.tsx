import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-MA" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
