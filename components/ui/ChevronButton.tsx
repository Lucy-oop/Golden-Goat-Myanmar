import Link from "@/components/ui/Link";

type Variant = "gold" | "outline" | "light";

const styles: Record<Variant, string> = {
  gold: "bg-gold-gradient text-volcanic hover:brightness-110",
  outline: "border border-ink/25 text-ink hover:border-gold-600 hover:text-gold-700",
  light: "border border-white/40 text-white hover:bg-white hover:text-volcanic",
};

export default function ChevronButton({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${styles[variant]}`}
    >
      {children}
      <ChevronIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function ChevronIcon({ className = "", left = false }: { className?: string; left?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path d={left ? "M12.5 4 6.5 10l6 6" : "M7.5 4l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
