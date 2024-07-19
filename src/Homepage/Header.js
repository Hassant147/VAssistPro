import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub, FaDribbble } from 'react-icons/fa';
import logo from '../assets/ForHeaderSection/logo.svg'; // Ensure the path is correct
import ToggleSwitch from './Components/Switch-Theme-button';

const Header = ({ toggleDarkMode, darkMode, handleScrollToPricing }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navigateToAssistMe = () => {
    navigate('/assist-me');
    setMenuOpen(false);
  };

  const navigateToHomeAndScrollToPricing = () => {
    navigate('/');
    if (handleScrollToPricing) {
      setTimeout(() => {
        handleScrollToPricing();
      }, 100); // Delay to ensure navigation has completed
    }
    setMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full flex items-center justify-between p-6 bg-[#6155A8] z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-24 md:w-36" />
      </div>
      <div className="flex items-center space-x-6">
        <ToggleSwitch toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <button className="bg-black text-white px-4 py-2 rounded-full">Contact us</button>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-black text-white"
          >
            <div className="absolute top-6 left-6">
              <img src={logo} alt="Logo" className="w-24 md:w-36" />
            </div>
            <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <div className="text-3xl font-bold grid grid-cols-2 gap-0 w-full">
                <Link to="/" style={{ borderRight: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 text-center" onClick={navigateToHome}>Our Work</Link>
                <Link to="/" style={{ borderLeft: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 text-center" onClick={navigateToHome}>About Us</Link>
                <Link to="/assist-me" style={{ borderRight: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 text-center" onClick={navigateToAssistMe}>Assist Me</Link>
                <button onClick={navigateToHomeAndScrollToPricing} style={{ borderLeft: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 text-center">Free trial</button>
              </div>
              <div className="grid grid-cols-2 w-full px-16 mt-10">
                <div className="text-left flex flex-col">
                  <div className="text-lg mb-2">Our offices</div>
                  <div className="mb-4">
                    <div className="font-bold">Copenhagen</div>
                    <div>1 Carlsberg Gate, 1260, København, Denmark</div>
                  </div>
                  <div>
                    <div className="font-bold">Billund</div>
                    <div>24 Lego Allé, 7190, Billund, Denmark</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-lg mb-2">Follow us</div>
                  <div className="flex justify-center space-x-6 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                      <FaDribbble className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
