import React, { useState } from "react";
import "./ImageWithLoader.css";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  width = "100%",
  height = "auto"
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ width, height }} className="image-container">
      {loading && <div className="skeleton" />}
      <img
        src={src}
        alt={alt}
        className="image"
        style={{ display: loading ? "none" : "block" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageWithLoader;
