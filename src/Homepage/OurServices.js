import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelopeOpenText,
    faCalendarAlt,
    faReceipt,
    faKeyboard,
    faPlane,
    faGlobe,
    faCalendarCheck,
    faCar,
} from '@fortawesome/free-solid-svg-icons';
import './OurServices.css'; // Custom CSS for arrows and styles

const services = [
    {
        title: 'Inbox Management',
        description: 'Efficiently managing your emails and ensuring timely responses.',
        icon: faEnvelopeOpenText,
    },
    {
        title: 'Calendar Management',
        description: 'Keeping your schedule organized and up-to-date.',
        icon: faCalendarAlt,
    },
    {
        title: 'Expenses & Invoices',
        description: 'Handling all your financial documentation and transactions.',
        icon: faReceipt,
    },
    {
        title: 'Data Entry',
        description: 'Accurate and efficient data entry services.',
        icon: faKeyboard,
    },
    {
        title: 'Travel Booking',
        description: 'Arranging your travel plans for a hassle-free journey.',
        icon: faPlane,
    },
    {
        title: 'Website Maintenance',
        description: 'Keeping your website updated and running smoothly.',
        icon: faGlobe,
    },
    {
        title: 'Event Planning',
        description: 'Organizing events that leave a lasting impression.',
        icon: faCalendarCheck,
    },
    {
        title: 'Limoanywhere',
        description: 'Providing limousine services for your convenience.',
        icon: faCar,
    },
];

const OurServices = () => {
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
        slidesToShow: 4,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-14 sm:py-16 lg:py-20 bg-gray-100 dark:bg-black dark:text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold mb-2 md:mb-3 lg:mb-4">Our Services</h2>
                    <p className="text-gray-600 dark:text-white font-normal text-sm">
                        Tailored Solutions for Your Success, Elevate Your Experience with Our Exceptional and Comprehensive Services Today
                    </p>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="px-2 h-full">
                            <div className="bg-gray-50 dark:bg-[#151515] min-h-[350px] w-auto mx-auto shadow-lg p-10 rounded-lg service-card">
                                <div className="service-icon mb-4 text-left">
                                    <FontAwesomeIcon icon={service.icon} size="2x" />
                                </div>
                                <div className="service-content mb-4">
                                    <h3 className="text-lg mb-2 text-black font-light justify-start text-start dark:text-white">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-white text-sm font-extralight text-left">{service.description}</p>
                                </div>
                                <button className="mt-auto bg-transparent border-2 text-black dark:text-white py-2 px-4 text-sm rounded-full">
                                    View more
                                </button>
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
        </section>
    );
};

export default OurServices;
