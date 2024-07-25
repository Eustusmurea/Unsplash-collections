import React, { useContext, useState } from "react";
import searchIcon from "./../assets/Search.svg";
import { ImageContext } from "@/App";
import { ImageContextType } from "@/pages/types";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const context = useContext<ImageContextType | undefined>(ImageContext);

  if (!context) {
    throw new Error(
      "ImageContext must be used within an ImageContext.Provider"
    );
  }

  const { fetchData } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async () => {
    await fetchData(
      `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${
        import.meta.env.VITE_REACT_APP_ACCESS_KEY
      }`
    );
    setSearchValue("");
  };

  const handleButtonSearch = () => handleSearch();

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added in the textarea
      handleSearch();
    }
  };

  return (
    <div className="relative mt-4 w-full sm:w-72 md:w-80">
      <textarea
        placeholder="Enter your keywords..."
        className="search-input p-4 w-full border rounded pl-10"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        rows={3}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue.trim()}
        className={`bg-blue-600 px-6 py-2.5 text-white rounded-tr ${
          !searchValue.trim()
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-700"
        }`}
      >
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </button>
    </div>
  );
};

export default Searchbar;
