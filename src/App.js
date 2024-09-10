import React, { useState, useEffect, useRef } from "react"; // Added useRef here
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Homepage from "./Homepage/Homepage";
import AssistMePage from "./AssistMePage";
import PrivacyPolicy from "./PrivacyPolicy";
import "./App.css";
import WhyChooseDetailPage from "./Homepage/WhyChooseDetailPage";
import PricingPage from "./Homepage/PricingPage/PricingPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false); // Initialize darkMode to false
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <SwipeableRoutes toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </Router>
  );
}

const SwipeableRoutes = ({ toggleDarkMode, darkMode }) => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      console.log("Swiped right:", eventData);
      navigate(-1); // Navigate to the previous page on swipe right
    },
    delta: 10, // Minimum distance required for a swipe
  });

  const pricingRef = useRef(null);

  return (
    <div {...handlers} className="h-full w-full">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
              pricingRef={pricingRef}
            />
          }
        />
        <Route
          path="/assist-me"
          element={
            <AssistMePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/why-choose-us"
          element={
            <WhyChooseDetailPage
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/pricing"
          element={
            <PricingPage
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
