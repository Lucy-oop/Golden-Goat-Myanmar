import Image from "@/components/ui/Image";

// Fills its (relative, sized) parent. Landscape photos cover the frame; `contain` photos
// (portrait shots like award trophies) are shown whole over a blurred copy of themselves.
export default function FitImage({ src, alt, sizes, contain, className = "" }: { src: string; alt: string; sizes: string; contain?: boolean; className?: string }) {
  if (!contain) return <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${className}`} />;
  return (
    <>
      <Image src={src} alt="" fill sizes={sizes} className="scale-110 object-cover opacity-70 blur-2xl" />
      <Image src={src} alt={alt} fill sizes={sizes} className={`object-contain ${className}`} />
    </>
  );
}
