import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Homepage/Components/loader';
import Header from './Homepage/Header';
import { FaArrowLeft } from 'react-icons/fa'; // Import the icon from react-icons
import { FaPhoneAlt } from "react-icons/fa";

const AssistMePage = ({ toggleDarkMode, darkMode, handleScrollToPricing }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
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
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw9j5xNEHkRJiyhWrXCc99Mje_ejLuNfyUTnd7Xfz-ZkkZPKk1CCD3hlnvG5YwXH8Zb5w/exec';

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
          message: '',
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

  const handleNavigateToPricing = () => {
    navigate('/');
    setTimeout(() => {
      const event = new Event('scrollToPricing');
      window.dispatchEvent(event);
    }, 100);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} handleScrollToPricing={handleNavigateToPricing} />
      <section className="py-14 min-h-screen sm:py-16 lg:py-20 bg-[#F4F4F8] dark:bg-[#151515]  text-gray-900 dark:text-gray-100">
        <div className="w-[88%] mx-auto">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-start">
            <div className="md:w-[40%] min-w-[300px] w-full text-left">
              <div className="flex justify-start mb-6">
                <button
                  onClick={goBack}
                  className="flex items-center px-4 py-2 bg-[#7469B6] dark:bg-[#17AEE7] text-white rounded hover:bg-purple-950"
                >
                  <FaArrowLeft className="mr-2" /> {/* Use the icon here */}
                  {/* No text here since we're using an icon */}
                </button>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold mb-2 sm:mb-4 md:mb-5 lg:mb-8">
                Call on us when you need a hand
              </h2>
              <p className="text-sm sm:text-base mb-6">
                Do you want to learn more? Speak to our team today.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Full name *
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7469B6] dark:bg-black dark:text-white"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Business email address *
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7469B6] dark:bg-black dark:text-white"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Phone number *
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7469B6] dark:bg-black dark:text-white"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 dark:border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7469B6] dark:bg-black dark:text-white"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button
                    className="w-full sm:w-auto text-sm px-6 py-2 bg-[#7469B6] dark:bg-[#17AEE7] text-white font-light rounded-md shadow-sm hover:bg-purple-700 dark:hover:bg-cyan-500 focus:outline-none focus:ring-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader /> : 'SUBMIT'}
                  </button>
                </div>
              </form>
              <button onClick={handleNavigateToPricing} className="mt-4 text-[#7469B6] dark:text-[#17AEE7] hover:underline">
                Go to Pricing
              </button>
            </div>
            <div className="border-2 sm:border-0 dark:border-none w-full md:max-w-[300px] bg-[#F4F4F8] dark:bg-black shadow-lg p-6 text-left">
              <h3 className="text-lg font-medium mb-4 dark:text-[#17AEE7] text-[#7469B6]">Get In Touch</h3>
              <ul className="space-y-3 text-sm font-extralight">
                <li className="border-b-2 pb-2">
                  <a href="tel:941-623-4590" className="flex items-center text-[#7469B6] dark:text-[#17AEE7] hover:underline">
                    <FaPhoneAlt className="mr-2" /> {/* Adds the call icon */}
                    Call
                  </a>
                  <p>941-623-4590</p>
                </li>
                <li className="border-b-2 pb-2">
                  <span className="">Support</span>
                  <p>info@virtualassistancepro.com</p>
                </li>
                {/* <li className="border-b-2 pb-2">
                  <span className="">Media</span>
                  <p>media@gmail.com</p>
                </li> */}
                <li className="">
                  <span className="font-medium text-[#7469B6] dark:text-[#17AEE7]">Mailing Address</span>
                  <p className="mt-1">• 5825 gulfton st apt 3205 Houston tx 77081</p>
                  <p className="mt-4">• 7901 4th St N Ste 300, Saint Petersburg, FL 33702</p>
                  {/* <p>time etc</p>
                  <p>256 suite</p>
                  <p>new york</p>
                  <p>ny 100101</p>
                  <p>united States</p> */}
                </li>
                <li className="mt-4">
                  {/* <a href="#" className="font-medium text-[#7469B6] dark:text-[#17AEE7] hover:underline">
                    Get Direction
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default AssistMePage;
