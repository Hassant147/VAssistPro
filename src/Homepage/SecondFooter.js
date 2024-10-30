import React from "react";
import leftFlower from "../assets/secondFooter/cta-img-2.webp"; // Adjust import path if necessary
import rightFlower from "../assets/secondFooter/cta-img-1.webp"; // Adjust import path if necessary
import "./SecondFooter.css"; // Custom CSS for additional styling

const SecondFooter = ({ toggleDarkMode, darkMode, headingText, link }) => {
  return (
    <section className="relative bg-[#29323c] dark:bg-[#000000] py-24 md:py-28 w-[88%] mx-auto text-center rounded-tr-l custombordertopleftt md:rounded-tr-[40px] rounded-tr-[10px] my-20">
      {/* Left Flower Image */}
      <img
        src={leftFlower}
        alt="Left Flower"
        className="absolute bottom-0 left-0 w-[70px] md:w-[100px] lg:w-[170px] z-10"
      />
      {/* Right Flower Image */}
      <img
        src={rightFlower}
        alt="Right Flower"
        className="absolute top-0 -right-3.5 md:-right-[50px] w-[70px] md:w-[100px] lg:w-[250px] z-10"
      />

      {/* Main Content */}
      <div className="relative z-20 text-white max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 dark:text-gray-100">
          {headingText}
        </h2>
        <a
          href={link} // Link passed via props
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security enhancement for external links
        >
          <button className="bg-[#17aee7] text-white px-6 py-3 rounded-md text-lg md:text-xl font-semibold hover:bg-[#17b0e7e4] transition ease-in-out duration-200 dark:bg-[#1cb8e0] dark:hover:bg-[#1cb8e0c2]">
            Book a Call
          </button>
        </a>
      </div>
    </section>
  );
};

export default SecondFooter;
