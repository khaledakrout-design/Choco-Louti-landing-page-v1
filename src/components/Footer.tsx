import { NAV_ITEMS } from '../tokens/brand';
import { BrandLogo } from './BrandLogo';
import { OrnamentDivider } from './OrnamentDivider';

export function Footer() {
  return (
    <footer className="bg-[#173D32] text-[#F3EBDD] border-t border-[#C5A45A]/35">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A45A]/25">
          {/* Logo & editorial statement */}
          <div className="md:col-span-5 space-y-5">
            <BrandLogo surface="dark" size="md" />
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#C5A45A]">
              Identité visuelle proposée · En attente de validation
            </p>
            <p className="text-sm leading-relaxed text-[#F3EBDD]/82 max-w-sm">
              CHOCO LOUTI imagine le chocolat artisanal comme un art de
              l’attention, à travers des fleurs en chocolat personnalisées et
              des coffrets sur mesure.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-[#C5A45A]">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#F3EBDD]/85 hover:text-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified contact status (no fabricated phone/email/social handles) */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-[#C5A45A]">
              Contact &amp; Maison
            </h2>
            <p className="text-sm leading-relaxed text-[#F3EBDD]/80">
              Les coordonnées officielles (e-mail, téléphone et réseaux sociaux
              vérifiés) seront publiées ici dès leur confirmation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center border border-[#C5A45A]/55 text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
            >
              Accéder à l’espace contact
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE4D9]/80">
          <p>© 2026 CHOCO LOUTI. Tous droits réservés.</p>
          <OrnamentDivider tone="gold" align="center" className="hidden md:flex" />
          <p className="tracking-[0.18em] uppercase text-[#C5A45A] text-center sm:text-right">
            CHOCO LOUTI — L’ART DU CHOCOLAT SUR MESURE.
          </p>
        </div>
      </div>
    </footer>
  );
}
