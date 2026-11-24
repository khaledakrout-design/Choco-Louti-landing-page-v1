import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../tokens/brand';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

export function Navbar({ onOpenMobileMenu, mobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#F3EBDD]/98 border-b border-[#C5A45A]/35 shadow-[0_6px_24px_-12px_rgba(23,61,50,0.14)] backdrop-blur-sm'
          : 'bg-[#F3EBDD] border-b border-[#173D32]/10'
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 lg:gap-8 px-4 sm:px-8 py-3.5">
        <a
          href="#accueil"
          aria-label="CHOCO LOUTI — Retour à l'accueil"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173D32]"
        >
          <BrandLogo surface="ivory" size="md" />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-5 xl:gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-underline whitespace-nowrap shrink-0 text-[13px] font-medium tracking-[0.04em] text-[#173D32] hover:text-[#3B241D] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A45A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#personnalisation"
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#173D32] text-[#F3EBDD] border border-[#173D32] hover:bg-[#3B241D] hover:border-[#3B241D] px-5 py-2.5 text-[12px] font-medium tracking-[0.09em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
          >
            Imaginer ma création
          </a>

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#173D32] border border-[#173D32]/25 hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
