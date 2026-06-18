"use client";

import { useEffect, useState } from "react";

interface ProductSectionNavProps {
  label: string;
  items: readonly { id: string; label: string }[];
}

export default function ProductSectionNav({ label, items }: ProductSectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  function jumpTo(id: string) {
    setActiveId(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      aria-label={label}
      className="product-section-nav sticky top-[72px] z-40 border-b border-light-teal bg-white/95 shadow-sm backdrop-blur-sm lg:top-20 xl:fixed xl:top-1/2 xl:w-52 xl:-translate-y-1/2 xl:border-0 xl:bg-transparent xl:shadow-none xl:backdrop-blur-none"
    >
      <div className="mx-auto flex max-w-container items-center gap-4 overflow-x-auto px-gutter py-3 xl:block xl:overflow-visible xl:px-0 xl:py-0">
        <p className="flex-shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-dark-text/40 xl:mb-5 xl:px-0">
          {label}
        </p>
        <span className="h-5 w-px flex-shrink-0 bg-light-teal xl:hidden" aria-hidden="true" />
        <div className="relative flex gap-2 xl:flex-col xl:gap-1 xl:before:absolute xl:before:bottom-4 xl:before:left-[7px] xl:before:top-4 xl:before:w-px xl:before:bg-dark-text/10">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => jumpTo(item.id)}
                aria-current={active ? "location" : undefined}
                className={`group relative flex flex-shrink-0 items-center gap-3 rounded-full px-3.5 py-2 text-left text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-teal/30 xl:w-full xl:rounded-lg xl:bg-transparent xl:px-0 xl:py-2.5 ${
                  active
                    ? "bg-light-teal text-primary-teal xl:bg-transparent"
                    : "bg-section-bg text-dark-text/55 hover:bg-light-teal/60 hover:text-primary-teal xl:bg-transparent"
                }`}
              >
                <span
                  className={`relative z-10 hidden flex-shrink-0 rounded-full border-2 border-white transition-all xl:block ${
                    active ? "h-3.5 w-3.5 bg-primary-teal shadow-[0_0_0_4px_rgba(0,169,157,0.14)]" : "ml-0.5 h-3 w-3 bg-dark-text/20 group-hover:bg-primary-teal/50"
                  }`}
                  aria-hidden="true"
                />
                <span className={`leading-snug transition-transform ${active ? "xl:translate-x-1 xl:font-bold" : ""}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
