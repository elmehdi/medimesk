import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 — Page introuvable / Page not found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-section-bg px-6 py-20 text-center">
      <Link href="/fr" aria-label="MediMesk">
        <Image
          src="/images/logo.webp"
          alt="MediMesk"
          width={160}
          height={48}
          className="mb-12 h-auto w-36"
          priority
        />
      </Link>

      <p className="font-playfair text-[5.5rem] leading-none text-primary-teal sm:text-[7rem]">
        404
      </p>

      <div className="mt-6 max-w-md space-y-2">
        <h1 className="text-h3 text-dark-text">Page introuvable</h1>
        <p className="text-body text-dark-text/70">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
      </div>

      <div className="my-6 h-px w-16 bg-light-teal" />

      <div className="max-w-md space-y-2">
        <h2 className="text-h3 text-dark-text">Page not found</h2>
        <p className="text-body text-dark-text/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Button href="/fr" variant="primary">
          Accueil — FR
        </Button>
        <Button href="/en" variant="secondary">
          Home — EN
        </Button>
      </div>
    </div>
  );
}
