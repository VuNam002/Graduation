"use client";

import { useRef, useState } from "react";
import PhotoFrame from "./PhotoFrame";

export default function Gallery({ photos }: { photos: { src: string; alt: string }[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    children.forEach((child, i) => {
      const mid = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < best) {
        best = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  function goTo(i: number) {
    const track = trackRef.current;
    const child = track?.children[i] as HTMLElement | undefined;
    if (!track || !child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[10%] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((p, i) => (
          <div
            key={p.src}
            className="flex w-[min(78vw,340px)] shrink-0 snap-center flex-col transition-all duration-300"
            style={{
              transform: active === i ? "scale(1)" : "scale(0.9)",
              opacity: active === i ? 1 : 0.55,
            }}
          >
            <PhotoFrame
              src={p.src}
              alt={p.alt}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_18px_40px_-20px_rgba(20,15,5,0.35)]"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-center gap-2">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Xem ảnh ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              active === i ? "bg-[var(--gold-deep)]" : "bg-[var(--gold)]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
