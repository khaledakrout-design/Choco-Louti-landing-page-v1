import { BRAND_ASSETS } from '../tokens/brand';
import { FadeInUp } from './FadeInUp';
import { OrnamentDivider } from './OrnamentDivider';
import { ProductImage } from './ProductImage';

const DETAIL_NOTES = [
  {
    index: '01',
    title: 'Sculpture des pétales',
    description:
      'Des pétales modelés en superposition pour composer une fleur en chocolat aux courbes nettes et équilibrées.',
  },
  {
    index: '02',
    title: 'Teintes naturelles du cacao',
    description:
      'L’intensité mate et satinée du chocolat noir répond à la douceur lumineuse du chocolat blanc, sans artifice.',
  },
  {
    index: '03',
    title: 'Présentation en dentelle',
    description:
      'Chaque fleur repose dans une collerette finement ajourée qui protège sa silhouette et souligne son raffinement.',
  },
] as const;

export function ProductDetailSection() {
  return (
    <section
      id="savoir-faire"
      aria-labelledby="detail-heading"
      className="bg-[#3B241D] text-[#F3EBDD] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial prose and tactile details */}
          <div className="lg:col-span-6 space-y-8">
            <FadeInUp>
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C5A45A]">
                  L’Art du Chocolat
                </p>
                <h2
                  id="detail-heading"
                  className="font-editorial font-normal text-[#F3EBDD] text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-balance"
                >
                  La beauté se cache dans chaque détail.
                </h2>
              </div>
            </FadeInUp>

            <FadeInUp delayMs={80}>
              <OrnamentDivider tone="gold" align="left" />
            </FadeInUp>

            <FadeInUp delayMs={130}>
              <p className="text-base sm:text-[17px] leading-[1.75] text-[#F3EBDD]/85 max-w-xl">
                Observer une fleur en chocolat CHOCO LOUTI de près, c’est
                découvrir le dialogue entre la matière gourmande, la précision du
                geste et l’élégance d’une mise en scène épurée.
              </p>
            </FadeInUp>

            <div className="divide-y divide-[#C5A45A]/25 border-t border-b border-[#C5A45A]/25">
              {DETAIL_NOTES.map((item, idx) => (
                <FadeInUp key={item.index} delayMs={160 + idx * 60}>
                  <div className="py-5 flex items-start gap-5">
                    <span className="font-editorial italic text-xl text-[#C5A45A] tabular-nums shrink-0 pt-0.5">
                      {item.index}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-editorial text-xl text-[#F3EBDD]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#F3EBDD]/78">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Intimate macro product photograph */}
          <div className="lg:col-span-6">
            <FadeInUp delayMs={120}>
              <div className="mx-auto max-w-[520px] lg:max-w-none border border-[#C5A45A]/45 p-3 sm:p-4 bg-[#173D32]">
                <div className="aspect-[4/5] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.macroRose.src}
                    alt={BRAND_ASSETS.macroRose.alt}
                    width={BRAND_ASSETS.macroRose.width}
                    height={BRAND_ASSETS.macroRose.height}
                    imgClassName="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                    fallbackLabel="Détail macro — Rose en chocolat noir"
                  />
                </div>
                <p className="pt-3.5 pb-1 px-1 text-xs tracking-[0.12em] uppercase text-[#C5A45A] flex items-center justify-between gap-4">
                  <span>Étude macro · Fleur en chocolat noir</span>
                  <span className="text-[#F3EBDD]/70">Présentation dentelle</span>
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
