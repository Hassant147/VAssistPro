import React from "react";

const PricingPlans = () => {
  return (
    <div className="w-full dark:bg-[#000000] py-12">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-14">
          Who Are You Purchasing Support For?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Individual Plan */}
          <div className="bg-[#f6f5f3] rounded-br-3xl dark:bg-gray-800 rounded-t-3xl flex flex-col justify-between">
            <div className="bg-gray-800 dark:bg-gray-700 rounded-t-3xl p-6 text-white space-y-2 ">
              <div className="py-2">
                <h3 className="text-3xl md:text-2xl font-bold mb-2">
                  Individual
                </h3>
                <p className="text-lg md:text-base font-semibold">1-3 units</p>
                <p className="text-base md:text-sm">
                  55+ hours of monthly support
                </p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3.5 text-gray-700 dark:text-gray-300 text-[14px] md:text-[13px]">
                <li>1 member</li>
                <li>Individual process design</li>
                <li>Quarterly consultations</li>
                <li>Add on more units as needed</li>
                <li>Setup fee (waived with annual contract)</li>
              </ul>
            </div>
            <div className="p-6">
              <p className="text-base md:text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
                $1500 per unit /month
              </p>
              <a className="block text-center bg-[#17aee7] w-full md:w-[70%] lg:w-[53%] mx-auto text-white font-bold py-2 px-4 rounded-lg hover:bg-[#17b0e7c2] transition">
                Get Started
              </a>
            </div>
          </div>

          {/* Teams Plan */}
          <div className="bg-[#f6f5f3] rounded-br-3xl rounded-t-3xl dark:bg-gray-800 flex flex-col justify-between">
            <div className="bg-[#be4600] dark:bg-gray-700 rounded-t-3xl p-6 text-white space-y-2 ">
              <div className="py-2">
                <h3 className="text-3xl md:text-2xl font-bold mb-2">Teams</h3>
                <p className="text-lg md:text-base font-semibold">3+ units</p>
                <p className="text-base md:text-sm">
                  165+ hours of monthly support
                </p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3.5 text-gray-700 dark:text-gray-300 text-[14px] md:text-[13px]">
                <li>3+ members</li>
                <li>Team process design</li>
                <li>Monthly consultations</li>
                <li>Pooled resource benefits</li>
                <li>Discounts for contract duration</li>
              </ul>
            </div>
            <div className="p-6">
              <p className="text-base md:text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
                $1500 per unit /month
              </p>
              <a className="block text-center bg-[#17aee7] w-full md:w-[70%] lg:w-[53%]  mx-auto text-white font-bold py-2 px-4 rounded-lg hover:bg-[#17b0e7c2] transition">
                Get Started
              </a>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#f6f5f3] rounded-br-3xl rounded-t-3xl dark:bg-gray-800  flex flex-col justify-between">
            <div className="bg-[#007c81] dark:bg-gray-700 rounded-t-3xl p-6 text-white space-y-2 ">
              <div className="py-2">
                <h3 className="text-3xl md:text-2xl font-bold mb-2">
                  Enterprise
                </h3>
                <p className="text-lg md:text-base font-semibold">8+ units</p>
                <p className="text-base md:text-sm">
                  440+ hours of monthly support
                </p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3.5 text-gray-700 dark:text-gray-300 text-[14px] md:text-[13px]">
                <li>8+ members</li>
                <li>Extended, metrics-driven pilots</li>
                <li>Organization-wide process design</li>
                <li>Utilization and feedback reporting</li>
                <li>
                  Dedicated cohort of assistants and inter-department resource
                  sharing
                </li>
                <li>Team Lead support</li>
                <li>
                  Operational projects, one-off projects and temporary workforce
                  augmentation
                </li>
              </ul>
            </div>
            <div className="p-6">
              <a
                href="contact-us.html"
                className="block text-center text-[#17aee7] underline font-bold"
              >
                Talk to us for pricing and pilot design
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
