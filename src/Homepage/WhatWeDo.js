import React, { useEffect, useState, useRef } from "react";
import hero from "../assets/WhatWeDo/hero.svg"; // Adjust the path as necessary

// our services slider import here
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faCalendarAlt,
  faReceipt,
  faKeyboard,
  faPlane,
  faGlobe,
  faCalendarCheck,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import "./OurServices.css"; // Custom CSS for arrows and styles

// Import custom icons for both themes
import adminSupportLight from "../assets/WhatWeDo/AS.svg";
import customerServiceLight from "../assets/WhatWeDo/CSTC.svg";
import schedulingLight from "../assets/WhatWeDo/SMS.svg";
import specialProjectsLight from "../assets/WhatWeDo/SPEH.svg";

import adminSupportDark from "../assets/WhatWeDo/ForDarkTheme/AS.svg";
import customerServiceDark from "../assets/WhatWeDo/ForDarkTheme/CSTC.svg";
import schedulingDark from "../assets/WhatWeDo/ForDarkTheme/SMS.svg";
import specialProjectsDark from "../assets/WhatWeDo/ForDarkTheme/SPEH.svg";

const servicesslides = [
  {
    title: "Inbox Management",
    description:
      "Efficiently managing your emails and ensuring timely responses.",
    icon: faEnvelopeOpenText,
  },
  {
    title: "Calendar Management",
    description: "Keeping your schedule organized and up-to-date.",
    icon: faCalendarAlt,
  },
  {
    title: "Expenses & Invoices",
    description: "Handling all your financial documentation and transactions.",
    icon: faReceipt,
  },
  {
    title: "Data Entry",
    description: "Accurate and efficient data entry services.",
    icon: faKeyboard,
  },
  {
    title: "Travel Booking",
    description: "Arranging your travel plans for a hassle-free journey.",
    icon: faPlane,
  },
  {
    title: "Website Maintenance",
    description: "Keeping your website updated and running smoothly.",
    icon: faGlobe,
  },
  {
    title: "Event Planning",
    description: "Organizing events that leave a lasting impression.",
    icon: faCalendarCheck,
  },
  {
    title: "Limoanywhere",
    description: "Providing limousine services for your convenience.",
    icon: faCar,
  },
];

const WhatWeDoSection = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const detectTheme = () => {
      const currentTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(currentTheme);
    };

    detectTheme(); // Initial theme detection

    // Observer to detect changes in the theme
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: theme === "dark" ? adminSupportDark : adminSupportLight,
      text: "Administrative Support",
    },
    {
      icon: theme === "dark" ? customerServiceDark : customerServiceLight,
      text: "Customer Service That Cares",
    },
    {
      icon: theme === "dark" ? schedulingDark : schedulingLight,
      text: "Scheduling Made Simple",
    },
    {
      icon: theme === "dark" ? specialProjectsDark : specialProjectsLight,
      text: "Special Projects, Expertly Handled",
    },
  ];

  // slider settings
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#000000] dark:text-white">
      <section className="w-[88%] mx-auto py-14 sm:py-16 lg:py-20">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-left xl:text-3xl 2xl:text-4xl font-semibold mb-4 sm:mb-4 md:mb-5">
          What We Do
        </h2>
        <div className=" flex flex-col sm:flex-row items-start sm:justify-between">
          <div className="sm:w-2/5 mb-8 lg:mb-0 text-center sm:text-left items-stretch">
            <img src={hero} alt="What We Do" className="w-full mx-auto h-fit" />
          </div>
          <div className="sm:w-[55%] text-left">
            <Slider ref={sliderRef} {...settings}>
              {servicesslides.map((service, index) => (
                <div key={index} className="px-2 h-full">
                  <div className="bg-gray-50 dark:bg-[#151515] xl:min-h-[350px] lg:min-h-[250px] h-full w-auto mx-auto shadow-lg  rounded-lg flex flex-col justify-between">
                    <div className="xl:mb-10 text-left md:p-6 lg:px-5 xl:p-6">
                      {/* service-icon ye class lagi hui thi margin bottom deny k liay 50px*/}
                      <FontAwesomeIcon icon={service.icon} className="text-[25px]" />
                    </div>
                    <div className="service-content mb-4 p-3.5">
                      <h3 className="xl:text-lg lg:text-base mb-2 text-black font-light justify-start text-start dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-white xl:text-sm lg:text-xs font-extralight text-left">
                        {service.description}
                      </p>
                    </div>
                    <div className="p-3.5 justify-center flex items-center text-center">
                      <button className="mt-auto  bg-transparent border-2 text-black dark:text-white py-2 px-4 text-sm rounded-full">
                        View more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="slick-arrows-container">
              <div className="slick-arrow slick-prev" onClick={handlePrev}>
                Prev
              </div>
              <div className="slick-arrow slick-next" onClick={handleNext}>
                Next
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
