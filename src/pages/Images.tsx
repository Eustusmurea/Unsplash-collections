import React, { useContext } from "react";



 const Images = () => {
    const { response, isloading} = useContext(ImagesContext);


  return (
    <>
      <div className="grid  md:grid-cols- lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
 {response.map((data, key) => ()}
      </div>
    </>
  );
};

export default Images;
