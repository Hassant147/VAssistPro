import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProductivityPath = () => {
  return (
    <section className="py-16 w-[88%] mx-auto bg-white dark:bg-[#151515] text-gray-900 dark:text-white">
      {/* Main Heading and Subheading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          What’s It Like to Work With Prialto?
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
          From onboarding to adoption, you get a process designed to amplify
          productivity every step of the way. <br /> Your Productivity Path
          looks like this:
        </p>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col md:flex-row justify-between items-start relative">
        {/* Discovery Section */}
        <div className="md:w-[35%] flex ">
          <div className="flex flex-col w-full space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-center">
              Discovery
            </h3>
            <div className="bg-gray-800 dark:bg-gray-700 text-white p-6 h-[210px] text-left rounded-t-xl rounded-e-xl space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">Needs Assessment</h4>
                <div className="text-xl font-bold">1</div>
              </div>
              <p className="text-sm text-gray-200 dark:text-gray-400">
                We’ll help you identify the tasks we can tackle to provide the
                biggest productivity boost.
              </p>
            </div>
            <div className="bg-gray-800 dark:bg-gray-700 text-white p-6 h-[210px] text-left rounded-tr-xl rounded-b-xl space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">
                  Review Your Implementation Plan
                </h4>
                <div className="text-xl font-bold">2</div>
              </div>
              <p className="text-sm text-gray-200 dark:text-gray-400">
                After the discovery process, we’ll create a shared expectation
                on how we’ll support you during your pilot.
              </p>
            </div>
            <p className="text-sm md:text-right text-center mt-4 font-bold text-gray-800 dark:text-gray-300">
              Free Consultation
            </p>
          </div>
          <div className=" hidden md:flex border-l-2 border-dotted border-red-600 dark:border-red-400 h-[490px] mt-14 ml-7"></div>
        </div>

        {/* Arrow Icon */}
        <div className="hidden md:flex justify-center items-center mx-4 my-4 md:my-0">
          <AiOutlineArrowRight className="text-3xl text-gray-600 dark:text-gray-400" />
        </div>

        <div className="flex md:hidden border-b-2 border-dotted border-red-600 dark:border-red-400 h-[5px] w-full mt-3 "></div>

        {/* Onboarding Section */}
        <div className="flex flex-col w-full md:w-[35%] md:-ml-10 mt-5 md:mt-0 space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-center">
            Onboarding
          </h3>
          <div className="bg-[#17aee7] dark:bg-[#1392b5] text-white p-6 h-[210px] text-left rounded-t-xl rounded-e-xl space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg">
                Onboard with Your Support Team
              </h4>
              <div className="text-xl font-bold">3</div>
            </div>
            <p className="text-sm">
              You’ll meet your virtual assistant and support team. We’ll get
              everyone set up in your systems.
            </p>
          </div>
          <div className="bg-[#17aee7] dark:bg-[#1392b5] text-white p-6 h-[210px] text-left rounded-tr-xl rounded-b-xl space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg">Offload Core Tasks</h4>
              <div className="text-xl font-bold">4</div>
            </div>
            <p className="text-sm">
              Feel the Prialto difference immediately. Offload key tasks to your
              new assistant. They’ll get to know you and your preferences.
            </p>
          </div>
          <p className="text-sm  text-center md:text-left m-0 text-[#17aee7] dark:text-[#1392b5] font-bold">
            Agreement Signed
          </p>
        </div>

        {/* Arrow Icon */}
        <div className=" hidden md:flex justify-center items-center mx-4 my-4 md:my-0">
          <AiOutlineArrowRight className="text-3xl text-gray-600 dark:text-gray-400" />
        </div>

        {/* Adoption Section */}
        <div className="flex flex-col w-full md:w-[35%] md:-ml-10 mt-5 md:mt-0 space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-center">Adoption</h3>
          <div className="bg-teal-600 dark:bg-teal-500 text-white p-6 h-[210px] text-left rounded-t-xl rounded-e-xl space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg">
                Optimize and Expand Your Processes
              </h4>
              <div className="text-xl font-bold">5</div>
            </div>
            <p className="text-sm">
              Your Engagement Manager will work with you to improve efficiencies
              and identify new ways we can support you.
            </p>
          </div>
          <div className="bg-teal-600 dark:bg-teal-500 text-white p-6 h-[210px] text-left rounded-tr-xl rounded-b-xl space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg">
                Amplify Your Productivity
              </h4>
              <div className="text-xl font-bold">6</div>
            </div>
            <p className="text-sm">
              Focus on your priorities. Your assistant takes care of tasks and
              proactively looks for ways to make your life easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivityPath;
