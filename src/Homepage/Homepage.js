import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import WhyChooseUsSection from "./WhyChooseUs";
import WhatWeDoSection from "./WhatWeDo";
import WhoCanUseSection from "./WhoCanUseSection";
import SimpleTextComponent from "./TextComponent";
import TestimonialComponent from "./TestimonialSection";
import TestimonialSectionForMobile from "./TestimonialSectionForMobile";
import PricingComponent from "./PricingComponent";
import FormComponent from "./FormComponent";
import ProductivitySection from "./NewComponent";
import SecondFooter from "./SecondFooter";

const Homepage = ({ toggleDarkMode, darkMode, pricingRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const formRef = useRef(null);

  useEffect(() => {
    const handleScrollToFormEvent = () => {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scrollToForm", handleScrollToFormEvent);

    return () => {
      window.removeEventListener("scrollToForm", handleScrollToFormEvent);
    };
  }, [formRef]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollTo") === "form") {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", location.pathname);
      }, 100);
    }
  }, [location, formRef]);

  return (
    <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
      <motion.div
        animate={{ y: menuOpen ? 100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      <ProductivitySection />
      <WhyChooseUsSection darkMode={darkMode} />
      <WhatWeDoSection />
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
      <div>
        <PricingComponent darkMode={darkMode} />
      </div>
      <div ref={formRef} className="pt-20 pb-20">
        {/* <FormComponent darkMode={darkMode} /> */}
        <SecondFooter darkMode={darkMode}  headingText={"Have Questions? Let's Discuss Your Needs"}/>
      </div>
    </Layout>
  );
};

export default Homepage;
