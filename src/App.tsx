import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { EarningsCalculator } from './components/EarningsCalculator';
import { PlansSection } from './components/PlansSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhatsAppChannelSection } from './components/WhatsAppChannelSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { FloatingActionBar } from './components/FloatingActionBar';

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
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 pb-16 md:pb-0">
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

        {/* 6. WhatsApp Channel Section */}
        <WhatsAppChannelSection />

        {/* 7. About Us Section */}
        <AboutSection />

        {/* 8. FAQ Accordion Section */}
        <FaqSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPlanId={selectedPlanId}
      />

      {/* Mobile-first Floating Action Bar & Android Call/WhatsApp quick access */}
      <FloatingActionBar onOpenRegister={() => handleOpenRegister('standard')} />
    </div>
  );
}
