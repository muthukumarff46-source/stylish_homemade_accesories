import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { BestSellers } from './components/BestSellers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutBrand } from './components/AboutBrand';
import { InstagramGallery } from './components/InstagramGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { CustomOrdersCTA } from './components/CustomOrdersCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals & Floating Widgets
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CustomOrderModal } from './components/CustomOrderModal';
import { SearchModal } from './components/SearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toast } from './components/Toast';

export function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff5f8] via-[#fdf2f8] to-[#fff5f8] text-pink-950">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <FeaturedCollections />
        <BestSellers />
        <WhyChooseUs />
        <AboutBrand />
        <InstagramGallery />
        <CustomerReviews />
        <CustomOrdersCTA />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <CustomOrderModal />
      <SearchModal />
      <FloatingWhatsApp />
      <Toast />
    </div>
  );
}

export default App;
