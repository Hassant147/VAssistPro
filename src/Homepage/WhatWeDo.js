import React, { useEffect, useState } from 'react';
import hero from '../assets/WhatWeDo/hero.svg'; // Adjust the path as necessary

// Import custom icons for both themes
import adminSupportLight from '../assets/WhatWeDo/AS.svg';
import customerServiceLight from '../assets/WhatWeDo/CSTC.svg';
import schedulingLight from '../assets/WhatWeDo/SMS.svg';
import specialProjectsLight from '../assets/WhatWeDo/SPEH.svg';

import adminSupportDark from '../assets/WhatWeDo/ForDarkTheme/AS.svg';
import customerServiceDark from '../assets/WhatWeDo/ForDarkTheme/CSTC.svg';
import schedulingDark from '../assets/WhatWeDo/ForDarkTheme/SMS.svg';
import specialProjectsDark from '../assets/WhatWeDo/ForDarkTheme/SPEH.svg';

const WhatWeDoSection = () => {
  const [theme, setTheme] = useState('light');

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

  const services = [
    {
      icon: theme === 'dark' ? adminSupportDark : adminSupportLight,
      text: 'Administrative Support',
    },
    {
      icon: theme === 'dark' ? customerServiceDark : customerServiceLight,
      text: 'Customer Service That Cares',
    },
    {
      icon: theme === 'dark' ? schedulingDark : schedulingLight,
      text: 'Scheduling Made Simple',
    },
    {
      icon: theme === 'dark' ? specialProjectsDark : specialProjectsLight,
      text: 'Special Projects, Expertly Handled',
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white dark:bg-[#151515] dark:text-white">
      <div className="w-[88%] mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="sm:w-2/5 mb-8 lg:mb-0 text-center sm:text-left">
          <img src={hero} alt="What We Do" className="w-full mx-auto" />
        </div>
        <div className="sm:w-[50%] text-left">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 sm:mb-4 md:mb-5 lg:mb-8">What We Do</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="font-light flex items-center mb-2 sm:mb-3">
                <img src={service.icon} alt={service.text} className="h-4 sm:h-5 md:h-5 lg:h-6 xl:h-6 2xl:h-8 mr-2 sm:mr-4" />
                <span className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">{service.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
