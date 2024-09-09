import React from "react";
import firstimg from "../assets/NewComponent/firstimage.webp";
import secondimg from "../assets/NewComponent/productivity.webp";
import thirdimg from "../assets/NewComponent/secondimage.webp";

const NewComponent = () => {
  return (
    <div className="bg-white dark:bg-[#000000] text-gray-900 dark:text-white">
      <div className="py-16 w-[88%] mx-auto ">
        {/* First Section */}
        <section className="flex flex-col lg:flex-row justify-between items-center text-left py-10 pb-24">
          {/* Left Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-teal-600 dark:text-teal-400">
              PROACTIVE
            </p>
            <h2 className="text-[38px] font-black mt-2 mb-4">
              Quickly Enhance <br /> Productivity
            </h2>
            <p className="text-lg mb-6">
              We efficiently analyze your workflow and draw upon our
              near-endless catalog of best practices to proactively outline what
              work we can perform on your behalf.
            </p>
            <p className="text-lg mb-6">
              Along with your assistant, you'll be paired with one of our
              Engagement Managers who acts as your productivity thought leader,
              giving you guidance on how to best delegate your tasks. Every
              conversation with us is a powerful productivity pit stop that
              helps you fine-tune your efficiency to leave you more at ease and
              better focused.
            </p>
          </div>
          {/* Right Image Section with floating elements */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            {/* Placeholder Image */}
            <div className="">
              <img
                src={firstimg}
                alt="Main person placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="flex flex-col lg:flex-row-reverse justify-between items-center text-left py-10 pb-24">
          {/* Left Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-teal-600 dark:text-teal-400">
              Experience
            </p>
            <h2 className="text-[38px] font-black mt-2 mb-4">
              Leave the Training & <br /> Management to Us
            </h2>
            <p className="text-lg mb-6">
              Each Vassist Assistant is provided with weeks of up-front training
              on top of their existing education. And it does not stop there:
              They are supported with a deep bench of experienced Vassist
              people, tools and processes. You’ll be pleasantly surprised by how
              we “just get it” without your need to waste extra time with
              training and management.
            </p>
          </div>
          {/* Right Image Section with floating elements */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            {/* Placeholder Image */}
            <div className="">
              <img
                src={thirdimg}
                alt="Main person placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* third section */}
        <section className="flex flex-col lg:flex-row justify-between items-center text-left py-10 pb-24">
          {/* Left Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-teal-600 dark:text-teal-400">
              Continuity
            </p>
            <h2 className="text-[38px] font-black mt-2 mb-4">
              Never Start Over Again
            </h2>
            <p className="text-lg mb-6">
              All of your work is cross-trained among a team of people and
              everything is consistently documented, even as your tools change
              and processes evolve.
            </p>
            <p className="text-lg mb-6">
              If your Vassist assistant is temporarily out for vacation, is
              promoted, or leaves, the transition is seamlessly managed by us. A
              Vassist assistant with existing knowledge is there to step in and
              our team of managers makes sure your Vassist support stays intact.
            </p>
          </div>
          {/* Right Image Section with floating elements */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            {/* Placeholder Image */}
            <div className="">
              <img
                src={secondimg}
                alt="Main person placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewComponent;
