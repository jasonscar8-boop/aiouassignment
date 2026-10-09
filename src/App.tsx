import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlansSection } from './components/PlansSection';
import { EarningsCalculator } from './components/EarningsCalculator';
import { WorkSection } from './components/WorkSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PaymentMethodsSection } from './components/PaymentMethodsSection';
import { WhatsAppChannelSection } from './components/WhatsAppChannelSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { WelcomePopup } from './components/WelcomePopup';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('standard');

  const handleOpenRegister = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 pb-16 md:pb-0 relative overflow-x-hidden">
      {/* Liquid Glass Ambient Backlight (Preserves exact #07111F palette) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[130px]" />
        <div className="absolute top-2/3 -left-32 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[140px]" />
      </div>

      {/* Sticky Header */}
      <Navbar onOpenRegister={() => handleOpenRegister('standard')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenRegister={() => handleOpenRegister('standard')} />

        {/* 2. Registration Plans Section */}
        <PlansSection onSelectPlan={(planId) => handleOpenRegister(planId)} />

        {/* 3. Interactive Earnings Calculator */}
        <EarningsCalculator onSelectPlan={(planId) => handleOpenRegister(planId)} />

        {/* 4. Work Section */}
        <WorkSection onOpenRegister={() => handleOpenRegister('standard')} />

        {/* 5. How It Works Section */}
        <HowItWorksSection onOpenRegister={() => handleOpenRegister('standard')} />

        {/* 6. Payment Methods & Information Section (Shaheen Feature Integration) */}
        <PaymentMethodsSection onOpenRegister={(planId) => handleOpenRegister(planId)} />

        {/* 7. WhatsApp Channel Section */}
        <WhatsAppChannelSection />

        {/* 8. About Us Section */}
        <AboutSection />

        {/* 9. FAQ Accordion Section */}
        <FaqSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Student Details / Order Form & Payment Verification Modal (Shaheen Feature Integration) */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPlanId={selectedPlanId}
      />

      {/* Welcome Announcement Popup (Shaheen Feature Integration) */}
      <WelcomePopup onOpenRegister={(planId) => handleOpenRegister(planId)} />

      {/* Mobile-first Floating Action Bar & Android Call/WhatsApp quick access */}
      <FloatingActionBar onOpenRegister={() => handleOpenRegister('standard')} />
    </div>
  );
}

