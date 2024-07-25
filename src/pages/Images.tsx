import React, { useContext } from "react";
import { ImageContext } from "@/App";
import Image from "@/components/image";
import Skeleton from "../components/Skeleton";
import { ImageContextType } from "@/pages/types";

const Images = () => {
  const context = useContext<ImageContextType | undefined>(ImageContext);

  if (!context) {
    throw new Error(
      "ImageContext must be used within an ImageContext.Provider"
    );
  }

  const { response, isLoading } = context;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
      {isLoading ? (
        <Skeleton item={10} />
      ) : response && response.length > 0 ? (
        response.map((data, key) => <Image key={key} data={data} />)
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default Images;
