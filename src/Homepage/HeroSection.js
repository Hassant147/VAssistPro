import React from 'react';
import backgroundImage from '../assets/ForHeroSection/bgImg.svg'; // Adjust the path as necessary
import overlayImage from '../assets/ForHeroSection/Overlay.svg'; // Adjust the path as necessary
import { FaArrowDown } from 'react-icons/fa'; // Using react-icons for the arrow icon
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
    return (
        <section
            className="z-10 hero-section w-full h-screen lg:min-h-screen flex relative bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
                style={{
                    backgroundImage: `url(${overlayImage})`,
                }}
            ></div>
            <div className="text-start px-6 md:px-20 pt-60 text-white relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Welcome Aboard!</h1>
                <p className="text-2xl  md:text-3xl lg:text-3xl xl:text-4xl mt-4">LET'S GET STARTED!</p>
            </div>
            <div className="scroll-arrow">
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="arrow-container">
                    <FaArrowDown className="arrow-icon" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
