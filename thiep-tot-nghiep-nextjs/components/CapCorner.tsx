export default function CapCorner({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={`h-full w-full ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 60 100 20l90 40-90 40L10 60Z" />
        <path d="M46 76v30c0 12 24 22 54 22s54-10 54-22V76" />
        <path d="M182 60v36" />
        <circle cx="182" cy="104" r="5" />
      </g>
    </svg>
  );
}
