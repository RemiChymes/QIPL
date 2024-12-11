import React from 'react';
import Navbar from './Navigation/Navbar';
import HeroSection from './Sections/HeroSection';
import SecuritySection from './Sections/SecuritySection';
import FeaturesSection from './Sections/FeaturesSection';
import IndustriesSection from './Sections/IndustriesSection';
import CTASection from './Sections/CTASection';
import FooterSection from './Sections/FooterSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SecuritySection />
      <FeaturesSection />
      <IndustriesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default HomePage;