"use client";

import Image from "next/image";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { WheelEvent as ReactWheelEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

interface PdfCatalogueViewerProps {
  pageImageBase: string;
  title: string;
  totalPages: number;
  initialPage?: number;
  previousLabel: string;
  nextLabel: string;
  fullscreenLabel: string;
  exitFullscreenLabel: string;
  pageLabel: string;
  simple?: boolean;
}

export default function PdfCatalogueViewer({
  pageImageBase,
  title,
  totalPages,
  initialPage = 1,
  previousLabel,
  nextLabel,
  fullscreenLabel,
  exitFullscreenLabel,
  pageLabel,
  simple = false,
}: PdfCatalogueViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    startX: number;
    startY: number;
    scrollLeft: number;
    scrollTop: number;
  } | null>(null);
  const lastWheelAt = useRef(0);
  const [page, setPage] = useState(initialPage);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [hasChangedPage, setHasChangedPage] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fakeFullscreen, setFakeFullscreen] = useState(false);
  const active = isFullscreen || fakeFullscreen;
  const [zoom, setZoom] = useState(1);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });

  const pageAspectRatio = 1190 / 842;
  const framePadding = 32;
  const basePageWidth = frameSize.width && frameSize.height
    ? Math.max(280, Math.min(frameSize.width - framePadding, (frameSize.height - framePadding) * pageAspectRatio))
    : 0;
  const pageWidth = basePageWidth * zoom;
  const pageHeight = pageWidth / pageAspectRatio;

  const goToPage = useCallback((nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) return;

    setDirection(nextPage > page ? "next" : "previous");
    setHasChangedPage(true);
    setPage(nextPage);
  }, [page, totalPages]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goToPage(page - 1);
      if (event.key === "ArrowRight") goToPage(page + 1);
      if (event.key === "Escape") {
        if (document.fullscreenElement) void document.exitFullscreen();
        setFakeFullscreen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goToPage, page]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const updateFrameSize = () => {
      setFrameSize({ width: frame.clientWidth, height: frame.clientHeight });
    };

    updateFrameSize();
    const observer = new ResizeObserver(updateFrameSize);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || zoom <= 1) return;

    requestAnimationFrame(() => {
      frame.scrollLeft = (frame.scrollWidth - frame.clientWidth) / 2;
      frame.scrollTop = (frame.scrollHeight - frame.clientHeight) / 2;
    });
  }, [page, zoom]);

  useEffect(() => {
    if (!fakeFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [fakeFullscreen]);

  const toggleFullscreen = async () => {
    if (!viewerRef.current) return;

    if (fakeFullscreen) {
      setFakeFullscreen(false);
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    try {
      await viewerRef.current.requestFullscreen();
    } catch {
      setFakeFullscreen(true);
    }
  };

  const changeZoom = (step: number) => {
    setZoom((currentZoom) => Math.min(2.5, Math.max(0.75, Number((currentZoom + step).toFixed(2)))));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;

    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: frame.scrollLeft,
      scrollTop: frame.scrollTop,
    };
    frame.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame || !dragState.current || zoom <= 1) return;

    frame.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.startX);
    frame.scrollTop = dragState.current.scrollTop - (event.clientY - dragState.current.startY);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame || !dragState.current) return;

    const delta = event.clientX - dragState.current.startX;
    dragState.current = null;
    frame.releasePointerCapture(event.pointerId);

    if (zoom > 1) return;

    if (Math.abs(delta) < 45) {
      if (simple) void toggleFullscreen();
      return;
    }

    goToPage(delta < 0 ? page + 1 : page - 1);
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (!active || zoom > 1 || Math.abs(event.deltaY) < 20) return;

    event.preventDefault();
    const now = Date.now();
    if (now - lastWheelAt.current < 520) return;

    lastWheelAt.current = now;
    goToPage(event.deltaY > 0 ? page + 1 : page - 1);
  };

  return (
    <div
      ref={viewerRef}
      className={`studex-pdf-viewer overflow-hidden border border-light-teal bg-white shadow-lg ${
        fakeFullscreen ? "fixed inset-0 z-50 flex flex-col rounded-none border-0" : "rounded-2xl"
      }`}
    >
      {!simple && (
        <div className="flex flex-col gap-3 border-b border-light-teal bg-section-bg px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label={previousLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-light-teal bg-white text-dark-text transition hover:border-primary-teal/40 hover:text-primary-teal disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="min-w-[6.5rem] text-center text-sm font-semibold text-dark-text">
              {pageLabel} {page} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label={nextLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-light-teal bg-white text-dark-text transition hover:border-primary-teal/40 hover:text-primary-teal disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => changeZoom(-0.25)}
                disabled={zoom <= 0.75}
                aria-label="Zoom out"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-light-teal bg-white text-dark-text transition hover:border-primary-teal/40 hover:text-primary-teal disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="min-w-[4rem] text-center text-sm font-semibold text-dark-text">{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                onClick={() => changeZoom(0.25)}
                disabled={zoom >= 2.5}
                aria-label="Zoom in"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-light-teal bg-white text-dark-text transition hover:border-primary-teal/40 hover:text-primary-teal disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
                </svg>
              </button>
            </div>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-teal px-4 py-2 text-sm font-semibold text-white transition hover:brightness-90"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={active ? "M9 9H5V5m10 4h4V5M9 15H5v4m10-4h4v4" : "M4 9V4h5m11 5V4h-5M4 15v5h5m11-5v5h-5"} />
              </svg>
              {active ? exitFullscreenLabel : fullscreenLabel}
            </button>
          </div>
        </div>
      )}
      <div
        ref={frameRef}
        className={`studex-pdf-frame-shell relative touch-pan-y bg-neutral-100 ${
          fakeFullscreen ? "flex-1" : "h-[420px] sm:h-[560px] md:h-[700px]"
        } ${zoom > 1 ? "overflow-auto" : "overflow-hidden"}`}
        onPointerDown={handlePointerDown}
        onPointerCancel={() => {
          dragState.current = null;
        }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
      >
        {simple && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              void toggleFullscreen();
            }}
            aria-label={active ? exitFullscreenLabel : fullscreenLabel}
            className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/85 text-dark-text shadow-md backdrop-blur transition hover:bg-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={active ? "M9 9H5V5m10 4h4V5M9 15H5v4m10-4h4v4" : "M4 9V4h5m11 5V4h-5M4 15v5h5m11-5v5h-5"} />
            </svg>
          </button>
        )}
        <div
          key={page}
          className={`studex-pdf-page grid min-h-full min-w-full place-items-center p-3 sm:p-5 ${zoom > 1 ? "studex-pdf-page-pannable" : ""} ${hasChangedPage ? `studex-pdf-page-${direction}` : ""}`}
        >
          <div
            className="relative shrink-0"
            style={{
              width: pageWidth ? `${pageWidth}px` : "100%",
              height: pageHeight ? `${pageHeight}px` : "auto",
              maxWidth: pageWidth ? undefined : "100%",
              aspectRatio: "1190 / 842",
            }}
          >
            <Image
              src={`${pageImageBase}/page-${page}.webp`}
              alt={`${title} - ${pageLabel} ${page}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={page === initialPage}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
