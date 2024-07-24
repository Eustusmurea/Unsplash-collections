import React from "react";

interface SkeletonProps {
  item: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ item }) => {
  return (
    <>
      {Array(item)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="h-72 w-full object-cover rounded-lg shadow-md bg-gray-300"
          ></div>
        ))}
    </>
  );
};

export default Skeleton;
