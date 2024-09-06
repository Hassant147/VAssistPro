import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import WhyChooseUsSection from './WhyChooseUs';
import WhatWeDoSection from './WhatWeDo';
import ServicesSection from './OurServices';
import WhoCanUseSection from './WhoCanUseSection';
import SimpleTextComponent from './TextComponent';
import TestimonialComponent from './TestimonialSection';
import TestimonialSectionForMobile from './TestimonialSectionForMobile';
import PricingComponent from './PricingComponent';
import TeamComponent from './TeamComponent';
import FormComponent from './FormComponent';
import FooterComponent from './Footer';

const Homepage = ({ toggleDarkMode, darkMode, pricingRef }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const formRef = useRef(null);

    useEffect(() => {
        const handleScrollToFormEvent = () => {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        };

        window.addEventListener('scrollToForm', handleScrollToFormEvent);

        return () => {
            window.removeEventListener('scrollToForm', handleScrollToFormEvent);
        };
    }, [formRef]);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('scrollTo') === 'form') {
            setTimeout(() => {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
                window.history.replaceState(null, '', location.pathname);
            }, 100);
        }
    }, [location, formRef]);




    return (
        <div>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
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
            <div>
                <PricingComponent darkMode={darkMode} />
            </div>
            {/* <TeamComponent /> */}

            <div ref={formRef}>
                <FormComponent darkMode={darkMode} />
            </div>


            <FooterComponent />
        </div>
    );
};

export default Homepage;
