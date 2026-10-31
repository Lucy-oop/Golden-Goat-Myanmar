// Faint rays radiating from the centre, like a shelf spotlight.
export default function Sunburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 36 }, (_, i) => (i / 36) * Math.PI * 2);
  return (
    <svg
      aria-hidden
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      {rays.map((a) => (
        <line
          key={a}
          x1={Math.cos(a) * 120}
          y1={Math.sin(a) * 120}
          x2={Math.cos(a) * 720}
          y2={Math.sin(a) * 720}
          stroke="#e9dcc0"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="60 40"
          opacity=".35"
        />
      ))}
    </svg>
  );
}
