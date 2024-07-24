// ImageGrid.tsx
import React from "react";
import ImageWithLoader from "./ImageWithLoader";

interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <ImageWithLoader
          key={index}
          src={image.src}
          alt={image.alt}
          width="100%"
          height="auto"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
