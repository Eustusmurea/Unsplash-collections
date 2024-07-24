import React from "react";
import searchIcon from "./../assets/Search.svg";

const Searchbar = () => {
  return (
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
  );
};

export default Searchbar;
