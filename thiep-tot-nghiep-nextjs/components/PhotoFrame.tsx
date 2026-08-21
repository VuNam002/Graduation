"use client";

import { useEffect, useState } from "react";

/**
 * Renders /public{src}, once confirmed loadable.
 *
 * The real <img> is never mounted until a plain `new Image()` probe
 * (run client-side only, after hydration) confirms the file exists —
 * an <img> present in the server-rendered HTML can fail before React
 * hydrates and attaches its onError listener, so that approach misses
 * the error. Until then (or if it 404s) a soft placeholder shows —
 * drop a real photo at public{src} and it swaps in automatically.
 */
export default function PhotoFrame({
  src,
  alt,
  className = "",
  placeholderLabel = "Thêm ảnh của bạn",
}: {
  src: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
}) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setOk(false);
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setOk(true);
    };
    probe.onerror = () => {
      if (!cancelled) setOk(false);
    };
    probe.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (ok) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-[var(--cream-2)] text-[var(--ink-soft)] ${className}`}
    >
      <svg viewBox="0 0 48 48" className="h-9 w-9 opacity-60">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          d="M8 14a3 3 0 0 1 3-3h6l3-4h8l3 4h6a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V14Z"
        />
        <circle cx="24" cy="26" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="px-3 text-center text-xs font-semibold">{placeholderLabel}</span>
      <span className="px-3 text-center text-[0.65rem] text-[var(--ink-soft)]/70">{src}</span>
    </div>
  );
}
