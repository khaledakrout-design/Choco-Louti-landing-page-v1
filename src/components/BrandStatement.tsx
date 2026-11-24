import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';

export function BrandStatement() {
  return (
    <section
      aria-label="Déclaration de marque CHOCO LOUTI"
      className="bg-[#F3EBDD] text-[#173D32] py-16 sm:py-24 border-b border-[#173D32]/12"
    >
      <ScrollReveal className="mx-auto max-w-[1040px] px-4 sm:px-8 text-center space-y-6 sm:space-y-7">
        <OrnamentDivider tone="gold" align="center" />
        <blockquote className="font-editorial italic font-normal text-[#173D32] text-[clamp(1.85rem,3.8vw,3.25rem)] leading-[1.2] text-balance">
          « Parce que certaines attentions méritent d’être uniques. »
        </blockquote>
        <p className="text-xs tracking-[0.24em] uppercase text-[#B9875B]">
          CHOCO LOUTI · L’art du chocolat sur mesure
        </p>
      </ScrollReveal>
    </section>
  );
}
