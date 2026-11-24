import { useState } from 'react';
import { BrandStatement } from './components/BrandStatement';
import { ContactSection } from './components/ContactSection';
import { CreationGallery } from './components/CreationGallery';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { GiftingSection } from './components/GiftingSection';
import { HeroSection } from './components/HeroSection';
import { MaisonSection } from './components/MaisonSection';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import { PersonalizationSection } from './components/PersonalizationSection';
import { ProductDetailSection } from './components/ProductDetailSection';
import { OCCASIONS } from './utils/chocoLogic';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState<string>(OCCASIONS[0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EBDD] text-[#3B241D]">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#173D32] focus:text-[#F3EBDD] focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Aller au contenu principal
      </a>

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <main id="contenu-principal" className="flex-1">
        <HeroSection />
        <MaisonSection />
        <CreationGallery />
        <ProductDetailSection />
        <GiftingSection
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
        />
        <PersonalizationSection
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
        />
        <BrandStatement />
        <FAQAccordion />
        <ContactSection
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
        />
      </main>

      <Footer />
    </div>
  );
}
