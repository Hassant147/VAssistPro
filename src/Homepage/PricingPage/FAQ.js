import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "We can start scoping your needs right away. Onboarding for individuals and small teams typically begins within 3-5 days. Larger teams start according to an agreed upon timeline.",
    },
    {
      question: "What is a Prialto unit?",
      answer:
        'One "unit" comes with 55 hours of support per month, a dedicated Engagement Manager, fully trained primary and secondary backup assistants, and free episodic overflow time.',
    },
    {
      question: "How does the fee structure work?",
      answer:
        "Flat, monthly pricing starts at $1,500 per month with a 90-day minimum per unit plus a $250 initial set-up fee in the first month.",
    },
    {
      question: "What happens if I go over 55 hours in a month?",
      answer:
        "We never turn off support or charge overage fees. If you consistently need additional support, you can add more units at any time.",
    },
    {
      question: "What hours do assistants work?",
      answer:
        "9:00am – 6:00pm Monday through Friday, per US and UK time zones. Extended hours can be arranged.",
    },
    {
      question: "How do I provide all of my log-ins and other secure info?",
      answer:
        "We use a suite of technology and management best practices to securely enable login sharing.",
    },
    {
      question: "Will my assistant know how to use my tools?",
      answer:
        "Yes. If your assistant has not used your tools, our training staff will support them in learning it.",
    },
    {
      question: "What are your assistants’ qualifications?",
      answer:
        "Most assistants have a bachelor's degree or extensive experience in business support services.",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#000000] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg ${index === 0 ? "rounded-t-2xl" : ""} ${
                index === faqs.length - 1 ? "rounded-b-2xl" : ""
              } `}
            >
              <div
                className="flex items-center p-4 gap-x-4 cursor-pointer bg-[#f6f5f3] dark:bg-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-gray-900 dark:text-gray-100 text-xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-[#17aee7]" />
                  ) : (
                    <FaPlus className="text-[#17aee7]" />
                  )}
                </span>
                <h4 className="md:text-xl text-left font-bold text-gray-900 dark:text-gray-100">
                  {faq.question}
                </h4>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#f6f5f3]">
                  <div className="p-4 text-left ml-9 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                    <span>{faq.answer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
