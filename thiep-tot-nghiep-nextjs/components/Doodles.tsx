type Doodle = { left: string; top: string; size: number; rotate: number; delay: number; kind: "cap" | "star" | "dot" | "ring" };

const ICONS: Record<Doodle["kind"], React.ReactNode> = {
  cap: (
    <svg viewBox="0 0 40 40" className="h-full w-full">
      <path d="M20 8 4 15l16 7 16-7-16-7Z" />
      <path d="M12 18.5v7c0 3 3.6 5.2 8 5.2s8-2.2 8-5.2v-7" />
      <path d="M34 15v9" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <path d="M12 2l2.4 6.6L21 10l-5.5 4.4L17 21l-5-3.6L7 21l1.5-6.6L3 10l6.6-1.4L12 2Z" />
    </svg>
  ),
  dot: (
    <svg viewBox="0 0 10 10" className="h-full w-full">
      <circle cx="5" cy="5" r="3" />
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 20 20" className="h-full w-full">
      <circle cx="10" cy="10" r="7" />
    </svg>
  ),
};

// Fixed, hand-placed positions (not Math.random) so server and client
// markup match exactly — random per-render would cause a hydration
// mismatch since this renders on the server first.
function scatter(seed: number, kind: Doodle["kind"], count: number): Doodle[] {
  const out: Doodle[] = [];
  for (let i = 0; i < count; i++) {
    const a = (seed + i * 47) % 97;
    const b = (seed + i * 83) % 89;
    out.push({
      left: `${(a * 1.03) % 96}%`,
      top: `${(b * 1.11) % 96}%`,
      size: 14 + (a % 22),
      rotate: (b * 7) % 360,
      delay: (i % 5) * 0.6,
      kind,
    });
  }
  return out;
}

const FIELD: Doodle[] = [
  ...scatter(3, "dot", 10),
  ...scatter(19, "star", 4),
  ...scatter(41, "ring", 4),
  ...scatter(67, "cap", 3),
];

export default function Doodles({
  tone = "gold",
  className = "",
}: {
  tone?: "gold" | "ink";
  className?: string;
}) {
  const color = tone === "gold" ? "var(--gold)" : "var(--ink-soft)";
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {FIELD.map((d, i) => (
        <div
          key={i}
          className="animate-drift absolute opacity-40 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.4]"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            color,
            transform: `rotate(${d.rotate}deg)`,
            animationDelay: `${d.delay}s`,
          }}
        >
          {ICONS[d.kind]}
        </div>
      ))}
    </div>
  );
}
