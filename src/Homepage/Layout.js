import React from "react";
import Header from "./Header";
import FooterComponent from "./Footer";

const Layout = ({ toggleDarkMode, darkMode, children }) => {
  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div>{children}</div>
      <FooterComponent />
    </div>
  );
};

export default Layout;
