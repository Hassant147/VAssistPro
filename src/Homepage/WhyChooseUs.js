import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import people from '../assets/ForWhyChooseUs/people.svg';
import person from '../assets/ForWhyChooseUs/person.svg';
import light from '../assets/ForWhyChooseUs/light.svg';
import giving from '../assets/ForWhyChooseUs/giving.svg';
import clock from '../assets/ForWhyChooseUs/clock.svg';

// for dark theme:
import darkPeople from '../assets/ForWhyChooseUs/ForDarkTheme/people.svg';
import darkPerson from '../assets/ForWhyChooseUs/ForDarkTheme/person.svg';
import darkLight from '../assets/ForWhyChooseUs/ForDarkTheme/light.svg';
import darkGiving from '../assets/ForWhyChooseUs/ForDarkTheme/giving.svg';
import darkClock from '../assets/ForWhyChooseUs/ForDarkTheme/clock.svg';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './WhyChooseUs.css'; // Import the CSS file

const WhyChooseUsSection = ({ darkMode }) => {
  const sectionRef = useRef(null);

  const cards = [
    {
      icon: darkMode ? darkPeople : people,
      title: 'EXPERT TEAM',
      description: 'Our team consists of highly skilled and experienced virtual assistants who are committed to providing top-quality service.',
    },
    {
      icon: darkMode ? darkLight : light,
      title: 'CUSTOMIZED SOLUTIONS',
      description: 'We offer tailored services to meet the specific needs of each client, ensuring a personalized and effective approach.',
    },
    {
      icon: darkMode ? darkGiving : giving,
      title: 'COST-EFFECTIVE',
      description: 'By outsourcing to us, you save on overhead costs associated with hiring full-time employees, such as benefits and office space.',
    },
    {
      icon: darkMode ? darkPerson : person,
      title: 'CUTTING-EDGE SOLUTIONS',
      description: 'At V Assist Pro, we specialize in elevating communication standards with seamless call handling, email management, and reservations assistance.',
    },
    {
      icon: darkMode ? darkClock : clock,
      title: '24/7 AVAILABILITY',
      description: 'We understand the importance of being available when you need us, which is why our virtual assistants are accessible around the clock.',
    },
    {
      icon: darkMode ? darkGiving : giving,
      title: 'COST-EFFECTIVE',
      description: 'By outsourcing to us, you save on overhead costs associated with hiring full-time employees, such as benefits and office space.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight - sectionHeight / 4) {
        const cards = section.querySelectorAll('.card');
        cards.forEach(card => card.classList.add('visible'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 lg:py-20 bg-gray-100 dark:bg-black">
      <div className="w-[88%] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-center mb-6 sm:mb-8">Why Choose Us?</h2>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="card bg-gray-200 dark:text-white dark:bg-[#151515] p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={card.icon} alt={card.title} className="xl:h-14 xl:w-14 md:h-10 md:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4" />
              <h3 className="md:text-lg lg:text-lg xl:text-xl font-normal mb-1 sm:mb-2">{card.title}</h3>
              <p className="md:text-xs lg:text-sm xl:text-base font-light">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
            className="custom-swiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-gray-200 dark:text-white dark:bg-[#151515] p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center mx-auto w-3/4">
                  <img src={card.icon} alt={card.title} className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-1 sm:mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
