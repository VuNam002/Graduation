"use client";

import { useEffect, useState } from "react";

const SRC = "/photos/may_bay.png";

/**
 * Paper-plane that flies diagonally across the hero and loops.
 * Renders /public/photos/may_bay.png once confirmed loadable (same
 * probe pattern as PhotoFrame/GradCap, to dodge the SSR-hydration
 * image-error race); falls back to a drawn paper-plane icon so the
 * hero never looks broken while the file hasn't been added yet.
 *
 * `variant` picks one of three flight paths (globals.css) so several
 * planes on screen at once don't fly in lock-step; `delaySeconds`
 * (negative = starts mid-flight) and `durationSeconds` stagger them
 * further.
 */
export default function FlyingPlane({
  variant = "a",
  delaySeconds = 0,
  durationSeconds = 17,
  className = "",
}: {
  variant?: "a" | "b" | "c";
  delaySeconds?: number;
  durationSeconds?: number;
  className?: string;
}) {
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
    probe.src = SRC;
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={`animate-fly-${variant} pointer-events-none absolute left-0 top-0 ${className}`}
      style={{ animationDelay: `${delaySeconds}s`, animationDuration: `${durationSeconds}s` }}
      aria-hidden="true"
    >
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={SRC}
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)]"
        />
      ) : (
        <svg
          viewBox="0 0 40 40"
          className="h-full w-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)]"
        >
          <path
            fill="var(--gold)"
            stroke="var(--gold-deep)"
            strokeWidth="1"
            strokeLinejoin="round"
            d="M4 20 36 6 24 34l-4-11-6 4-1-7-9 0Z"
          />
          <path fill="var(--gold-deep)" d="M20 23 24 34l-4-11 8-9-8 9Z" />
        </svg>
      )}
    </div>
  );
}
