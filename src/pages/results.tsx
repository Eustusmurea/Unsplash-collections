import React from "react";
import { Photo } from "./types";

interface ResultsProps {
  photos: Photo[];
}

const Results: React.FC<ResultsProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="w-full h-64 bg-gray-200">
          <img
            src={photo.urls.small}
            alt={photo.alt_description}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Results;
