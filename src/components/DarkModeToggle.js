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
        className="fixed top-[7.5rem] right-[3rem] z-50"
    >
      <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full shadow-lg transition duration-300 focus:outline-none
                ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `}
            // title={darkMode ? 'Light Mode' : 'Dark Mode'}
            title="It is under maintenance"
            >
            {darkMode ? (
                <FaSun className="w-6 h-6" />
            ) : (
                <FaMoon className="w-6 h-6" />
            )}
        </button>

    </div>
  );
};

export default DarkModeToggle;
