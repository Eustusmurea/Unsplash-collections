import { useState } from "react";
import "./../App.css";
import Searchbar from "@/components/Searchbar";

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
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
