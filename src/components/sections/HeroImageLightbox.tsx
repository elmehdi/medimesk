"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImageLightbox({ alt }: { alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="group relative block w-full cursor-zoom-in rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-primary-teal sm:w-auto"
        onClick={() => setIsOpen(true)}
        aria-label="Open hero image"
      >
        <Image
          src="/images/heromedi.png"
          alt={alt}
          width={720}
          height={600}
          className="relative h-auto w-full rounded-2xl sm:w-[460px] sm:transition-transform sm:duration-300 sm:group-hover:scale-[1.02] lg:w-[560px]"
          priority
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-text/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Hero image preview"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-dark-text shadow-lg transition-colors hover:bg-light-teal focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close image preview"
          >
            &times;
          </button>
          <div className="relative max-h-[90vh] w-full max-w-[1080px]" onClick={(event) => event.stopPropagation()}>
            <Image
              src="/images/heromedi.png"
              alt={alt}
              width={1200}
              height={1000}
              className="h-auto max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
