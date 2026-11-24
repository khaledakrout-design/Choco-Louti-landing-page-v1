import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_ASSETS } from '../tokens/brand';
import { OrnamentDivider } from './OrnamentDivider';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';

export function HeroSection() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative bg-[#173D32] text-[#F3EBDD] overflow-hidden"
    >
      {/* Subtle architectural hairline frame inside Deep Green canvas */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 pt-8 pb-8 sm:pt-12 sm:pb-10 lg:pt-10 lg:pb-6 xl:pt-11 xl:pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial typography column */}
          <div className="lg:col-span-6 space-y-7 lg:pr-4">
            <ScrollReveal delayMs={0}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C5A45A]" aria-hidden="true" />
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.24em] uppercase text-[#C5A45A]">
                  L’art du chocolat sur mesure
                </p>
              </div>
            </ScrollReveal>

            <h1
              id="hero-heading"
              className="font-editorial font-normal text-[#F3EBDD] text-[clamp(2.5rem,4.6vw,4.35rem)] leading-[1.06] tracking-[-0.015em] text-balance"
            >
              <ScrollReveal as="span" delayMs={90}>
                Le chocolat prend
              </ScrollReveal>
              <ScrollReveal as="span" delayMs={180}>
                une autre{' '}
                <span className="italic text-[#C5A45A]">dimension.</span>
              </ScrollReveal>
            </h1>

            <ScrollReveal delayMs={260}>
              <p className="max-w-xl text-base sm:text-[17px] leading-[1.7] text-[#F3EBDD]/88 font-normal">
                Des créations chocolatées personnalisées, pensées pour célébrer
                les instants précieux et sublimer l’art d’offrir.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={340}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <a
                  href="#creations"
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 bg-[#C5A45A] text-[#173D32] hover:bg-[#F3EBDD] px-7 py-3.5 text-xs font-semibold tracking-[0.11em] uppercase transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
                >
                  <span>Découvrir les créations</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#personnalisation"
                  className="inline-flex items-center justify-center whitespace-nowrap shrink-0 border border-[#F3EBDD]/45 text-[#F3EBDD] hover:border-[#C5A45A] hover:text-[#C5A45A] px-7 py-3.5 text-xs font-medium tracking-[0.11em] uppercase transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                >
                  Imaginer une création
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={420}>
              <div className="pt-4 border-t border-[#C5A45A]/25 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-5 gap-y-1.5 text-xs text-[#DCE4D9]/85 tracking-[0.04em]">
                <span>Fleurs en chocolat personnalisées</span>
                <span aria-hidden="true" className="hidden sm:inline text-[#C5A45A]">
                  ·
                </span>
                <span>Chocolat noir &amp; chocolat blanc</span>
                <span aria-hidden="true" className="hidden sm:inline text-[#C5A45A]">
                  ·
                </span>
                <span>Coffrets &amp; attentions sur mesure</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Asymmetrical product photography composition */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[470px] lg:max-w-[465px] xl:max-w-[495px] lg:ml-auto">
              {/* Warm Ivory framing layer */}
              <div className="bg-[#F3EBDD] p-3 sm:p-3.5 border border-[#C5A45A]/45 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[5/5.6] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.signatureGiftbox.src}
                    alt={BRAND_ASSETS.signatureGiftbox.alt}
                    width={BRAND_ASSETS.signatureGiftbox.width}
                    height={BRAND_ASSETS.signatureGiftbox.height}
                    priority
                    imgClassName="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                    fallbackLabel="Coffret Signature — Fleurs en chocolat"
                  />
                </div>

                <div className="pt-3.5 pb-1 px-1 flex items-center justify-between gap-4 text-[#3B241D]">
                  <span className="font-editorial italic text-base sm:text-lg">
                    Coffret Signature · Fleurs en chocolat
                  </span>
                  <OrnamentDivider tone="gold" align="left" className="hidden sm:flex" />
                </div>
              </div>

              {/* Overlapping intimate rose detail inset on desktop */}
              <div className="hidden md:block absolute -left-10 bottom-14 w-32 lg:w-36 bg-[#F3EBDD] p-2 border border-[#C5A45A]/55 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)]">
                <div className="aspect-[4/5] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.macroRose.src}
                    alt={BRAND_ASSETS.macroRose.alt}
                    width={BRAND_ASSETS.macroRose.width}
                    height={BRAND_ASSETS.macroRose.height}
                    priority
                    imgClassName="object-cover object-center"
                    fallbackLabel="Rose en chocolat noir"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle animated scroll-down indicator that fades out once user scrolls */}
        <div
          className={`mt-8 lg:mt-4 flex justify-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasScrolled
              ? 'opacity-0 translate-y-2 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <a
            href="#maison"
            aria-label="Découvrir La Maison — défiler vers le bas"
            tabIndex={hasScrolled ? -1 : 0}
            className="group inline-flex flex-col items-center gap-2 py-1 px-4 text-[#C5A45A] hover:text-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A45A]"
          >
            <span className="text-[10px] font-medium tracking-[0.26em] uppercase text-[#C5A45A]/90 group-hover:text-[#F3EBDD] transition-colors">
              Défiler
            </span>
            <span
              aria-hidden="true"
              className="relative flex items-center justify-center w-7 h-10 bg-[#173D32] border border-[#C5A45A]/45 group-hover:border-[#C5A45A] transition-colors overflow-hidden"
            >
              <span className="absolute top-1.5 w-px h-3.5 bg-[#C5A45A] scroll-cue-drop" />
              <ChevronDown className="w-3.5 h-3.5 mt-4 text-[#C5A45A] group-hover:text-[#F3EBDD] transition-colors" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
