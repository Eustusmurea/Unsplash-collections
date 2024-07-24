import React, { useContext } from "react";
import { ImageContext } from "@/App";
import Image from "@/pages/image";
import Skeleton from "./Skeleton";


 const Images = () => {
    const { response, isLoading} = useContext(ImageContext);


  return (
    <>
      <div className="grid  md:grid-cols- lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
 {!isLoading?  <Skeleton item={10} /> response.map((data, key) => <Image key={key} data={data} />)}
      </div>
    </>
  );
};

export default Images;
s