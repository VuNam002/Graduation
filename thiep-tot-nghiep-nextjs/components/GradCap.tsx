"use client";

import { useEffect, useState } from "react";

/**
 * Floating graduation-cap decoration next to "Graduation Ceremony".
 * Renders /public/mu.png once confirmed loadable (same probe pattern
 * as PhotoFrame, to dodge the SSR-hydration image-error race); falls
 * back to a drawn cap icon so the hero never looks broken while
 * public/mu.png hasn't been added yet.
 */
export default function GradCap({ className = "" }: { className?: string }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setOk(true);
    };
    probe.onerror = () => {
      if (!cancelled) setOk(false);
    };
    probe.src = "/mu.png";
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`animate-drift ${className}`}>
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/mu.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
        />
      ) : (
        <svg viewBox="0 0 40 40" className="h-full w-full drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]">
          <path fill="var(--gold)" d="M20 6 2 15l18 8 18-8-18-9Z" />
          <path
            fill="none"
            stroke="var(--gold-deep)"
            strokeWidth="1.4"
            d="M10 18.5v7c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5v-7"
          />
          <path fill="none" stroke="var(--gold-deep)" strokeWidth="1.4" d="M34 15v9" />
          <circle cx="34" cy="26" r="1.6" fill="var(--gold-deep)" />
        </svg>
      )}
    </div>
  );
}
