import HeroStory from "@/components/home/HeroStory";
import QuotePanel from "@/components/home/QuotePanel";
import BrandStory from "@/components/home/BrandStory";
import ProductShowcase from "@/components/home/ProductShowcase";
import Impact from "@/components/home/Impact";
import AwardsStrip from "@/components/home/AwardsStrip";
import Stories from "@/components/home/Stories";
import Testimonials from "@/components/home/Testimonials";
import WhereToBuy from "@/components/home/WhereToBuy";
import { getContent } from "@/lib/content";

export default async function HomePage() {
  const { c } = await getContent();
  return (
    <>
      <HeroStory hero={c.hero} heroStory={c.heroStory} ui={c.ui.home.hero} />
      <QuotePanel quote={c.quote} />
      <BrandStory />
      <ProductShowcase />
      <Impact />
      <AwardsStrip />
      <Stories />
      <Testimonials />
      <WhereToBuy />
    </>
  );
}
