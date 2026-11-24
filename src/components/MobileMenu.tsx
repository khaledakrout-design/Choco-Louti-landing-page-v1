import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '../tokens/brand';
import { BrandLogo } from './BrandLogo';
import { OrnamentDivider } from './OrnamentDivider';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation CHOCO LOUTI"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#173D32] text-[#F3EBDD]"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#C5A45A]/30">
        <BrandLogo surface="dark" size="sm" />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu de navigation"
          className="inline-flex items-center justify-center w-11 h-11 text-[#F3EBDD] border border-[#C5A45A]/45 hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <nav
        aria-label="Navigation mobile"
        className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between gap-8"
      >
        <ul className="space-y-1">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.href} className="border-b border-[#F3EBDD]/12">
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline justify-between py-3.5 font-editorial text-2xl text-[#F3EBDD] hover:text-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
              >
                <span>{item.label}</span>
                <span className="font-sans text-[11px] tracking-[0.2em] text-[#C5A45A]/80 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-6 pt-2">
          <OrnamentDivider tone="gold" align="center" />
          <a
            href="#personnalisation"
            onClick={onClose}
            className="flex w-full items-center justify-center bg-[#C5A45A] text-[#173D32] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
          >
            Imaginer ma création
          </a>
          <p className="text-center text-[11px] tracking-[0.22em] uppercase text-[#DCE4D9]/80">
            L’art du chocolat sur mesure
          </p>
        </div>
      </nav>
    </div>
  );
}
