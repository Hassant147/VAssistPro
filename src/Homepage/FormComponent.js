import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Components/loader';  // Import the Loader component
import lightTick from '../assets/ForFormComponent/light-tick.svg';
import DarkTick from '../assets/ForFormComponent/dark-tick.svg';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check if the body has the dark class
        const darkModeClass = document.body.classList.contains('dark');
        setIsDarkMode(darkModeClass);
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const validateForm = () => {
        const { name, email, phone } = formData;
        if (!name.trim() || !email.trim() || !phone.trim()) {
            toast.error('All fields are required.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }
        // Additional validation can be added here (e.g., email format, phone number format)
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        const scriptURL = 'https://script.google.com/macros/s/AKfycby9tXz_xKC5SIv1FzyKrZWN073QyUv5ZYXS_M44OGPQcms1JfT8ZSAYbQCmslKwpnagdQ/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: new URLSearchParams(formData),
        })
            .then((response) => response.text())
            .then((result) => {
                console.log('Success:', result);
                toast.success('Form submitted successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('There was an error submitting the form', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsSubmitting(false);
            });
    };

    return (
        <section className="py-14 sm:py-16 lg:py-20 bg-gray-100 dark:bg-[#151515] dark:text-white">
            <div className="w-[88%] mx-auto text-center">
                <div className="flex flex-col md:flex-row justify-between items-start mx-auto">
                    <div className="md:max-w-[470px] md:w-[50%] md:mb-8 lg:mb-0 text-left mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold mb-2 sm:mb-4 md:mb-5 lg:mb-8">
                            Try A Virtual Assistant For Free
                        </h2>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-light text-black dark:text-gray-300 mb-4">
                            Tell us a bit about yourself and what you need help with. We can then match you to the perfect assistant who will
                        </p>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-medium text-black dark:text-gray-300 mb-2 sm:mb-4 md:mb-5 lg:mb-8">
                            Thanks we'll be in touch soon.
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-black dark:text-gray-300 mb-1" htmlFor="name">
                                    Your name *
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6155A8] dark:bg-black dark:text-white"
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black dark:text-gray-300 mb-1" htmlFor="email">
                                    Business email address *
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6155A8] dark:bg-black dark:text-white"
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black dark:text-gray-300 mb-1" htmlFor="phone">
                                    Phone number *
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6155A8] dark:bg-black dark:text-white"
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    className="w-full text-[10px] sm:w-auto px-3 dark:text-black dark:bg-[#DFBB00] py-3 bg-[#6155A8] text-white font-semibold rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-[#6155A8] disabled:opacity-50"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <Loader /> : 'Continue to next step'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[30%] w-full bg-gray-100 dark:bg-black rounded-lg shadow-lg p-4 lg:p-7 text-start md:mt-0 mt-8">
                        <h3 className="text-lg font-semibold mb-4">Your free trial</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center dark:border-b-[#DFBB00] border-b-[#6155A8] border-b-[0.5px] pb-2 text-sm md:text-sm xl:text-base text-black dark:text-gray-300">
                                <img
                                    className="w-3 h-3 mr-2"
                                    src={isDarkMode ? DarkTick : lightTick} // Use the dark mode state to set the tick
                                    alt="Tick Icon"
                                />
                                No credit card required
                            </li>
                            <li className="flex items-center dark:border-b-[#DFBB00] border-b-[#6155A8] border-b-[0.5px] pb-2 text-sm md:text-sm xl:text-base text-black dark:text-gray-300">
                                <img
                                    className="w-3 h-3 mr-2"
                                    src={isDarkMode ? DarkTick : lightTick} // Use the dark mode state to set the tick
                                    alt="Tick Icon"
                                />
                                No purchase required
                            </li>
                            <li className="flex items-center dark:border-b-[#DFBB00] border-b-[#6155A8] border-b-[0.5px] pb-2 text-sm md:text-sm xl:text-base text-black dark:text-gray-300">
                                <img
                                    className="w-3 h-3 mr-2"
                                    src={isDarkMode ? DarkTick : lightTick} // Use the dark mode state to set the tick
                                    alt="Tick Icon"
                                />
                                Up to $25 in value
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default FormComponent;
