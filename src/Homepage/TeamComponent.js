import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamImage1 from '../assets/OurTeamSection/p1.svg';
import teamImage2 from '../assets/OurTeamSection/p2.svg';
import teamImage3 from '../assets/OurTeamSection/p3.svg';
import './dotsStyle.css'; // Import custom CSS for dots

const teamMembers = [
  { name: 'DAVID Levi CEO', image: teamImage1 },
  { name: 'Jack Levi CEO', image: teamImage2 },
  { name: 'jerry Levi CEO', image: teamImage3 },
];

const TeamComponent = () => {
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

  const settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white dark:bg-black dark:text-white">
      <div className="w-[88%] mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 sm:mb-6 md:mb-10 lg:mb-14">Our Team</h2>
        <Slider {...settings}>
          {teamMembers.map(({ name, image }, index) => (
            <div key={index} className=" ">
              <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg w-64 mx-auto">
                <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="bg-[#6155A8] dark:bg-[#DFBB00] dark:text-black text-white py-2">
                  <p className="text-lg sm:text-xl md:text-xl font-semibold">{name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamComponent;