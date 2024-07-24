import React, { useContext, useState } from "react";
import searchIcon from "./../assets/Search.svg";
import { ImageContext } from "@/App";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const { fetchData } = useContext(ImageContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData({
      url: `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    });
    setSearchValue("");
  };

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchData({
        url: `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      });
      setSearchValue("");
    }
  };

  return (
    <div className="relative mt-4 w-full sm:w-72 md:w-80">
      <input
        type="text"
        placeholder="Enter your keywords..."
        className="search-input p-4 w-80 border rounded-full pl-10"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr"
      >
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </button>
    </div>
  );
};

export default Searchbar;
