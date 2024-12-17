import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div 
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="false"
        className="fixed md:top-[7.5rem] md:right-[3rem] top-[5rem] right-[1rem] z-50"
    >
      <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full shadow-lg transition duration-300 focus:outline-none
                ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `}
            title="It is under maintenance"
      >
        {darkMode ? (
            <FaSun className="sm:w-6 sm:h-6 w-4 h-4" />
        ) : (
            <FaMoon className="sm:w-6 sm:h-6 w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
