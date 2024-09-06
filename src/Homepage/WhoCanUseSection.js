import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './dotsStyle.css'; // Import custom CSS for dots

import Executive from '../assets/WhoCanUseSection/Executive.svg';
import SmallBusiness from '../assets/WhoCanUseSection/Small-Business.svg';
import ChurchLeader from '../assets/WhoCanUseSection/Church-Leader.svg';
import SalesTeams from '../assets/WhoCanUseSection/Sales-Teams.svg';
import Attorneys from '../assets/WhoCanUseSection/Attorneys.svg';
import Consultants from '../assets/WhoCanUseSection/Consultants.svg';
import Entrepreneurs from '../assets/WhoCanUseSection/Entrepreneurs.svg';
import Photographers from '../assets/WhoCanUseSection/Photographers.svg';
import Authors from '../assets/WhoCanUseSection/Authors.svg';

import DarkExecutive from '../assets/WhoCanUseSection/ForDarkTheme/Executive.svg';
import DarkSmallBusiness from '../assets/WhoCanUseSection/ForDarkTheme/Small-Business.svg';
import DarkChurchLeader from '../assets/WhoCanUseSection/ForDarkTheme/Church-Leader.svg';
import DarkSalesTeams from '../assets/WhoCanUseSection/ForDarkTheme/Sales-Teams.svg';
import DarkAttorneys from '../assets/WhoCanUseSection/ForDarkTheme/Attorneys.svg';
import DarkConsultants from '../assets/WhoCanUseSection/ForDarkTheme/Consultants.svg';
import DarkEntrepreneurs from '../assets/WhoCanUseSection/ForDarkTheme/Entrepreneurs.svg';
import DarkPhotographers from '../assets/WhoCanUseSection/ForDarkTheme/Photographers.svg';
import DarkAuthors from '../assets/WhoCanUseSection/ForDarkTheme/Authors.svg';

const WhoCanUseSection = ({ darkMode }) => {
  const users = [
    { lightIcon: Executive, darkIcon: DarkExecutive, text: 'Executive' },
    { lightIcon: SmallBusiness, darkIcon: DarkSmallBusiness, text: 'Small Business' },
    { lightIcon: ChurchLeader, darkIcon: DarkChurchLeader, text: 'Church Leader' },
    { lightIcon: SalesTeams, darkIcon: DarkSalesTeams, text: 'Sales Teams' },
    { lightIcon: Attorneys, darkIcon: DarkAttorneys, text: 'Attorneys' },
    { lightIcon: Consultants, darkIcon: DarkConsultants, text: 'Consultants' },
    { lightIcon: Entrepreneurs, darkIcon: DarkEntrepreneurs, text: 'Entrepreneurs' },
    { lightIcon: Photographers, darkIcon: DarkPhotographers, text: 'Photographers' },
    { lightIcon: Authors, darkIcon: DarkAuthors, text: 'Authors' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white dark:bg-black dark:text-white">
      <div className="w-[88%] mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 sm:mb-4 md:mb-5 lg:mb-8">
          Who can use a Virtual Assistant?
        </h2>
        <div className="hidden sm:flex flex-wrap justify-center">
          {users.map(({ lightIcon, darkIcon, text }, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 mb-8 flex justify-center">
              <div className="flex items-center w-44">
                <img src={darkMode ? darkIcon : lightIcon} alt={text} className="h-4 sm:h-5 md:h-5 lg:h-6 xl:h-6 2xl:h-8 mr-2" />
                <span className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">{text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="block sm:hidden py-10 relative">
          <Slider {...settings}>
            {users.map(({ lightIcon, darkIcon, text }, index) => (
              <div key={index}>
                <div className="flex justify-center">
                  <div className="flex items-center">
                    <img src={darkMode ? darkIcon : lightIcon} alt={text} className="h-8 mr-2" />
                    <span className="text-base">{text}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-light text-center sm:mt-8">And you, probably!</p>
      </div>
    </section>
  );
};

export default WhoCanUseSection;
