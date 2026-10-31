import "../globals.css";

// Root layout for the bare site root only; every real page lives under app/[lang].
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
