"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface LocationMapProps {
  lat: number;
  lng: number;
  label: string;
  className?: string;
}

export default function LocationMap({ lat, lng, label, className = "" }: LocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const pin = L.divIcon({
        className: "",
        html: `<svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 26 16 26s16-15 16-26c0-8.837-7.163-16-16-16Z" fill="#007F78"/>
          <circle cx="16" cy="16" r="6.5" fill="white"/>
        </svg>`,
        iconSize: [32, 42],
        iconAnchor: [16, 42],
      });

      map = L.map(containerRef.current, {
        center: [lat, lng],
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19,
      }).addTo(map);

      L.marker([lat, lng], { icon: pin }).addTo(map).bindTooltip(label, { permanent: false });
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [lat, lng, label]);

  return <div ref={containerRef} className={className} role="img" aria-label={label} />;
}
