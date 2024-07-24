import React from "react";
import Search from "../components/Searchbar";
import ImageGrid from "@/components/ImageGrid";

const images = [
  { src: "https://via.placeholder.com/600x400", alt: "Image 1" },
  { src: "https://via.placeholder.com/600x400", alt: "Image 2" },
  { src: "https://via.placeholder.com/600x400", alt: "Image 3" },
  { src: "https://via.placeholder.com/600x400", alt: "Image 4" }
];
const Results = () => {
  return (
    <div className="bg-white">
      <div>
        <img src="src/assets/gradiend-bg@2x.png" alt="gradient" />
      </div>
      <div className="p-4">
        <Search />
      </div>
      <div className="p-4">
        <ImageGrid images={images} />
      </div>
    </div>
  );
};

export default Results;
