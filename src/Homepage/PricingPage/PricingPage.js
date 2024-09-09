import React from "react";
import SimplePricing from "./SimplePricing";
import Layout from "../Layout";
import SecondFooter from "../SecondFooter";
import FAQ from "./FAQ";
import PricingPlans from "./PricingPlans";

const PricingPage = ({ toggleDarkMode, darkMode }) => {
  return (
    <div>
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        <SimplePricing toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <FAQ toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <PricingPlans toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="bg-white dark:bg-[#000000]">
          <SecondFooter
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            headingText={"Have Questions? Let's Discuss Your Needs"}
          />
        </div>
      </Layout>
    </div>
  );
};

export default PricingPage;
