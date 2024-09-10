import React from "react";
import Layout from "./Layout";
import tabletopicon from "../assets/WhyUsDetailPage/table-top-icon.webp";
import tablebottomicon from "../assets/WhyUsDetailPage/table-bottom-icon.webp";
import "./WhyChooseDetailPage.css";
import ProductivityPath from "./ProductivityPath";
import SecondFooter from "./SecondFooter";
import personcalling from "../assets/ForWhyChooseUs/personcalling.webp";

const WhyChooseDetailPage = ({ toggleDarkMode, darkMode }) => {
  return (
    <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
      <div className="bg-white dark:bg-[#151515] text-gray-900 dark:text-white">
        <section className="py-8 md:py-16 w-[88%] mx-auto ">
          {/* upper first section starting */}
          <section
            className={`py-8 md:py-16  flex flex-col md:flex-row dark:text-white`}
          >
            <div className="w-full md:w-1/2 space-y-6 text-left">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Why Customers Choose <br />
                <span className="text- font-bold">
                  Vassist Over Alternatives
                </span>
              </h1>
              <p className="text-lg leading-relaxed">
                When you get better support, your company achieves more. Unlike
                other{" "}
                <span className="text-[#1392b5] font-semibold">
                  virtual assistant
                </span>{" "}
                providers who simply match you with pre-vetted individuals,
                we’re a managed service with a proactive, “can-do” culture.
              </p>
              <p className="text-lg leading-relaxed">
                We back each of our assistants with an Engagement Manager,
                backup support, management and training teams, and{" "}
                <span className="text-[#1392b5] font-semibold">
                  enterprise-level security.
                </span>
              </p>
              <p className="text-lg leading-relaxed">
                We onboard every Vassist assistant and provide them with
                behind-the-scenes support so you get highly trained people who
                quickly integrate into your workflow and systems.
              </p>
              <div className="mt-5">
                <a href="#" className=" font-semibold text-lg no-underline ">
                  Ready for proactive support?{" "}
                  <span className="text-[#1392b5] hover:underline">
                    Book a Call.
                  </span>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src={personcalling}
                alt="Customer Service Representative"
                className=""
              />
            </div>
          </section>
          {/* upper first section ending */}

          {/* Section Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 md:mb-10">
            How Prialto Compares To Other Alternatives
          </h2>

          {/* Main Comparison Table */}
          <div className="relative rounded-lg flex flex-col md:flex-row py-16 md:py-">
            {/* Table */}
            <article className="w-full flex flex-col space-y-7 md:space-y-0 md:flex-row">
              {/* Left Column (Feature List) */}
              <aside className="bg-teal-500 text-white w-full md:w-[20%] h-auto md:h-[450px] mt-7 rounded-tl-2xl rounded-bl-2xl  text-left flex flex-col justify-between py-6 md:py-8 px-6 space-y-4 md:space-y-6">
                <h3 className="font-semibold text-base md:text-lg">
                  Expertise
                </h3>
                <h3 className="font-semibold text-base md:text-lg">
                  Performance Management
                </h3>
                <h3 className="font-semibold text-base md:text-lg">
                  Back-up Support
                </h3>
                <h3 className="font-semibold text-base md:text-lg">
                  Scalability
                </h3>
                <h3 className="font-semibold text-base md:text-lg">Cost</h3>
                <h3 className="font-semibold text-base md:text-lg">
                  Information Security
                </h3>
              </aside>

              {/* Middle Column (Prialto Features for Large Screens) */}
              <section className=" bg-gray-800 text-white w-full md:w-[27%] lg:w-[50%] xl:w-[35%] rounded-t-2xl md:rounded-e-2xl text-left flex flex-col justify-between py-6 md:py-8 px-6 space-y-4 md:space-y-6 relative">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Vassist
                </h3>
                <p className="text-sm md:text-base">
                  12+ years of proven best practices.
                </p>
                <p className="text-sm md:text-base">
                  Internal management and quality assurance processes.
                </p>
                <p className="text-sm md:text-base">
                  Fully-trained primary and secondary backup assistants.
                </p>
                <p className="text-sm md:text-base">
                  Easy. Increase or decrease support without any disruptions.
                </p>
                <p className="text-sm md:text-base">
                  Simple, flat-rate pricing.
                </p>
                <p className="text-sm md:text-base">
                  Comprehensive information security protection.
                </p>

                {/* Flowers (Images Only Visible on Large Screens) */}
                <img
                  src={tabletopicon}
                  alt="Top Icon"
                  className="hidden lg:block absolute -top-[123px] -left-[20px] w-[100px] h-[100px] z-10"
                />
                <img
                  src={tablebottomicon}
                  alt="Bottom Icon"
                  className="hidden lg:block absolute -bottom-[77px] -right-[2px] w-[100px] h-[100px] z-10"
                />
              </section>

              {/* Right Column (Comparisons) */}
              <section className="flex flex-col md:flex-row gap-0.5 md:mt-7">
                <section className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white w-full md:w-auto h-auto md:h-[600px] lg:h-[550px] md:mt-7 md:mt-0 text-left flex flex-col justify-between py-6 md:py-8 px-6 space-y-4 md:space-y-6">
                  <h4 className="text-sm md:text-base font-semibold">
                    Virtual Assistant Agencies
                  </h4>
                  <p className="text-sm md:text-base">Varies.</p>
                  <p className="text-sm md:text-base">Minimal.</p>
                  <p className="text-sm md:text-base">
                    Only if you have multiple assistants.
                  </p>
                  <p className="text-sm md:text-base">
                    Time-consuming. Spend hours training a new assistant.
                  </p>
                  <p className="text-sm md:text-base">
                    Hourly, multiplied by each role.
                  </p>
                  <p className="text-sm md:text-base">Varies.</p>
                </section>
                <section className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white w-full md:w-auto md:rounded-r-2xl h-auto md:h-[600px] lg:h-[550px] mt-7 md:mt-0 text-left flex flex-col justify-between py-6 md:py-8 px-6 space-y-4 md:space-y-6">
                  <h4 className="text-sm md:text-base font-semibold">
                    In-House
                  </h4>
                  <p className="text-sm md:text-base">Varies.</p>
                  <p className="text-sm md:text-base">None.</p>
                  <p className="text-sm md:text-base">
                    Only if you have multiple assistants.
                  </p>
                  <p className="text-sm md:text-base">
                    Time-consuming. You have to hire or fire.
                  </p>
                  <p className="text-sm md:text-base">
                    Salary + benefits, management, equipment, and training
                    costs.
                  </p>
                  <p className="text-sm md:text-base">Varies.</p>
                </section>
              </section>
            </article>
          </div>
        </section>
        <ProductivityPath toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <SecondFooter
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          headingText={"Ready to Discuss Your Admin Needs?"}
        />
      </div>
    </Layout>
  );
};

export default WhyChooseDetailPage;
