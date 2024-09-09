import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import people from "../assets/ForWhyChooseUs/people.svg";
import person from "../assets/ForWhyChooseUs/person.svg";
import light from "../assets/ForWhyChooseUs/light.svg";
import giving from "../assets/ForWhyChooseUs/giving.svg";
import clock from "../assets/ForWhyChooseUs/clock.svg";
import personcalling from "../assets/ForWhyChooseUs/personcalling.webp";

// for dark theme:
import darkPeople from "../assets/ForWhyChooseUs/ForDarkTheme/people.svg";
import darkPerson from "../assets/ForWhyChooseUs/ForDarkTheme/person.svg";
import darkLight from "../assets/ForWhyChooseUs/ForDarkTheme/light.svg";
import darkGiving from "../assets/ForWhyChooseUs/ForDarkTheme/giving.svg";
import darkClock from "../assets/ForWhyChooseUs/ForDarkTheme/clock.svg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "./WhyChooseUs.css"; // Import the CSS file
import { Link } from "react-router-dom";

const WhyChooseUsSection = ({ darkMode }) => {
  const sectionRef = useRef(null);

  const cards = [
    {
      icon: darkMode ? darkPeople : people,
      title: "Best Practices",
      description: "Developed from 1 million+ hours of experience",
    },
    {
      icon: darkMode ? darkLight : light,
      title: "Continuity",
      description: "Back-up assistants ensure that urgent tasks aren't dropped",
    },
    {
      icon: darkMode ? darkGiving : giving,
      title: "Improvement",
      description:
        "An Engagement Manager that consistently optimizes your support",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight - sectionHeight / 4) {
        const cards = section.querySelectorAll(".card");
        cards.forEach((card) => card.classList.add("visible"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 lg:py-20 bg-gray-100 dark:bg-black"
    >
      <div className="w-[88%] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-center mb-3 sm:mb-8">
          Why Us?
        </h2>
        <section
          className={`py-8 md:py-16  flex flex-col md:flex-row dark:text-white`}
        >
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Why Customers Choose <br />
              <span className="text- font-bold">Vassist Over Alternatives</span>
            </h1>
            <p className="text-lg leading-relaxed">
              When you get better support, your company achieves more. Unlike
              other{" "}
              <span className="text-[#1392b5] font-semibold">
                virtual assistant
              </span>{" "}
              providers who simply match you with pre-vetted individuals, we’re
              a managed service with a proactive, “can-do” culture.
            </p>
            <p className="text-lg leading-relaxed">
              We back each of our assistants with an Engagement Manager, backup
              support, management and training teams, and{" "}
              <span className="text-[#1392b5] font-semibold">
                enterprise-level security.
              </span>
            </p>
            <p className="text-lg leading-relaxed">
              We onboard every Vassist assistant and provide them with
              behind-the-scenes support so you get highly trained people who
              quickly integrate into your workflow and systems.
            </p>
            <div className="mt-5">
              <a href="#" className=" font-semibold text-lg no-underline ">
                Ready for proactive support?{" "}
                <span className="text-[#1392b5] hover:underline">
                  Book a Call.
                </span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={personcalling}
              alt="Customer Service Representative"
              className=""
            />
          </div>
        </section>

        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-center mb-6 sm:mb-8">
          Expect More. Vassist’s Approach Gives You:
        </h2>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card bg-gray-200 dark:text-white dark:bg-[#151515] p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="xl:h-14 xl:w-14 md:h-10 md:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4"
              />
              <h3 className="md:text-lg lg:text-lg xl:text-xl font-normal mb-1 sm:mb-2">
                {card.title}
              </h3>
              <p className="md:text-xs lg:text-sm xl:text-base font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="py-3.5 mt-3 justify-start flex items-center text-center">
          <button className="mt-auto bg-transparent border-2 text-black dark:text-white py-2 px-4 text-sm rounded-full transition-transform duration-300 ease-in-out hover:bg-[#17aee7] hover:text-white hover:shadow-lg hover:scale-105">
            <Link to="/why-choose-us">View more</Link>
          </button>
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 1500 }}
            className={`custom-swiper ${darkMode ? "dark" : "light"}`}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-gray-200 dark:text-white dark:bg-[#151515] p-6 rounded-lg shadow-md flex flex-col items-center text-center mx-auto w-full sm:w-3/4">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="h-12 w-12 mb-3 sm:mb-4"
                  />
                  <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-1 sm:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base xl:text-lg ">{card.description}</p>
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
