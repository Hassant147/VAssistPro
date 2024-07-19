import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import WhyChooseUsSection from './WhyChooseUs';
import WhatWeDoSection from './WhatWeDo';
import ServicesSection from './OurServices';
import WhoCanUseSection from './WhoCanUseSection';
import SimpleTextComponent from './TextComponent';
import TestimonialComponent from './TestimonialSection';
import TestimonialSectionForMobile from './TestimonialSectionForMobile'; // Import the mobile component
import PricingComponent from './PricingComponent';
import TeamComponent from './TeamComponent';
import FormComponent from './FormComponent';
import FooterComponent from './Footer';

const Homepage = ({ toggleDarkMode, darkMode, handleScrollToPricing, pricingRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollToPricingEvent = () => {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('scrollToPricing', handleScrollToPricingEvent);

    return () => {
      window.removeEventListener('scrollToPricing', handleScrollToPricingEvent);
    };
  }, [pricingRef]);

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} handleScrollToPricing={handleScrollToPricing} />
      <motion.div
        animate={{ y: menuOpen ? 100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      <WhyChooseUsSection darkMode={darkMode} />
      <WhatWeDoSection />
      <ServicesSection />
      <WhoCanUseSection darkMode={darkMode} />
      <SimpleTextComponent />
      <div className="testimonials-wrapper">
        <div className="testimonials-desktop">
          <TestimonialComponent darkMode={darkMode} />
        </div>
        <div className="testimonials-mobile">
          <TestimonialSectionForMobile darkMode={darkMode} />
        </div>
      </div>
      <div ref={pricingRef}>
        <PricingComponent darkMode={darkMode} />
      </div>
      <TeamComponent />
      <FormComponent />
      <FooterComponent />
    </div>
  );
};

export default Homepage;
