"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function splitDiff(target: number) {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

const CELLS = [
  { key: "days", label: "Ngày" },
  { key: "hours", label: "Giờ" },
  { key: "mins", label: "Phút" },
  { key: "secs", label: "Giây" },
] as const;

export default function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime();
  // Start at zero on both server and first client render to avoid a
  // hydration mismatch, then sync to the real value once mounted.
  const [value, setValue] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setValue(splitDiff(targetMs));
    const id = setInterval(() => setValue(splitDiff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {CELLS.map((cell) => (
        <div
          key={cell.key}
          className="flex w-[76px] flex-col items-center gap-1 rounded-2xl bg-[var(--cream)] py-3 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] sm:w-[92px] sm:py-4"
        >
          <div className="font-display text-[clamp(1.6rem,5vw,2.4rem)] font-bold leading-none tabular-nums text-[var(--black)]">
            {pad(value[cell.key])}
          </div>
          <div className="text-[0.7rem] font-semibold text-[var(--ink-soft)]">{cell.label}</div>
        </div>
      ))}
    </div>
  );
}
