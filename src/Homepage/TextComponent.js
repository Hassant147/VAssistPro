import React, { useEffect, useState } from 'react';

const TextComponent = () => {
  const [theme, setTheme] = useState('light');

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gray-100 dark:bg-[#151515] dark:text-white">
      <div className="w-[88%] mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light">
        <p className="">
          Discover How <span className="font-medium text-[#6155A8] dark:text-[#DFBB00]">V ASSIST PRO</span> Clients Maximize Productivity
          <br />
          with Their Virtual Assistants
        </p>
      </div>
    </section>
  );
};

export default TextComponent;
