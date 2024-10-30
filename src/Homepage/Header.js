import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub, FaDribbble, FaPhone } from 'react-icons/fa';
import logo from '../assets/ForHeaderSection/logo.svg';
import darkLogo from '../assets/ForHeaderSection/dark-logo.svg';
import ToggleSwitch from './Components/Switch-Theme-button';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollToForm = () => {
    if (location.pathname === '/') {
      window.dispatchEvent(new CustomEvent('scrollToForm'));
    } else {
      navigate('/?scrollTo=form');
    }
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setMenuOpen(false);
  };

  const navigateToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full flex items-center justify-between p-6 bg-white dark:bg-[#000000] z-50">
      <div className="flex items-center">
        <button onClick={handleLogoClick}>
          <img src={darkMode ? logo : darkLogo} alt="Logo" className="w-24 md:w-36" />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <ToggleSwitch toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <a href="tel:+1234567890" className="dark:bg-white bg-black text-white dark:text-black px-2 py-1 rounded-full">
          <FaPhone />
        </a>
        <a
          href="/why-choose-us"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-300 to-[#17ADE7] text-white font-semibold hover:from-[#17ADE7] hover:to-black transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-300"
        >
          Why Us
        </a>
        <a
          href="/pricing"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-300 to-[#17ADE7] text-white font-semibold hover:from-[#17ADE7] hover:to-black transition duration-300 shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-300"
        >
          Pricing
        </a>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black dark:text-white text-black"
          >
            <div className="absolute top-6 left-6">
              <button onClick={handleLogoClick}>
                <img src={darkMode ? logo : darkLogo} alt="Logo" className="w-24 md:w-36" />
              </button>
            </div>
            <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col items-center py-32 h-full space-y-8">
              <div className="text-3xl font-bold grid grid-cols-2 gap-0 w-full">
                <Link to="/" style={{ borderRight: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 ml-2 text-left md:text-center md:ml-0" onClick={navigateToHome}>Home</Link>
                <Link to="/assist-me" style={{ borderRight: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 text-left ml-2 md:text-center md:ml-0" onClick={navigateToAssistMe}>Assist Me</Link>
                <button onClick={scrollToForm} style={{ borderLeft: '0.1px solid #262626', borderRight: '0.1px solid #262626', borderTop: '0.1px solid #262626', borderBottom: '0.1px solid #262626' }} className="p-14 ml-2 text-left md:text-center md:ml-0">Free trial</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full px-6 md:px-16 mt-10">
                <div className="text-left flex flex-col address-section">
                  <div className="text-lg mb-2 font-semibold">Our offices</div>
                  <div className="mb-4">
                    {/* <div className="font-bold">Copenhagen</div> */}
                    <p className="mt-1">• 5825 gulfton st apt 3205 Houston tx 77081</p>
                    <p className="mt-4">• 7901 4th St N Ste 300, Saint Petersburg, FL 33702</p>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-10 md:mt-0">
                  <div className="text-lg mb-2 font-semibold">Follow us</div>
                  <div className="flex justify-center space-x-6 mt-2 social-media-container">
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
