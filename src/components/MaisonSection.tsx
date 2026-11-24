import { BRAND_ASSETS } from '../tokens/brand';
import { OrnamentDivider } from './OrnamentDivider';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';

export function MaisonSection() {
  return (
    <section
      id="maison"
      aria-labelledby="maison-heading"
      className="bg-[#F3EBDD] text-[#3B241D] py-20 sm:py-28 border-b border-[#173D32]/10"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Genuine architectural niche photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delayMs={80}>
              <figure className="relative mx-auto max-w-[460px] lg:max-w-none">
                <div className="border border-[#C5A45A]/45 p-3 bg-[#F3EBDD]">
                  <div className="aspect-[3/4] overflow-hidden bg-[#F3EBDD]">
                    <ProductImage
                      src={BRAND_ASSETS.architecturalBlooms.src}
                      alt={BRAND_ASSETS.architecturalBlooms.alt}
                      width={BRAND_ASSETS.architecturalBlooms.width}
                      height={BRAND_ASSETS.architecturalBlooms.height}
                      imgClassName="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                      fallbackLabel="Triptyque de fleurs en chocolat"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-xs tracking-[0.06em] text-[#3B241D]/75 flex items-center justify-between">
                  <span>Fleurs en chocolat personnalisées</span>
                  <span className="text-[#B9875B]">Chocolat noir &amp; blanc</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>

          {/* Editorial Maison statement */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <ScrollReveal delayMs={0}>
                <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#173D32]">
                  La Maison
                </p>
              </ScrollReveal>
              <h2
                id="maison-heading"
                className="font-editorial font-normal text-[#173D32] text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-balance"
              >
                <ScrollReveal as="span" delayMs={80}>
                  L’élégance du chocolat,
                </ScrollReveal>
                <ScrollReveal as="span" delayMs={160}>
                  pensée sur mesure.
                </ScrollReveal>
              </h2>
            </div>

            <ScrollReveal delayMs={220}>
              <OrnamentDivider tone="gold" align="left" />
            </ScrollReveal>

            <div className="space-y-5 max-w-2xl text-base sm:text-[17px] leading-[1.75] text-[#3B241D]/90">
              <ScrollReveal delayMs={280}>
                <p>
                  CHOCO LOUTI imagine le chocolat comme un art de l’attention.
                  Chaque création naît de l’envie de transformer un geste d’offrir
                  en un souvenir délicat, singulier et mémorable.
                </p>
              </ScrollReveal>
              <ScrollReveal delayMs={360}>
                <p>
                  À travers des fleurs en chocolat sculptées et des coffrets
                  composés avec soin, la Maison réunit la justesse du détail,
                  l’esthétique du geste et le plaisir authentique du chocolat
                  artisanal.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#173D32]/15">
              <ScrollReveal delayMs={420}>
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5">
                  <p className="font-editorial text-xl text-[#173D32]">
                    Créations florales
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3B241D]/80">
                    Des pétales façonnés avec délicatesse et présentés dans leur
                    collerette.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delayMs={500}>
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5">
                  <p className="font-editorial text-xl text-[#173D32]">
                    Intention sur mesure
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3B241D]/80">
                    Une attention pensée pour refléter votre événement et votre
                    message.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delayMs={580}>
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5">
                  <p className="font-editorial text-xl text-[#173D32]">
                    Art du coffret
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3B241D]/80">
                    Une présentation raffinée où chaque composition révèle son
                    harmonie.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
