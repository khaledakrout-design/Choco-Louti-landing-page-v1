import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Check, Copy, Info } from 'lucide-react';
import {
  OCCASIONS,
  buildInquirySummary,
  validateContactForm,
  type ContactFormData,
} from '../utils/chocoLogic';
import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  selectedOccasion: string;
  onSelectOccasion: (occasion: string) => void;
}

export function ContactSection({
  selectedOccasion,
  onSelectOccasion,
}: ContactSectionProps) {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [preparedSummary, setPreparedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [preparedSummary]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: ContactFormData = {
      name,
      contact,
      occasion: selectedOccasion,
      message,
    };

    const result = validateContactForm(formData);
    setErrors(result.errors);

    if (!result.isValid) {
      setPreparedSummary(null);
      return;
    }

    // Transparently inform the visitor that backend transmission is not yet wired,
    // without displaying a false "message sent" confirmation.
    setPreparedSummary(buildInquirySummary(formData));
  };

  const handleCopySummary = async () => {
    if (!preparedSummary || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(preparedSummary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#F3EBDD] text-[#3B241D] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial invitation & CTAs */}
          <ScrollReveal className="lg:col-span-5 space-y-7">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#173D32]">
                Contact &amp; Sur-Mesure
              </p>
              <h2
                id="contact-heading"
                className="font-editorial font-normal text-[#173D32] text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-balance"
              >
                Imaginons votre prochaine création.
              </h2>
            </div>

            <OrnamentDivider tone="gold" align="left" />

            <p className="text-base sm:text-[17px] leading-[1.75] text-[#3B241D]/88">
              Partagez votre occasion, votre inspiration ou simplement une
              idée. Entrons en contact pour imaginer votre création.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => nameInputRef.current?.focus()}
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#173D32] text-[#F3EBDD] hover:bg-[#3B241D] px-7 py-3.5 text-xs font-semibold tracking-[0.11em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
              >
                Nous contacter
              </button>
              <a
                href="#creations"
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 border border-[#173D32]/35 text-[#173D32] hover:border-[#173D32] hover:bg-[#173D32]/5 px-6 py-3.5 text-xs font-medium tracking-[0.11em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
              >
                Découvrir les créations
              </a>
            </div>

            <div className="pt-6 border-t border-[#173D32]/15 text-xs leading-relaxed text-[#3B241D]/75 space-y-1.5">
              <p className="font-medium uppercase tracking-[0.14em] text-[#173D32]">
                Information d’intégration
              </p>
              <p>
                Les coordonnées directes de la Maison et l’envoi automatisé de
                ce formulaire seront activés dès le raccordement du service de
                messagerie.
              </p>
            </div>
          </ScrollReveal>

          {/* Honest, validated bespoke inquiry form */}
          <ScrollReveal delayMs={100} className="lg:col-span-7">
            <div className="bg-[#F3EBDD] border border-[#173D32]/20 p-6 sm:p-10 shadow-[0_20px_50px_-28px_rgba(23,61,50,0.2)]">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                      >
                        Nom
                      </label>
                      <input
                        ref={nameInputRef}
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) {
                            setErrors((prev) => ({ ...prev, name: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder="Votre nom ou prénom"
                        className="w-full bg-transparent border border-[#173D32]/30 focus:border-[#173D32] px-4 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          role="alert"
                          className="mt-1.5 text-xs text-[#3B241D] font-medium"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-channel"
                        className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                      >
                        E-mail ou téléphone
                      </label>
                      <input
                        id="contact-channel"
                        name="contact"
                        type="text"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (errors.contact) {
                            setErrors((prev) => ({
                              ...prev,
                              contact: undefined,
                            }));
                          }
                        }}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={
                          errors.contact ? 'error-contact' : undefined
                        }
                        placeholder="vous@exemple.fr ou 06 00 00 00 00"
                        className="w-full bg-transparent border border-[#173D32]/30 focus:border-[#173D32] px-4 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors"
                      />
                      {errors.contact && (
                        <p
                          id="error-contact"
                          role="alert"
                          className="mt-1.5 text-xs text-[#3B241D] font-medium"
                        >
                          {errors.contact}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-occasion"
                      className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                    >
                      Occasion
                    </label>
                    <select
                      id="contact-occasion"
                      name="occasion"
                      value={selectedOccasion}
                      onChange={(e) => {
                        onSelectOccasion(e.target.value);
                        if (errors.occasion) {
                          setErrors((prev) => ({
                            ...prev,
                            occasion: undefined,
                          }));
                        }
                      }}
                      aria-invalid={Boolean(errors.occasion)}
                      aria-describedby={
                        errors.occasion ? 'error-occasion' : undefined
                      }
                      className="w-full bg-[#F3EBDD] border border-[#173D32]/30 focus:border-[#173D32] px-4 py-3 text-sm text-[#3B241D] focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner une occasion</option>
                      {OCCASIONS.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                    {errors.occasion && (
                      <p
                        id="error-occasion"
                        role="alert"
                        className="mt-1.5 text-xs text-[#3B241D] font-medium"
                      >
                        {errors.occasion}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors((prev) => ({
                            ...prev,
                            message: undefined,
                          }));
                        }
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'error-message' : undefined
                      }
                      placeholder="Décrivez votre occasion, vos envies ou le style de création souhaité..."
                      className="w-full bg-transparent border border-[#173D32]/30 focus:border-[#173D32] px-4 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors resize-y"
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        role="alert"
                        className="mt-1.5 text-xs text-[#3B241D] font-medium"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#173D32] text-[#F3EBDD] hover:bg-[#3B241D] px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                    >
                      Préparer ma demande
                    </button>
                    <span className="text-xs text-[#3B241D]/65">
                      Validation locale active · Envoi serveur à connecter
                    </span>
                  </div>
                </form>

                {preparedSummary && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-8 border border-[#C5A45A] bg-[#DCE4D9]/55 p-5 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <Info
                        className="w-5 h-5 text-[#173D32] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#173D32]">
                          Formulaire nécessitant une intégration serveur
                        </p>
                        <p className="text-xs leading-relaxed text-[#3B241D]/85">
                          Aucun service d’envoi n’est encore raccordé à cette
                          interface : votre demande n’a pas été transmise
                          automatiquement. Vous pouvez copier votre récapitulatif
                          ci-dessous.
                        </p>
                      </div>
                    </div>

                    <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed bg-[#F3EBDD] border border-[#173D32]/15 p-4 text-[#3B241D]">
                      {preparedSummary}
                    </pre>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 border border-[#173D32] text-[#173D32] hover:bg-[#173D32] hover:text-[#F3EBDD] px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Récapitulatif copié</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copier le récapitulatif</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
