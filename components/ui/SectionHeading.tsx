export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-600">{eyebrow}</p>
      )}
      <h2
        className={`font-display text-3xl leading-tight font-medium sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
