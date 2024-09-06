import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ForHeaderSection/logo.svg'; // Replace with your logo path
import lightlogo from '../assets/ForFooterComponent/light-icon.svg';

import linkedinIcon from '../assets/ForFooterComponent/light-linkedin.svg'; // Replace with your icons path
import instagramIcon from '../assets/ForFooterComponent/light-instagram.svg';
import facebookIcon from '../assets/ForFooterComponent/light-facebook.svg';
import youtubeIcon from '../assets/ForFooterComponent/light-youtube.svg';
import emailIcon from '../assets/ForFooterComponent/light-mail.svg';

import darklinkedinIcon from '../assets/ForFooterComponent/ForDarkTheme/dark-linkedin.svg'; // Replace with your icons path
import darkinstagramIcon from '../assets/ForFooterComponent/ForDarkTheme/dark-instagram.svg';
import darkfacebookIcon from '../assets/ForFooterComponent/ForDarkTheme/dark-facebook.svg';
import darkyoutubeIcon from '../assets/ForFooterComponent/ForDarkTheme/dark-youtube.svg';
import darkemailIcon from '../assets/ForFooterComponent/ForDarkTheme/dark-mail.svg';

const FooterComponent = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    const detectTheme = () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      setTheme(currentTheme);
    };

    detectTheme(); // Initial theme detection

    // Observer to detect changes in the theme
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const icons = {
    linkedin: theme === 'dark' ? darklinkedinIcon : linkedinIcon,
    instagram: theme === 'dark' ? darkinstagramIcon : instagramIcon,
    facebook: theme === 'dark' ? darkfacebookIcon : facebookIcon,
    youtube: theme === 'dark' ? darkyoutubeIcon : youtubeIcon,
    email: theme === 'dark' ? darkemailIcon : emailIcon,
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className="pt-5 pb-3 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col gap-y-3 items-center md:items-start text-center sm:text-left">
          <img src={theme === 'dark' ? logo : lightlogo} alt="V Assist Pro" className="h-10 mr-3 mb-2 sm:mb-0" />
          <p className="text-sm ">
            &copy; Copyright 2024 &nbsp;
            <span>V Assist Pro Inc.</span>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-y-4 md:space-y-0">
          <div className="flex md:space-x-4 space-x-8">
            <a href="#" className="hover:text-purple-600">
              <img src={icons.linkedin} alt="LinkedIn" className="h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <img src={icons.instagram} alt="Instagram" className="h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <img src={icons.facebook} alt="Facebook" className="h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <img src={icons.youtube} alt="YouTube" className="h-6" />
            </a>
            <a href="#" className="hover:text-purple-600">
              <img src={icons.email} alt="Email" className="h-6" />
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 dark:text-white text-black">
            <button onClick={() => handleNavigate('/privacy-policy')} className="hover:text-purple-600 dark:hover:text-[#17AEE7] text-sm">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
