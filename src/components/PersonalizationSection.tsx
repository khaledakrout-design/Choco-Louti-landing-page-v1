import { ArrowRight } from 'lucide-react';
import { OCCASIONS, type OccasionLabel } from '../utils/chocoLogic';
import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';

const STAGES = [
  {
    number: '01',
    title: 'Votre occasion',
    description:
      'Vous identifiez le moment que vous souhaitez célébrer et l’intention que vous voulez transmettre à travers ce présent.',
  },
  {
    number: '02',
    title: 'Votre inspiration',
    description:
      'Vous partagez vos préférences visuelles, l’ambiance souhaitée et l’esprit de votre geste entre chocolat noir et chocolat blanc.',
  },
  {
    number: '03',
    title: 'Votre demande',
    description:
      'Nous échangeons directement autour de votre idée afin d’imaginer ensemble la présentation qui correspond à votre attente.',
  },
] as const;

interface PersonalizationSectionProps {
  selectedOccasion: string;
  onSelectOccasion: (occasion: OccasionLabel) => void;
}

export function PersonalizationSection({
  selectedOccasion,
  onSelectOccasion,
}: PersonalizationSectionProps) {
  return (
    <section
      id="personnalisation"
      aria-labelledby="personnalisation-heading"
      className="bg-[#173D32] text-[#F3EBDD] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C5A45A]">
              Personnalisation
            </p>
            <h2
              id="personnalisation-heading"
              className="font-editorial font-normal text-[#F3EBDD] text-[clamp(2rem,3.6vw,3.3rem)] leading-[1.12] text-balance"
            >
              Votre idée. Notre inspiration. Une création à partager.
            </h2>
            <OrnamentDivider tone="gold" align="center" className="pt-2" />
          </div>
        </ScrollReveal>

        {/* Three editorial presentation stages */}
        <ScrollReveal delayMs={90}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {STAGES.map((stage) => (
              <div
                key={stage.number}
                className="h-full border-t border-[#C5A45A]/55 pt-7 space-y-4"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial italic text-4xl text-[#C5A45A] tabular-nums">
                    {stage.number}
                  </span>
                  <span className="h-px flex-1 ml-4 bg-[#F3EBDD]/15" aria-hidden="true" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-[28px] text-[#F3EBDD]">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-[1.75] text-[#F3EBDD]/82">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Interactive occasion pre-selector + primary CTA */}
        <ScrollReveal delayMs={160}>
          <div className="mt-14 pt-10 border-t border-[#F3EBDD]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.18em] uppercase text-[#DCE4D9]/85">
                Orientations d’occasions
              </p>
              <div
                role="group"
                aria-label="Sélectionner une occasion pour votre demande"
                className="flex flex-wrap gap-2.5"
              >
                {OCCASIONS.map((occasion) => {
                  const active = selectedOccasion === occasion;
                  return (
                    <button
                      key={occasion}
                      type="button"
                      onClick={() => onSelectOccasion(occasion)}
                      aria-pressed={active}
                      className={`whitespace-nowrap shrink-0 px-3.5 py-2 text-xs tracking-[0.04em] border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A] ${
                        active
                          ? 'bg-[#C5A45A] text-[#173D32] border-[#C5A45A] font-semibold'
                          : 'bg-transparent text-[#F3EBDD]/90 border-[#F3EBDD]/25 hover:border-[#C5A45A] hover:text-[#C5A45A]'
                      }`}
                    >
                      {occasion}
                    </button>
                  );
                })}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 bg-[#F3EBDD] text-[#173D32] hover:bg-[#C5A45A] px-7 py-3.5 text-xs font-semibold tracking-[0.11em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
            >
              <span>Imaginer ma création</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
