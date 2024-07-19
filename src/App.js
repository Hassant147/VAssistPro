import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Homepage from './Homepage/Homepage';
import AssistMePage from './AssistMePage';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark');
    setDarkMode(currentTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
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

  const handleScrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div {...handlers} className="h-full w-full">
      <Routes>
        <Route path="/" element={<Homepage toggleDarkMode={toggleDarkMode} darkMode={darkMode} handleScrollToPricing={handleScrollToPricing} pricingRef={pricingRef} />} />
        <Route path="/assist-me" element={<AssistMePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
