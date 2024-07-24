import React, { useState } from "react";
import "./../App.css";
import searchIcon from "./../assets/Search.svg";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  return (
    <div className="background h-screen flex items-center justify-center ${darkMode ? 'dark' :''}">
      <div className="absolute top-4 left-4 p-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full margin:50% bg-gray-200  dark:bg-gray-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Search</h1>
        <p className="text-base sm:text-lg md:text-xl">
          Search high-resolution images from Unsplash
        </p>
        <div className="relative mt-4 w-full sm:w-72 md:w-80">
          <input
            type="text"
            placeholder="Enter your keywords..."
            className="search-input p-4 w-80 border rounded-full pl-10"
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="search-icon absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
