import React from "react";

interface ImageProps {
  data: {
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
  };
}

const Image: React.FC<ImageProps> = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noopener noreferrer">
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </a>
  );
};

export default Image;
