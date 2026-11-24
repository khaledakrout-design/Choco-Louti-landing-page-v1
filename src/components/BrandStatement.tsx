import { FadeInUp } from './FadeInUp';
import { OrnamentDivider } from './OrnamentDivider';

export function BrandStatement() {
  return (
    <section
      aria-label="Déclaration de marque CHOCO LOUTI"
      className="bg-[#F3EBDD] text-[#173D32] py-20 sm:py-24 border-b border-[#173D32]/12"
    >
      <div className="mx-auto max-w-[1040px] px-4 sm:px-8 text-center space-y-7">
        <FadeInUp>
          <OrnamentDivider tone="gold" align="center" />
        </FadeInUp>
        <FadeInUp delayMs={80}>
          <blockquote className="font-editorial italic font-normal text-[#173D32] text-[clamp(1.9rem,3.8vw,3.25rem)] leading-[1.2] text-balance">
            « Parce que certaines attentions méritent d’être uniques. »
          </blockquote>
        </FadeInUp>
        <FadeInUp delayMs={140}>
          <p className="text-xs tracking-[0.24em] uppercase text-[#B9875B]">
            CHOCO LOUTI · L’art du chocolat sur mesure
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
