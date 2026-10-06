import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCatalog } from './components/ProductCatalog';
import { SectorsSection } from './components/SectorsSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialProduct, setModalInitialProduct] = useState<string | undefined>();
  const [modalInitialSector, setModalInitialSector] = useState<string | undefined>();
  const [selectedProductId, setSelectedProductId] = useState<string>('pvc-compounds');
  const [selectedSectorCategory, setSelectedSectorCategory] = useState<string | undefined>();

  const handleOpenQuoteModal = (productCategory?: string, sector?: string) => {
    setModalInitialProduct(productCategory);
    setModalInitialSector(sector);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const handleSelectSector = (sectorName: string) => {
    setSelectedSectorCategory(sectorName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-polygate-gold-500 selection:text-white">
      {/* 1. Header (Fixed top, transparent to dark navy on scroll) */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onSelectProduct={setSelectedProductId}
        onSelectSector={handleSelectSector}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section (Fullscreen Swiper Slider with Real Industrial Photos & Overlays) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. About Us Section (2-Column with 800+ Employees, 5 Factories, 34+ Markets & 4 Brand Pillars) */}
        <AboutSection />

        {/* 4. Product Range Section (Exact .service-card grid with real photos & Learn More modal) */}
        <ProductCatalog
          selectedProductId={selectedProductId}
          onSelectProduct={setSelectedProductId}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 5. Sectors We Serve (Interactive sectors.png map with 4 pins, pill filters, app cards) */}
        <SectorsSection
          onOpenQuoteModal={handleOpenQuoteModal}
          selectedSectorCategory={selectedSectorCategory}
        />

        {/* 6. CTA Banner ("How can we help you today?") */}
        <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 8. Contact Us Section */}
        <ContactSection />
      </main>

      {/* 9. Footer (3-column Dark Footer) */}
      <Footer
        onSelectProduct={setSelectedProductId}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 10. Interactive RFQ Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={modalInitialProduct}
        initialSector={modalInitialSector}
      />
    </div>
  );
};

export default App;
