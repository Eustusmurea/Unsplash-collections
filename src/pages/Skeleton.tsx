const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map((_, index) => (
    <div key={index} className="animate-pulse">
      <div className="bg-gray-300 h-72 rounded-lg"></div>
    </div>
  ));
};

export default Skeleton;
