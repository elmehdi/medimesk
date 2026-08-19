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

      <div id="notfound-fr" data-lang-block="fr" className="hidden">
        <div className="mt-6 max-w-md space-y-2">
          <h1 className="text-h3 text-dark-text">Page introuvable</h1>
          <p className="text-body text-dark-text/70">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>
        <div className="mt-12">
          <Button href="/fr" variant="primary">
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>

      <div id="notfound-en" data-lang-block="en" className="hidden">
        <div className="mt-6 max-w-md space-y-2">
          <h1 className="text-h3 text-dark-text">Page not found</h1>
          <p className="text-body text-dark-text/70">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="mt-12">
          <Button href="/en" variant="primary">
            Back to homepage
          </Button>
        </div>
      </div>

      <noscript>
        <div className="mt-6 max-w-md space-y-2">
          <h1 className="text-h3 text-dark-text">Page introuvable</h1>
          <p className="text-body text-dark-text/70">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>
        <div className="mt-12">
          <a
            href="/fr"
            className="inline-flex items-center justify-center rounded-lg bg-cta-yellow px-6 py-3 font-semibold text-dark-text"
          >
            Retour à l&apos;accueil
          </a>
        </div>
      </noscript>

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var l=((navigator.language||"fr").toLowerCase().indexOf("en")===0)?"en":"fr";var el=document.getElementById("notfound-"+l);if(el)el.classList.remove("hidden");})();`,
        }}
      />
    </div>
  );
}
