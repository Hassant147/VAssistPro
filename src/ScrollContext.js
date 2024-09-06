// src/context/ScrollContext.js
import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollToPricing, pricingRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
