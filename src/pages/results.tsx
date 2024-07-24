import Search from "../components/Searchbar";
import Images from "../pages/Images";

const Results = () => {
  return (
    <div className="bg-white">
      <div>
        <img src="src/assets/gradiend-bg@2x.png" alt="gradient" />
      </div>
      <div className="p-4">
        <Search />
      </div>
      <div className="results">
        <Images />
      </div>
    </div>
  );
};

export default Results;
