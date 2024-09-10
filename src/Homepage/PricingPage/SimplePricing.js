import React from "react";
import LandingPage1 from "../../assets/PricingSection/LandingPage1.webp";
import PrialtoUnit from "../../assets/PricingSection/PrialtoUnit.webp";

const SimplePricing = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="w-full bg-white dark:bg-[#000000]">
      <div className="w-[88%] mx-auto">
        <section
          className={`py-8 md:py-16 flex flex-col md:flex-row dark:text-white items-start`}
        >
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Why Customers Choose <br />
              <span className="text- font-bold">Vassist Over Alternatives</span>
            </h1>
            <p className="text-lg leading-relaxed dark:text-gray-300">
              When you get better support, your company achieves more. Unlike
              other{" "}
              <span className="text-[#1392b5] font-semibold dark:text-[#34c7f3]">
                virtual assistant
              </span>{" "}
              providers who simply match you with pre-vetted individuals, we’re
              a managed service with a proactive, “can-do” culture.
            </p>
            <p className="text-lg leading-relaxed dark:text-gray-300">
              We back each of our assistants with an Engagement Manager, backup
              support, management and training teams, and{" "}
              <span className="text-[#1392b5] font-semibold dark:text-[#34c7f3]">
                enterprise-level security.
              </span>
            </p>
            <p className="text-lg leading-relaxed dark:text-gray-300">
              We onboard every Vassist assistant and provide them with
              behind-the-scenes support so you get highly trained people who
              quickly integrate into your workflow and systems.
            </p>
            <div className="mt-5">
              <a
                href="#"
                className="font-semibold text-lg no-underline dark:text-gray-300"
              >
                Ready for proactive support?{" "}
                <span className="text-[#1392b5] dark:text-[#34c7f3] hover:underline">
                  Book a Call.
                </span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={LandingPage1}
              alt="Customer Service Representative"
              className=""
            />
          </div>
        </section>

        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              What's Included in a Prialto Unit
            </h2>
          </div>
          <div className="flex flex-wrap justify-between items-center bg-[#f5f5f3] dark:bg-[#1c1c1c] shadow-lg p-8 rounded-lg">
            {/* Left Section */}
            <div className="w-full md:w-1/3 text-left">
              <h4 className="text-lg font-semibold text-[#17aee7] dark:text-[#34c7f3]">
                Dedicated Assistant
              </h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300 md:w-[80%]">
                You'll have a close working relationship with your Prialto
                assistant. Every assistant goes through a month-long training
                program before working with our members. We also provide ongoing
                training to ensure your assistant continuously upgrades their
                skills and deepens their knowledge of business practices and
                technology.
              </p>
              <h4 className="text-lg font-semibold mt-6 text-[#17aee7] dark:text-[#34c7f3]">
                55 Hours/ Month
              </h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300 md:w-[80%]">
                One "unit" comes with 55 hours of support per month and free
                episodic overflow time. Based on 15+ years of experience, we
                have found that 55 hours works well for most professionals.
              </p>
            </div>

            {/* Center Section with Image */}
            <div className="mb-7 md:mb-0">
              <div className="w-full justify-center flex items-center text-center py-4">
                <img
                  src={PrialtoUnit}
                  alt="Prialto Unit Graphic"
                  className="mx-auto mb-4"
                  style={{ width: "240px", height: "auto" }}
                />
              </div>
              <h3 className="text-2xl font-bold dark:text-gray-100">
                $1500/ month
              </h3>
            </div>

            {/* Right Section */}
            <div className="text-left w-full md:w-1/3">
              <h4 className="text-lg font-semibold text-[#17aee7] dark:text-[#34c7f3]">
                Engagement Manager
              </h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300 md:w-[80%]">
                Your engagement manager (EM) ensures you get the most out of
                your Prialto unit. Your Engagement Manager will work with you to
                create custom processes, troubleshoot issues, and act as your
                process design architect and delegation mentor.
              </p>
              <h4 className="text-lg font-semibold mt-6 text-[#17aee7] dark:text-[#34c7f3]">
                Backup Assistant
              </h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300 md:w-[80%]">
                Our team-based approach means that you’ll always have multiple
                other teammates who know your processes and can access them in
                the Prialto system to take over where others left off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePricing;
